import Link from "next/link";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const pcBuilder = ({ categories }) => {
  const selectedProducts = useSelector((state) => state.products);
  console.log("selectedproduct", selectedProducts);
  // Assuming "products" is the slice name where products are stored

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center">Build Your PC Now!</h1>
      <div className="flex justify-center">
        <img className="md:w-2/12 w-8/12" src="https://i.ibb.co/YPgdcHZ/Pngtree-computer-111480.png" alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md border p-4 hover:bg-gray-100">
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            {!selectedProducts.find(
              (selectedProduct) => selectedProduct?.Category === category.id
            )?.ProductName ? (
              <Link href={`/pcBuilder/${category.id}`} className="text-blue-600">Select a {category.name}</Link>
            ) : (
              <p className="text-green text-green-600 font-bold">
                {
                  selectedProducts.find(
                    (selectedProduct) =>
                      selectedProduct?.Category === category.id
                  )?.ProductName
                }
              </p>
            )}
          </div>
        ))}
      </div>
      {selectedProducts.length >= 5 && <button
        onClick={() => {
          toast.success('PC Build Successfuly')
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
      >
        Build you pc
      </button>}
    </div>
  );
};

export default pcBuilder;


export async function getServerSideProps() {

  const response = await fetch(`https://buils-amt-next.vercel.app/api/pc?categories=1`);
  const data = await response.json();
  const categories = data.data;

  return {
    props: {
      categories,
    },
  };
}