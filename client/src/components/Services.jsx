import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";

<<<<<<< HEAD
=======

>>>>>>> 7361881045611bd9c78e0eb07a5f38c4c0426559
const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-lg">{title}</h3>
      <p className="mt-1 text-white text-sm md:w-9/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          Team Members
          <br />
          Capstone 2023
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
<<<<<<< HEAD
          Together, we build, create, and drive our project forward. Together we shine.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-left">
=======
          The best choice for buying and selling your crypto assets, with the
          various super friendly services we offer
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-start items-center">
>>>>>>> 7361881045611bd9c78e0eb07a5f38c4c0426559
        <ServiceCard
          color="bg-[#8945F8]"
          title="Name : GULLIPALLI VISHWA"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Reg : 20BCI7118      "
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Name : M SURYA TEJA REDDY"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Reg : 20BCN7021      "
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="Name : CH V VISWANADHA KASYAP        "
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Reg : 20BCE7457      "
        />
        <ServiceCard
<<<<<<< HEAD
          color="bg-[#55BA28]"
=======
          color="bg-[#F84550]"
>>>>>>> 7361881045611bd9c78e0eb07a5f38c4c0426559
          title="Guided by : Dr. NIHAR RANJAN PRADHAN "
          icon={<GiTeacher fontSize={21} className="text-white" />}
          subtitle="      "
        />
      </div>
    </div>
  </div>
);

export default Services;
