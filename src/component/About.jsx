import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../component/ui/card";
import { Badge } from "../component/ui/badge";
import { Separator } from "../component/ui/separator";
import aboutbanner from "../assets/img1.jpg";
import healthcare3 from "../assets/healthcare3.jpg";
import heathcare from "../assets/heathcare-form.jpg";
import Mauritius from "../assets/why-Mauritius.jpg";
import healthcare from "../assets/healthcare-stethoscope.jpg";

import {
  MapPin,
  Users,
  Award,
  TrendingUp,
  Heart,
  Globe,
  GraduationCap,
  Target,
  HeartPulse,
  Telescope,
  CheckCircle,
  BookOpen,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import { mockData, aboutData, mauritiusData } from "../data/data";

const About = () => {
  const { foundation, statistics, aboutContent } = mockData;

  const keyStats = [
    {
      icon: Users,
      value: statistics.currentDoctors,
      label: "Current Doctor Ratio in Sub-Saharan Africa",
      color: "text-teal-600",
    },
    {
      icon: TrendingUp,
      value: statistics.deficit,
      label: "Doctor Shortage",
      color: "text-teal-600",
    },
    {
      icon: MapPin,
      value: statistics.mauritiusDoctors,
      label: "Doctors per 10,000 in Mauritius",
      color: "text-teal-600",
    },
    {
      icon: Heart,
      value: statistics.healthExpenditure,
      label: "Health Expenditure in Mauritius",
      color: "text-cyan-600",
    },
  ];

  return (
    <div>
      {/* Header Section */}
      {/* <div className="pt-10 bg-[url('./img1.jpg')] bg-cover bg-center h-100"> */}
      <div
        className="pt-10 bg-cover bg-center h-100"
        style={{ backgroundImage: `url(${aboutbanner})` }}
      >
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 text-lg px-4 py-2">
            <Heart className="w-4 h-4 mr-2" />
            Established {foundation.established}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              AMENF
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl p-[15px] md:p-0 mx-auto leading-relaxed">
            The African Medical Education Network Foundation (AMENF), registered
            in 2021, is built on a unique model designed to expand human
            resources in the medical sector in sub-Saharan Africa.
          </p>
        </div>
      </div>

      <div className="container mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <p className={`text-2xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <HeartPulse className="w-6 h-6 mr-3 text-teal-600" />
                  Transforming Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="md:col-span-3 p-4">
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                      {aboutContent.transformingHealthcare}
                    </p>
                  </div>
                  <div className="md:col-span-2 p-4">
                    <img src={healthcare3} className="lg:h-60 md:h-full"></img>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <Target className="w-6 h-6 mr-3 text-teal-600" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  {aboutContent.challenge}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <GraduationCap className="w-6 h-6 mr-3 text-cyan-600" />
                  Our Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg text-justify pb-5">
                  {aboutContent.solution}
                </p>
                <img src={healthcare} className="md:w-full"></img>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <MapPin className="w-6 h-6 mr-3 text-teal-600" />
                  Why Mauritius?
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                  <div className="md:col-span-3 p-4">
                    <p className="text-gray-700 leading-relaxed text-lg text-justify">
                      {aboutContent.mauritiusAdvantage}
                    </p>
                  </div>
                  <div className="md:col-span-3 p-4">
                    <img
                      src="./why-Mauritius.jpg"
                      className="lg:h-50 md:h-full"
                    ></img>
                  </div>
                </div> */}
                <p className="text-gray-700 leading-relaxed text-lg mb-4 text-justify">
                  {aboutContent.mauritiusAdvantage}
                </p>
                <img src={Mauritius} className="md:w-full"></img>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  Additionally, Mauritius has 35.5 nurses per 10,000 people,
                  well above the sub-Saharan benchmark of less than 20. With
                  health expenditure at 5.8% of GDP, exceeding the WHO's
                  recommended 5%, Mauritius exemplifies a healthcare system that
                  has reached a commendable standard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-gray-900">
                  <TrendingUp className="w-6 h-6 mr-3 text-cyan-600" />
                  Sustainability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  {aboutContent.sustainability}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Target className="w-6 h-6 mr-3 text-teal-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                {foundation.mission}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Telescope className="w-6 h-6 mr-3 text-cyan-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg text-justify">
                {foundation.vision}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quote Section */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6 leading-relaxed">
              "{aboutContent.quote.split(" - ")[0]}"
            </blockquote>
            <cite className="text-xl text-teal-100 font-medium">
              - {aboutContent.quote.split(" - ")[1]}
            </cite>
          </CardContent>
        </Card>

        <Separator className="my-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">
              Why This Matters
            </h3>
            <div className="grid gap-4">
              {aboutData.keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-red-500 to-red-300 text-white transform hover:scale-105 transition-all duration-300 mt-8">
                <Users className="w-12 h-12 mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-2">2.4M</div>
                <p className="text-red-100 text-sm">
                  Doctor deficit in sub-Saharan Africa
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-300 text-white transform hover:scale-105 transition-all duration-300 mt-8">
                <Award className="w-12 h-12 mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-2">15K</div>
                <p className="text-blue-100 text-sm">
                  Scholarships over 5 years
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-green-500 to-green-300 text-white transform hover:scale-105 transition-all duration-300 ">
                <BookOpen className="w-12 h-12 mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-2">45+</div>
                <p className="text-green-100 text-sm">Countries served</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-300 text-white transform hover:scale-105 transition-all duration-300 ">
                <TrendingUp className="w-12 h-12 mb-4 opacity-80" />
                <div className="text-3xl font-bold mb-2">3K</div>
                <p className="text-purple-100 text-sm">Annual scholarships</p>
              </Card>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid gap-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {mauritiusData.title}
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {mauritiusData.description}
            </p>
            <h3 className="text-2xl font-semibold text-gray-900">
              Strategic Advantages
            </h3>
            <div className="grid gap-1">
              {mauritiusData.advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 group"
                >
                  <CheckCircle className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {advantage}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Separator className="my-16" />

        {/* Commitment Section */}
        <div className="text-center space-y-6 mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-lg text-gray-700 max-w-4xl leading-relaxed ">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Commitment
              </h2>
              <div className="md:p-7">
                <p className="md:pt-5">
                  We are committed to recognizing and honoring the invaluable
                  contributions of benefactors to the medical infrastructure we
                  are building through name recognition within the precincts of
                  the Pan-African medical college to be set up.
                </p>
                <p>
                  Together, our collective efforts will be instrumental in
                  preventing Africa from becoming a medical wasteland—a scenario
                  that would not only devastate the continent but also pose a
                  grave risk to global health.
                </p>
              </div>
            </div>
            <div>
              <img src={heathcare} className="md:w-full"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
