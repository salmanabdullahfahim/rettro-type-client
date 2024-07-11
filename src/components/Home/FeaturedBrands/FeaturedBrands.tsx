const keyboardBrands = [
  {
    logo: "/razer.png",
    alt: "Razer Logo",
  },
  {
    logo: "/rog.png",
    alt: "Rog Logo",
  },
  {
    logo: "/logitech.png",
    alt: "Logitech Logo",
  },
  {
    logo: "/corsair.png",
    alt: "Corsair Logo",
  },
  {
    logo: "redragon.png",
    alt: "Redragon Logo",
  },
];

const FeaturedBrands = () => {
  return (
    <section className="ezy__clients13 light py-14 md:py-24 bg-white  text-zinc-900 ">
      <div className="container px-12">
        <div className="grid grid-cols-12 mb-8 md:mb-16">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-bold text-[25px] lg:text-[35px] leading-none mb-6">
              Featured Brands
            </h2>
            <p className="text-xl leading-6 opacity-80">
              Explore our curated selection of top mechanical keyboard brands.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-wrap lg:flex-row justify-around items-center gap-6">
          {keyboardBrands.map((brand, index) => (
            <img
              src={brand.logo}
              alt={brand.alt}
              className="max-h-12 h-auto max-w-full"
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
