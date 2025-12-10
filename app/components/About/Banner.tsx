const Banner = () => {
  return (
    <section
      className="relative bg-[url('/assets/banner.jpg')] h-screen bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <div className="flex flex-col gap-5 items-center">
        <h1 className="text-secondary heading font-bold">Welcome to Our Website</h1>
        <p className="text-secondary subHeading ">  Premium Quality Services for Your Home</p>
        </div>
    </section>
  );
};

export default Banner;
