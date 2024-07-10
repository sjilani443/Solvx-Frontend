import React from "react";
import herologo from "../assets/WhatsApp_Image_2024-07-07_at_11.05.45_e531af7c-ai-brush-removebg-ck07nl9t.png";

function Joinus() {
  return (
    <div className="max-w-5xl mx-auto text-center font-outfit py-[17vh]">
      <p className="mt-5 text-5xl font-bold leading-tight text-black sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
        We are Hiring - Join us in our Mission.
      </p>
      <h1 className="px-6 pt-6 text-2xl text-black font-inter">
        We are actively looking for Highly Motivated Individuals to take part in
        our Organization.If you have any Interest Please mail us.
      </h1>

      <div className="flex justify-center h-[20vh] items-center">
        <img src={herologo} alt="" className="h-[30vh]" />
      </div>
      <button
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=sjilani443@gmail.com&su=Subject%20Here&body=Body%20text%20here",
            "_blank"
          );
        }}
        className="text-secondary px-4 py-2 rounded bg-[#42ADF8] text-white border-2 border-black"
      >
        Send Email
      </button>
    </div>
  );
}

export default Joinus;
