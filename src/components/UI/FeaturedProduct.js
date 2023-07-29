import Link from 'next/link';


const FeaturedProduct = ({ product }) => {
  const { Image, ProductName, Category, Price, Status, AverageRating, _id } = product;

  return (
    <div className="bg-white rounded-lg shadow-xl h-full" key={product._id}>
            <img
              src={product.Image}
              alt={product.ProductName}
              className="w-full object-cover h-52"
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
              <p className="text-sm mb-5">Rating: {product.AverageRating} out of 5 stars</p>
              <Link href={`/products/${product._id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                View Details
              </Link>
            </div>
          </div>
  );
};

export default FeaturedProduct;
