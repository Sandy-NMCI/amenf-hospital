import React from "react";
import Banner from "./Banner";
import DynamicIcon from "./ui/DynamicIcon";
import { IoClose, IoMenu } from "react-icons/io5";
import { ImAidKit } from "react-icons/im";
import { FaUserDoctor, FaViacoin } from "react-icons/fa6";
import {
  FaAmbulance,
  FaArrowAltCircleRight,
  FaRegHospital,
  FaMinus,
  FaPlus,
  FaRegHeart,
} from "react-icons/fa";
import * as FontAwesome from "react-icons/fa";
import { GraduationCap, icons } from "lucide-react";
import { useState, useEffect } from "react";
import { LuBriefcaseMedical } from "react-icons/lu";
import { Badge } from "../component/ui/badge";
import { Carousel } from "flowbite-react";
import { Icon } from "lucide-react";
import { coconut } from "@lucide/lab";
import doctor4 from "../assets/doctor4.jpg";
import Marquee from "react-fast-marquee";

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted:", formData);
  // Reset form
  setFormData({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
};
import {
  clinicsDetails,
  partnersDetails,
  mockData,
  doctors,
  faqs,
  features,
} from "../data/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../component/ui/card";
import {
  Ambulance,
  Hospital,
  BriefcaseMedical,
  Accessibility,
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Users,
  Award,
  HeartPlus,
  Stethoscope,
  Calendar,
  Star,
  ChevronRight,
  Menu,
  X,
  Monitor,
  FlaskConical,
  // GraduationCap,
} from "lucide-react";
const Home = () => {
  useEffect(() => {
    document.title = "AMENF : African Medical Education Network Foundation ";
  }, []);
  const [openIndex, setOpenIndex] = useState(0);
  const { services } = mockData;

  const currentIcon = "Award";
  const currentIconFamily = "lucide-react";
  const getIcon = (iconName) => {
    const icons = {
      HeartPlus,
      GraduationCap,
      Award,
      Stethoscope,
      Monitor,
      Users,
      FlaskConical,
      Ambulance,
      Hospital,
      BriefcaseMedical,
      Accessibility,
      FaRegHospital,
    };
    return icons[iconName] || HeartPlus;
  };

  const handleButtonClick = () => {
    window.location.href = "/Doctors"; // Direct browser redirection
  };
  const servicesButtonClick = () => {
    window.location.href = "/Services"; // Direct browser redirection
  };
  return (
    <>
      <Banner />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-32 my-10 items-stretch">
          {/* Card 1 */}
          <div className="p-8 border border-gray-200 bg-purple-50 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-purple-100 cursor-pointer flex flex-col h-full">
            <div className="flex-1 text-center">
              <ImAidKit className="w-10 h-10 inline-block text-purple-500" />
              <h5 className="mt-4 text-xl font-bold text-purple-700">
                Advanced Technology
              </h5>
              <p className="mt-2 text-sm text-purple-900">
                AMENF leverages advanced technology to revolutionize medical
                education and training, ensuring accessible, high-quality
                healthcare capacity across sub-Saharan Africa.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-gray-200 bg-green-50 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-green-100 cursor-pointer flex flex-col h-full">
            <div className="flex-1 text-center">
              <FaUserDoctor className="w-10 h-10 inline-block text-green-500" />
              <h5 className="mt-4 text-xl font-bold text-green-700">
                Healthcare Solutions
              </h5>
              <p className="mt-2 text-sm text-green-900">
                AMENF delivers innovative healthcare solutions aimed at
                strengthening medical capacity and improving patient outcomes
                across sub-Saharan Africa.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-gray-200 bg-orange-50 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-orange-100 cursor-pointer flex flex-col h-full">
            <div className="flex-1 text-center">
              <FaAmbulance className="w-10 h-10 inline-block text-orange-500" />
              <h5 className="mt-4 text-xl font-bold text-orange-700">
                24/7 Availability
              </h5>
              <p className="mt-2 text-sm text-orange-900">
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
            <div className="hidden md:block h-32 border-2 border-teal-500"></div>

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
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text text-transparent">
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
              <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded-lg mr-20 hover:bg-teal-500 hover:text-white transition">
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
                Todays Tip from Dr. Sakshi
              </h1>
              <img
                src={doctor4}
                alt="Error loading"
                className="rounded-md w-full object-cover md:h-full"
              />
            </div>

            {/* 2nd block */}
            <div className="w-full md:w-[65%] space-y-3">
              <h2 className="font-medium text-base sm:text-lg">
                How to live a healthy lifestyle?
              </h2>
              <p className="text-sm sm:text-base text-justify">
                Living a healthy lifestyle is not just about avoiding
                illness—it’s about creating balance, energy, and overall
                well-being in your daily life. At AMENF Hospital, we believe
                that small, consistent choices can make a big difference in your
                health.
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
              <div className="bg-gray-100 p-3 rounded-md text-sm sm:text-base text-justify">
                A healthy lifestyle is not about perfection but about making
                better choices every day. At AMENF Hospital, we are committed to
                guiding you on your journey to long-term health and wellness.
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Section */}
        {/* <section id="doctors" className="py-20 bg-secondary/30"> */}
        <section id="doctors" className="mx-4 md:mx-16 lg:mx-32 my-8 md:my-14">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-primary/10 text-primary border-primary/20 rounded-full px-4 py-2 mb-4">
                Our Team
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Meet Our Expert Doctors
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our team of highly qualified and experienced medical
                professionals is dedicated to providing you with the best
                possible care.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors.map((doctor, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">
                        {doctor.rating}
                      </span>
                    </div> */}
                  </div>
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {doctor.name}
                    </CardTitle>
                    <CardDescription className="text-primary font-semibold">
                      {doctor.specialty}
                    </CardDescription>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="w-4 h-4" />
                      {doctor.experience} Experience
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      {doctor.qualifications}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <button
                      variant="outline"
                      className="border border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition"
                      onClick={handleButtonClick}
                    >
                      Read More...
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Card Section*/}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Our Mission & Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Addressing the healthcare crisis through innovative education and
              sustainable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 md:mx-32 my-10 items-stretch">
            {/* Card 1 */}
            {/* <div className="max-w-sm mx-auto bg-blue-50 rounded-2xl shadow-md  hover:shadow-lg "> */}

            <div className="group shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl bg-blue-50 hover:bg-blue-100 border-0 bg-gradient-to-br from-card to-card/80 overflow-hidden">
              <div className="p-4 text-center">
                <ImAidKit className="w-10 h-10 mt-5 inline-block text-blue-600 hover:text-teal-500" />
                <h3 className="text-lg  text-blue-600 font-semibold pt-5">
                  Innovative Curriculum
                </h3>
                <p className="text-blue-900 text-sm p-5">
                  Integrating primary care, telemedicine, AI diagnostics, and
                  community medicine
                </p>
              </div>
            </div>
            {/* <div className="p-8 border border-gray-200 bg-gray-200 shadow-xl rounded-tl-4xl rounded-br-4xl hover:bg-gray-300 cursor-pointer flex flex-col h-full"></div> */}
            {/* Card 2 */}
            <div className="max-w-sm mx-auto bg-green-50 rounded-2xl shadow-md overflow-hidden  hover:bg-green-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="p-4 text-center">
                <ImAidKit className="w-10 h-10 mt-5 inline-block text-green-600 hover:text-teal-500" />
                <h3 className="text-lg text-green-600 font-semibold pt-5">
                  Global Impact
                </h3>
                <p className="text-green-900 text-sm p-5">
                  Training healthcare professionals across 45 countries in the
                  region and beyond
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="max-w-sm mx-auto bg-orange-50 rounded-2xl shadow-md overflow-hidden  hover:bg-orange-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="p-4 text-center">
                <ImAidKit className="w-10 h-10 mt-5 inline-block text-orange-600 hover:text-teal-500" />
                <h3 className="text-lg  text-orange-600 font-semibold pt-5">
                  Sustainable Model
                </h3>
                <p className="text-orange-900 text-sm p-5">
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
                    className="border border-gray-300 rounded-lg overflow-hidden text-justify"
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
                      <div className="p-4 border-t-1 border-gray-300 text-gray-600 text-sm whitespace-pre-line">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Why Us Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Features</h2>
              <div className="space-y-6">
                {/* {features.map((item, index) => { */}
                {features.slice(0, 6).map((features, index) => {
                  const IconComponent = getIcon(features.icon);
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className=" border-3 border-teal-600 bg-teal-400 hover:bg-teal-600  text-white  p-4 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:scale-110">
                        {/* <span className="w-8 h-8 text-white">{item.icon} </span> */}
                        <IconComponent className="w-8 h-8 after:scale-x-0 after:transition-transform after:duration-300 after:origin-left group-hover:after:scale-x-100" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">
                          {features.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{features.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Our Services Section */}
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
              {services.slice(0, 3).map((service, index) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <Card
                    key={service.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {/* <FaRegHeart className="w-6 h-6 text-white" /> */}
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 leading-relaxed text-justify">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter>
                      <button
                        variant="outline"
                        className="border border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-500 hover:text-white transition"
                        onClick={servicesButtonClick}
                      >
                        Read More...
                      </button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5th container */}

        <div className="pb-10 pt-6">
          {/* Heading Section */}
          <div className="mx-4 md:mx-16 lg:mx-32 text-center md:text-left">
            <h1 className="font-semibold text-2xl md:text-3xl pb-5">
              AMENF Hospitals – Where Excellence Meets Compassion
            </h1>
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

          <Marquee gradient={false} speed={60} pauseOnHover>
            <div className="flex items-center">
              {partnersDetails.map((data, index) => (
                <div key={index}>
                  <img
                    src={data.img}
                    alt={`Partner ${index + 1}`}
                    className="max-h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>

          {/* Book An Appointment block (Form) */}
          {/* <div className="w-full md:w-[30%]">
            <div className="w-full bg-white shadow-lg rounded-md overflow-hidden md:pb-12 md:mt-2">
              <div className="bg-teal-500 text-white p-4 flex items-center space-x-2">
                <span className="text-xl">👨‍⚕️</span>
                <h2 className="font-semibold text-base sm:text-lg md:text-xl">
                  Book an Appointment
                </h2>
              </div>
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
          </div> */}
          {/*  <Marquee duration="15s" gap="2rem">
            <div className="flex items-center space-x-8">
              <span className="text-lg font-medium text-blue-600">Item 1</span>
              <span className="text-lg font-medium text-green-600">Item 2</span>
              <span className="text-lg font-medium text-red-600">Item 3</span>
              <span className="text-lg font-medium text-purple-600">
                Item 4
              </span>
            </div>
          </Marquee> */}
        </div>
      </div>
    </>
  );
};

export default Home;
