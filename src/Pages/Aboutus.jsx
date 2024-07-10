import React from "react";
import Founder from "../Components/Founder";
import Logo from "../assets/WhatsApp_Image_2024-07-07_at_11.05.45_e531af7c-ai-brush-removebg-ck07nl9t.png";
function Aboutus() {
  return (
    <div className="p-2">
      <div className="max-w-5xl mx-auto font-outfit flex flex-col items-center justify-center my-24 gap-6 text-2xl bg-[#240750ef] p-8 text-white rounded-lg">
        <h1 className="text-4xl">About us:</h1>
        <div className="h-[10vh] flex justify-center items-center">
          <img src={Logo} alt="" className="h-[20vh]" />
        </div>
        <p>
          SolvX Technologies is dedicated to bridging the gap between academia
          and the corporate world by providing practical, project-oriented
          training for students. Our experienced industry professionals deliver
          hands-on training, ensuring a seamless transition from campus to
          career.
        </p>
        <p>
          {" "}
          We focus on fostering innovation through hackathons, empowering
          students with trending tech skills, and supporting promising ideas
          with incubation and potential startup funding. Our mission is to
          empower the next generation of tech professionals and entrepreneurs,
          creating a strong foundation for success in the ever-evolving tech
          industry.
        </p>
        <ul className="list-disc text-2xl">
        <li className="m-3">Company size - 11-50 employees (3 associated members) </li>
        <li className="m-3">Headquarters - Guntur, Andhra Pradesh</li>
        <li className="m-3">Founded - 2024</li>
        </ul>
      </div>
      <Founder />
    </div>
  );
}

export default Aboutus;
