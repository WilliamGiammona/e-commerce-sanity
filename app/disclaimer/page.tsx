import React from "react";

const Disclaimer = () => {
  return (
    <div className="flex justify-center items-center  bg-white p-6">
      <div className="text-center max-w-4xl">
        <h1 className="text-2xl md:text-4xl font-bold text-black mb-4">
          Disclaimer
        </h1>
        <p className="text-lg md:text-xl text-black leading-relaxed">
          This website is for demonstration purposes only. Please only use test
          payment methods recommended by stripe, real transactions will not be
          accepted and no products will be delivered
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
