import { useState } from "react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../component/ui/card";
import { Badge } from "../component/ui/badge";
import { Button } from "../component/ui/button";
import {
  GraduationCap,
  Award,
  ArrowRight,
  Users,
  Globe,
  Calendar,
  BookOpen,
  Heart,
  MapPin,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  Stethoscope,
} from "lucide-react";
import { programsData } from "../data/data";
import probanner from "../assets/img3.jpg";
import img1 from "../assets/program-details4.jpg";
import img2 from "../assets/program-details2.jpg";
import img3 from "../assets/program-details3.jpg";
const ProgramDetails = () => {
  const getIcon = (index) => {
    const icons = [GraduationCap, Heart, Stethoscope];
    const Icon = icons[index] || GraduationCap;
    return <Icon className="w-12 h-12" />;
  };

  /*   const programImages = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0); */

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <div className="pt-10 bg-[url('./img3.jpg')] bg-cover bg-center h-100"> */}
      <div
        className="pt-10 bg-cover bg-center h-100"
        style={{ backgroundImage: `url(${probanner})` }}
      >
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 text-lg px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Scholarship Programs
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Programs
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tuition-free medical education programs designed to
            transform healthcare in sub-Saharan Africa.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      {/*   <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-white/10 text-white border-white/20 text-sm px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Scholarship Programs
            </Badge>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300 block">
                Programs
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive tuition-free medical education programs designed to
              transform healthcare in sub-Saharan Africa
            </p>
          </div>
        </div>
      </section> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Programs Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {programsData.map((program, index) => (
                <div
                  key={program.id}
                  className={`grid lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`space-y-8 ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <Badge
                        className={`${
                          index === 0
                            ? "bg-blue-50 text-blue-600 border-blue-200"
                            : index === 1
                            ? "bg-green-50 text-green-600 border-green-200"
                            : "bg-purple-50 text-purple-600 border-purple-200"
                        }`}
                      >
                        Program {index + 1}
                      </Badge>

                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        {program.title}
                      </h2>

                      <p className="text-xl text-gray-600 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Program Details */}
                    <div className="grid grid-cols-2 gap-6">
                      <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <Clock className="w-8 h-8 text-blue-600 mb-3" />
                        <div className="text-sm text-blue-600 font-medium">
                          Duration
                        </div>
                        <div className="text-2xl font-bold text-blue-900">
                          {program.duration}
                        </div>
                      </Card>

                      <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                        <Users className="w-8 h-8 text-green-600 mb-3" />
                        <div className="text-sm text-green-600 font-medium">
                          {program.scholarships ? "Scholarships" : "Capacity"}
                        </div>
                        <div className="text-2xl font-bold text-green-900">
                          {program.scholarships || program.capacity}
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6 bg-orange-50 border-orange-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <Award className="w-6 h-6 text-orange-600" />
                        <div className="text-lg font-semibold text-orange-900">
                          Service Commitment
                        </div>
                      </div>
                      <p className="text-orange-800">{program.commitment}</p>
                    </Card>

                    {/* Features */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        Program Features
                      </h3>
                      <div className="grid gap-3">
                        {program.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3 group"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform duration-200" />
                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105">
                      Apply for This Program
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div
                    className={`relative ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <Card className=" bg-gradient-to-br from-gray-50 to-white border-1 border-gray-200 shadow-2xl">
                      <div className="p-12 text-center space-y-6">
                        <div
                          className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-white ${
                            index === 0
                              ? "bg-gradient-to-r from-blue-500 to-blue-600"
                              : index === 1
                              ? "bg-gradient-to-r from-green-500 to-green-600"
                              : "bg-gradient-to-r from-purple-500 to-purple-600"
                          }`}
                        >
                          {getIcon(index)}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {program.title}
                          </h3>
                          <p className="text-gray-600">Program {index + 1}</p>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <div className="text-3xl font-bold text-gray-900 mb-1">
                            {program.scholarships || program.capacity}
                          </div>
                          <div className="text-sm text-gray-600">
                            {program.scholarships
                              ? "Annual Scholarships"
                              : "Training Capacity"}
                          </div>
                        </div>
                      </div>
                      <div className="pt-7">
                        <img
                          // src={program[currentIndex]}
                          src={program.image}
                          alt={program.title}
                          className="rounded-b-lg"
                        ></img>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl shadow-xl mb-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
            <div className="space-y-8 p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Transform Healthcare?
              </h2>

              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of healthcare professionals making a difference
                across Africa. Applications for 2024 scholarships are now open.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 transition-all duration-200 transform hover:scale-105 text-lg px-8 py-4">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Apply for Scholarship
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105 text-lg px-8 py-4"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Mission
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProgramDetails;
