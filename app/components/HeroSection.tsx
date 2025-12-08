import React from "react";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-20 md:pt-5 bg-gradient-to-br from-green-50 to-secondary">
      <div className="max-w-xl">
        <h2 className="heading font-extrabold text-primary leading-tight">
          Slash Your Energy Bills & Upgrade Your Home
        </h2>
        <p className="mt-4 text-txtColor normalText">
          100% funded UK home energy improvements — insulation, solar, heat
          pumps and more with government-backed grants.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="bg-primary text-secondary px-6 py-3 rounded-xl shadow  transition cursor-pointer">
            Book Free Survey
          </button>
        </div>
      </div>

      <div className="relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div
          className="w-[90%] md:w-[80%] aspect-4/3 bg-center bg-no-repeat bg-cover rounded-xl drop-shadow-xl"
          data-alt="A 3D illustration of a modern, eco-friendly home with solar panels on the roof and a lush green garden."
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDpSd_ywqI0_V_vieSTzNsDVMzwNeGsjkAnL_mX75r-m2zh3s4lB4_snkyoMJgRKR3ZeX6Kgo_Yc0ppcs_VYUnOaWwJ0wiVpAHGgKqigcBCaq4c3Fhzz7o9b6PuUmwnkAjNj2u8SYnbs--ETcCvQ3-S8yBSyYZ-ftOF9HYZy_n08BHotPGRkw_amzTSKAC-W8ICii98bU9H8rTn3CyUiuOeMy6SgY9anhMoEgzZgsYUW_awNgFb8GXi3rVUVd3ysVFuYpoQe81vRwHA")`,
          }}
        ></div>
      </div>
    </section>
  );
}
