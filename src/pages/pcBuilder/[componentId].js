// pages/pc-builder.js

import { addToBuilder } from "@/redux/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

const Component = ({ products }) => {
  const router = useRouter();
  const { componentId } = router.query;
  const dispatch = useDispatch();

  //   const handleAddToBuilder = () => {
  //     // Dispatch the addToBuilder action with the product info
  //     dispatch(addToBuilder(component));
  //   };
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">PC Builder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            key={product._id}
          >
            <img
              src={product.Image}
              alt={product.ProductName}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                {product.ProductName}
              </h2>
              <p className="text-sm text-gray-500 mb-1 line-clamp-1">
                Category: {product.Category}
              </p>
              <p className="text-lg font-bold mb-2">${product.Price}</p>
              <p className="text-sm mb-2">Status: {product.Status}</p>
              <p className="text-sm">
                Rating: {product.AverageRating} out of 5 stars
              </p>
              <Link href="/pcBuilder" > 
                <button
                  onClick={() => {
                    dispatch(addToBuilder(product));
                    // router.replace("/pcBuilder");
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                >
                  Add to builder
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;

// ... getServerSideProps remains the same ...
export async function getServerSideProps({ params }) {
  const { componentId } = params;
  // Fetch the list of categories from your API
  // For demonstration purposes, we'll use dummy data
  // const categories = [
  //   { id: 'cpu', name: 'CPU / Processor' },
  //   { id: 'motherboard', name: 'Motherboard' },
  //   { id: 'ram', name: 'RAM' },
  //   { id: 'psu', name: 'Power Supply Unit' },
  //   { id: 'storage', name: 'Storage Device' },
  //   { id: 'monitor', name: 'Monitor' },
  // ];

  const response = await fetch(
    `https://buils-amt-next.vercel.app/api/pc?Category=${componentId}`
  );
  const data = await response.json();
  const products = data.data;

  return {
    props: {
      products,
    },
  };
}