
import FeaturedProduct from '@/components/UI/FeaturedProduct';
import Link from 'next/link';

const getRandomProducts = (data, count) => {
  const shuffledData = data.sort(() => 0.5 - Math.random());
  return shuffledData.slice(0, count);
};

const HomePage = ({ randomProducts, uniqueCategories }) => {
  // Group products by category
  const groupedProducts = randomProducts.reduce((acc, product) => {
    const category = product.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {});

  return (
    <div className='my-5'>
      <div className="gap-4">
        <h1 className="md:text-5xl text-xl font-bold text-center mb-5">Featured Products</h1>
        <div className='md:w-6/12 mx-auto mb-5 md:mb-10'>
          <hr />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {randomProducts?.map((product) => (
            <FeaturedProduct product={product} key={product._id}></FeaturedProduct>
          ))}
        </div>
      </div>
      <section className=''>
        <h1 className='md:text-5xl text-xl font-bold text-center my-5 md:my-10'>Featured Categories</h1>
        <div className="featured-products grid grid-cols-12 gap-5">
          {uniqueCategories.map((category) => (
            <Link href={`/categories/${category.id}`} className="col-span-12 md:col-span-4 text-black no-underline" key={category.id}>
              <div className="p-4 bg-white border-4 border-lime-300 rounded-xl hover:bg-lime-300 hover:text-yellow- shadow-md">
                <h2 className="text-2xl md:text-4xl font-bold text-center">- {category.name} -</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  const response = await fetch("https://buils-amt-next.vercel.app/api/pc");
  const data = await response.json();
  const randomProducts = getRandomProducts(data.data, 6);


  const response2 = await fetch(`https://buils-amt-next.vercel.app/api/pc?categories=1`)
  const data2 = await response2.json();
  const uniqueCategories = data2.data;

  return {
    props: {
      randomProducts,
      uniqueCategories
    },
  };
};
