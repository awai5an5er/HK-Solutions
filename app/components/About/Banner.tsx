const Banner = () => {
  return (
    
    <section
      className="
        relative 
        bg-[url('/assets/banner.jpg')] 
        h-[60vh] 
        md:h-screen 
        bg-no-repeat bg-center bg-cover 
        flex justify-center items-center
        px-5
    
      "
    >
      <div className="flex flex-col gap-4 items-center text-center w-full max-w-3xl mx-auto">
        <h1 className="text-secondary font-bold 
          heading 
        ">
          Welcome to Our Website
        </h1>

        <p className="text-secondary 
          subHeading
        ">
          Premium Quality Services for Your Home
        </p>
      </div>
    </section>
  );
};

export default Banner;

