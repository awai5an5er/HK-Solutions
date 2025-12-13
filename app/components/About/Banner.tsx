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
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col gap-4 items-center text-center w-full max-w-3xl mx-auto">
        <h1
          className="text-secondary font-bold 
          heading 
        "
        >
          Smart and Sustainable Energy Solutions
        </h1>

        <p
          className="text-secondary 
          subHeading
        "
        >
          At HK Energy Solutions, we deliver modern, environmentally responsible
          energy solutions designed to lower energy costs and contribute to a
          cleaner, more sustainable future.{" "}
        </p>
      </div>
    </section>
  );
};

export default Banner;
