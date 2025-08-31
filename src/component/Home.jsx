import React from "react";
import Banner from "./Banner";
import { IoClose, IoMenu } from "react-icons/io5";
import { ImAidKit } from "react-icons/im";
import { FaUserDoctor } from "react-icons/fa6";
import { FaAmbulance } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useState } from "react";
import { FaRegHospital } from "react-icons/fa";
import { LuBriefcaseMedical } from "react-icons/lu";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { clinicsDetails, partnersDetails, mockData } from "../data/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../component/ui/card";
const Home = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { services } = mockData;
  const faqs = [
    {
      question: "What is the difference between lease and licence agreement?",
      answer:
        "Consectetur adipiscing elit. Cras vehicula dictum metus at interdum. Vivamus ut euismod metus. Integer a est suscipit est ultricies viverra. Mauris rhoncus nunc ut porttitor dictum. In placerat mi a fermentum consequat. Mauris neque diam, vulputate vel felis eget, faucibus consequat mi.",
    },
    {
      question: "How ownership of property is acquired by a person?",
      answer: "Answer text for property ownership...",
    },
    {
      question: "Can a registered will be rectified or changed?",
      answer: "Answer text for rectification of will...",
    },
    {
      question:
        "Is the certified copy of a registered will available to anybody?",
      answer: "Answer text for certified copy availability...",
    },
  ];

  const whyUs = [
    {
      icon: <FaRegHospital className="w-8 h-8 text-white" />,
      title: "Great Infrastructure",
      desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
    },
    {
      icon: <FaAmbulance className="w-8 h-8 text-white" />,
      title: "24/7 Ambulance Services",
      desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
    },
    {
      icon: <LuBriefcaseMedical className="w-8 h-8 text-white" />,
      title: "Cutting Edge Technology",
      desc: "Nunc at pretium est curabitur commodo leac est venenatis egestas sed aliquet auguevelit.",
    },
  ];

  return (
    <>
      <Banner />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-32 my-10 items-stretch">
          {/* Card 1 */}
          <div className="p-8 border border-gray-200 bg-gray-200 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-gray-300 cursor-pointer flex flex-col h-full">
            <div className="flex-1 text-center">
              <ImAidKit className="w-10 h-10 inline-block text-teal-500" />
              <h5 className="mt-4 text-xl font-bold text-gray-800">
                Advanced Technology
              </h5>
              <p className="mt-2 text-sm text-gray-700">
                AMENF leverages advanced technology to revolutionize medical
                education and training, ensuring accessible, high-quality
                healthcare capacity across sub-Saharan Africa.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-gray-200 bg-gray-200 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-gray-300 cursor-pointer flex flex-col h-full">
            <div className="flex-1 text-center">
              <FaUserDoctor className="w-10 h-10 inline-block text-teal-500" />
              <h5 className="mt-4 text-xl font-bold text-gray-800">
                Healthcare Solutions
              </h5>
              <p className="mt-2 text-sm text-gray-700">
                AMENF delivers innovative healthcare solutions aimed at
                strengthening medical capacity and improving patient outcomes
                across sub-Saharan Africa.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-gray-200 bg-gray-200 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-gray-300 cursor-pointer flex flex-col h-full">
            <div className="flex-1 text-center">
              <FaAmbulance className="w-10 h-10 inline-block text-teal-500" />
              <h5 className="mt-4 text-xl font-bold text-gray-800">
                24/7 Availability
              </h5>
              <p className="mt-2 text-sm text-gray-700">
                AMENF ensures 24/7 availability to support medical professionals
                and communities with continuous access to resources and care.
              </p>
            </div>
          </div>
        </div>

        {/* 2nd container */}
        <div className="bg-sky-100 rounded-tr-3xl rounded-br-full mx-4 md:mx-32 my-8 md:my-14 relative p-6">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-5 space-y-4 md:space-y-0">
            {/* Left border line */}
            <div className="hidden md:block h-32 border-2 border-sky-500"></div>

            {/* Text content */}
            {/* <div className="flex-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                OUR TECHNOLOGICAL SERVICES HAS BEEN IMPROVED VASTLY
              </div>
              <div className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                Come Experience the real life situations of saving life
              </div>
            </div> */}

            <div className="flex-1">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                African Medical Education Network Foundation
              </div>
              <div className="mt-2 text-sm sm:text-base md:text-lg font-semibold text-gray-600">
                Transforming healthcare in sub-Saharan Africa through
                tuition-free medical education, innovative curriculum, and
                sustainable training programs that address the critical shortage
                of healthcare professionals.
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-start md:justify-end">
              <button className="border border-blue-500 text-sky-500 px-4 py-2 rounded-lg mr-20 hover:bg-sky-500 hover:text-white transition">
                Learn More..
              </button>
            </div>
          </div>
        </div>

        {/* 3rd container */}
        <div className="mx-4 md:mx-16 lg:mx-32 my-8 md:my-14">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            {/* 1st block */}
            <div className="w-full md:w-[33%] space-y-4">
              <h1 className="font-semibold text-lg sm:text-xl">
                Todays Tip from Dr. Hanman
              </h1>
              <img
                src="tip-image.jpg"
                alt="Error loading"
                className="rounded-md w-full object-cover md:h-full"
              />
            </div>

            {/* 2nd block */}
            <div className="w-full md:w-[36%] space-y-3">
              <h2 className="font-medium text-base sm:text-lg">
                How to live a healthy lifestyle?
              </h2>
              <p className="text-sm sm:text-base">
                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                fringilla mauris sit amet nibh. Donec sodales sagittis magna.
                Sed consequat, leo eget bibendum sodales, augue velit cursus
                nunc, quis gravida magna mi a libero. Etiam sit amet orci eget
                eros faucibus tincidunt. Duis leo.
              </p>

              {/* Tips List */}
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <FaArrowAltCircleRight /> Dont just worry about the things you
                  cannot help.
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <FaArrowAltCircleRight /> Eat Healthy, work better, do
                  gardening.
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <FaArrowAltCircleRight /> Some relationships can kill you,
                  Avoid them at the most.
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <FaArrowAltCircleRight /> Focus on the good things that you
                  like.
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-base">
                  <FaArrowAltCircleRight /> Eat Healthy, work better, do
                  gardening.
                </p>
              </div>

              {/* Highlight Note */}
              <div className="bg-gray-100 p-3 rounded-md text-sm sm:text-base">
                Donec sodales sagittis magna. Sed consequat, leo eget bibendum
                sodales, augue velit cursus nunc, quis gravida magna mi a
                libero. Etiam sit amet orci eget eros faucibus.
              </div>
            </div>

            {/* 3rd block (Form) */}
            <div className="w-full md:w-[30%]">
              <div className="w-full bg-white shadow-lg rounded-md overflow-hidden md:pb-12 md:mt-2">
                {/* Header */}
                <div className="bg-teal-500 text-white p-4 flex items-center space-x-2">
                  <span className="text-xl">👨‍⚕️</span>
                  <h2 className="font-semibold text-base sm:text-lg md:text-xl">
                    Book an Appointment
                  </h2>
                </div>

                {/* Form */}
                <form className="p-6 space-y-4">
                  <select className="w-full border border-gray-300 rounded-md p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400">
                    <option>Select Department</option>
                    <option>Cardiology</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                  </select>

                  <input
                    type="text"
                    placeholder="Your First Name (required)"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <input
                    type="text"
                    placeholder="Your Last Name"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <input
                    type="tel"
                    placeholder="Your Phone (required)"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <input
                    type="date"
                    className="w-full border border-gray-300 rounded-md p-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />

                  <button
                    type="submit"
                    className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition w-full sm:w-auto"
                  >
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* 4th container */}
        <div className="mx-4 md:mx-16 lg:mx-32 my-8 md:my-14">
          <h2 className="font-semibold text-2xl mb-6">
            Top Trends – Health Talks
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1st block */}
            <div className="space-y-2">
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  1
                </span>
                <span>Breast Cancer Types</span>
              </div>
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  2
                </span>
                <span>Medicare Eligibility</span>
              </div>
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  3
                </span>
                <span>Medicaid Eligibility</span>
              </div>
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  4
                </span>
                <span>Yellow Fever</span>
              </div>
            </div>

            {/* 2nd block */}
            <div className="space-y-2">
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  5
                </span>
                <span>Gonorrhea</span>
              </div>
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  6
                </span>
                <span>Flu Vaccine</span>
              </div>
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  7
                </span>
                <span>Gluten-Free Diet</span>
              </div>
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  8
                </span>
                <span>HIV / AIDS</span>
              </div>
            </div>

            {/* 3rd block */}
            <div className="space-y-2">
              <div className="space-x-2">
                <span className="px-[8px] py-[2px] rounded-full text-white bg-gray-500">
                  9
                </span>
                <span>Asthma in Cold Weather</span>
              </div>
              <div className="space-x-2">
                <span className="px-[6px] py-[4px] rounded-full text-white bg-gray-500">
                  10
                </span>
                <span>Insurance Deadlines</span>
              </div>
              <div className="space-x-2">
                <span className="px-[6px] py-[4px] rounded-full text-white bg-gray-500">
                  11
                </span>
                <span>Pumpkin Health Benefits</span>
              </div>
              <div className="space-x-2">
                <span className="px-[6px] py-[4px] rounded-full text-white bg-gray-500">
                  12
                </span>
                <span>Dietasical Syndrome</span>
              </div>
            </div>

            {/* 4th block - Image */}
            <div className="flex justify-start md:justify-center items-center">
              <img
                src="soulmedic-app.jpg"
                alt="Error loading"
                className="w-full max-w-[250px] rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Card Section*/}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Addressing the healthcare crisis through innovative education and
              sustainable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-32 my-10 items-stretch">
            {/* Card 1 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4 text-center">
                <ImAidKit className="w-10 h-10 mt-5 inline-block text-gray-300 hover:text-teal-500" />
                <h3 className="text-lg font-semibold pt-5">
                  Innovative Curriculum
                </h3>
                <p className="text-gray-600 text-sm p-5">
                  Integrating primary care, telemedicine, AI diagnostics, and
                  community medicine
                </p>
              </div>
            </div>
            {/* <div className="p-8 border border-gray-200 bg-gray-200 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-gray-300 cursor-pointer flex flex-col h-full"></div> */}
            {/* Card 2 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4 text-center">
                <ImAidKit className="w-10 h-10 mt-5 inline-block text-gray-300 hover:text-teal-500" />
                <h3 className="text-lg font-semibold pt-5">Global Impact</h3>
                <p className="text-gray-600 text-sm p-5">
                  Training healthcare professionals across 45 countries in the
                  region and beyond
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4 text-center">
                <ImAidKit className="w-10 h-10 mt-5 inline-block text-gray-300 hover:text-teal-500" />
                <h3 className="text-lg font-semibold pt-5">
                  Sustainable Model
                </h3>
                <p className="text-gray-600 text-sm p-5">
                  Recipients serve underserved areas for minimum two years after
                  graduation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section*/}
        <div className="mx-4 md:mx-16 lg:mx-32 text-center md:text-left my-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">FAQ's</h2>
              <div className="space-y-2">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 text-left font-medium"
                    >
                      <span>{faq.question}</span>
                      {openIndex === index ? (
                        <FaMinus className="w-5 h-5 text-teal-500" />
                      ) : (
                        <FaPlus className="w-5 h-5 text-teal-500" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="p-4 border-t-1 border-gray-300 text-gray-600 text-sm">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Us Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Us?</h2>
              <div className="space-y-6">
                {whyUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-teal-500 p-4 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Services Preview */}
        <section className="bg-white mx-4 md:mx-16 lg:mx-32 text-center md:text-left my-20 ">
          <div className="container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive medical education and training programs designed
                for African healthcare needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service, index) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <FaRegHeart className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5th container */}

        <div className="pb-10 pt-6">
          {/* Heading Section */}
          <div className="mx-4 md:mx-16 lg:mx-32 text-center md:text-left">
            <h1 className="font-semibold text-2xl md:text-3xl">
              AMENF Hospitals – Where Excellence Meets Compassion
            </h1>
            <p className="my-4 text-gray-700 text-sm md:text-base">
              Established in 1983 by Dr. Prathap C Reddy, Apollo Hospitals has
              set new benchmarks in medical excellence, innovation, and
              patient-centric care. With India’s largest healthcare network and
              advanced technology, we deliver world-class treatment and
              exceptional outcomes.
            </p>
          </div>

          {/* Cards Section */}
          <div className="mx-4 md:mx-16 lg:mx-32 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {clinicsDetails.map((data, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-2xl shadow-xl flex items-start space-x-4 hover:shadow-2xl transition"
              >
                <div className="bg-sky-100 p-3 rounded-xl flex-shrink-0">
                  <img src={data.img} alt={data.title2} className="w-10 h-10" />
                </div>
                <div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-sky-700 font-bold text-xl md:text-2xl">
                      {data.title}
                    </span>
                    <span className="text-gray-700 font-semibold">
                      {data.title2}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base mt-1">
                    {data.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Parteners section */}
        <div className="mx-10 md:mx-16 lg:mx-32 my-8 md:my-14">
          <h2 className="font-semibold text-2xl mb-6">Our Partners</h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partnersDetails.map((data, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={data.img}
                  alt={`Partner ${index + 1}`}
                  className="max-h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
