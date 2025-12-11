const Banner = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('/assets/home-banner.png')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-[90%] md:w-full text-center flex flex-col items-center gap-10 animate-fadeIn">
        <h1 className="heading  font-bold text-secondary leading-tight drop-shadow-xl">
          Reliable Home Energy Solutions
          <br /> Powering Your Comfort & Savings
        </h1>

        <p className="text-secondary/95 subHeading leading-relaxed">
          Comprehensive Energy Audits, High-Quality Equipment, and Certified
          Experts — All Under One Roof.
        </p>
      </div>
    </section>
  );
};

export default Banner;
