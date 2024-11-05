import banner from "./../../../assets/banner.jpg";

const Banner = () => {
  return (
    <section className="pt-8 bg-purple-600 rounded-b-3xl mb-72">
      <div className="max-w-5xl relative flex flex-col gap-6 mx-auto justify-center items-center text-center p-12 text-white">
        <h3 className="text-3xl font-bold">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h3>
        <p className="text-base">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <a href="#shop" className="text-lg mb-28 bg-white text-purple-600 rounded-full px-4 py-2">Shop Now</a>
        <div className="absolute -bottom-[20%] lg:-bottom-[50%] max-w-lg">
          <img src={banner} alt="" className=" rounded-xl outline outline-2 outline-white outline-offset-8" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
