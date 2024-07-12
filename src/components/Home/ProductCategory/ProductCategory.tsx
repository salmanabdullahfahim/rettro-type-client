import PropTypes from "prop-types";

const products = [
  {
    img: "https://i.ibb.co/JFR8Vn8/pngwing-com-3.png",
    title: "Mechanical Keyboard",
  },
  {
    img: "https://i.ibb.co/4snWKjF/pngwing-com-4.png",
    title: "Gaming Mouse",
  },
  {
    img: "https://i.ibb.co/xFSPBJ2/pngwing-com-5.png",
    title: "Regular Keyboard",
  },
  {
    img: "https://i.ibb.co/cY8ny7Z/pngwing-com-7.png",
    title: "Gaming Combo",
  },
];

// @ts-expect-error
const ProductItem = ({ product }) => {
  const containerStyle = {
    backgroundImage:
      "linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4))",
  };
  return (
    <div className="bg-white flex flex-col h-full relative z-20 rounded-md">
      <div
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={containerStyle}
      ></div>
      <div className="flex justify-center items-center p-6 h-full">
        <img
          src={product.img}
          alt="..."
          className="max-h-40 max-w-full w-auto"
        />
      </div>
      <div className="text-center px-4 py-6">
        <h2 className="text-lg font-bold leading-none mb-2">{product.title}</h2>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export const ProductCategory = () => {
  return (
    <section className="ezy__epcategory4 light py-14 md:py-22 bg-white text-zinc-900 relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <h2 className="font-bold text-3xl mb-2 text-center">
          PRODUCT <span className="text-headerText">CATEGORY</span>
        </h2>

        <div className="grid grid-cols-12 gap-6 text-center mt-6 md:mt-12 mx-12">
          {products.map((product, i) => (
            <div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
              <ProductItem product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
