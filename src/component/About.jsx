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
import {
  MapPin,
  Users,
  Award,
  TrendingUp,
  Heart,
  Globe,
  GraduationCap,
  Target,
} from "lucide-react";
import { mockData } from "../data/data";

const About = () => {
  const { foundation, statistics, aboutContent } = mockData;

  const keyStats = [
    {
      icon: Users,
      value: statistics.currentDoctors,
      label: "Current Doctor Ratio in Sub-Saharan Africa",
      color: "text-red-600",
    },
    {
      icon: TrendingUp,
      value: statistics.deficit,
      label: "Doctor Shortage",
      color: "text-orange-600",
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
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The African Medical Education Network Foundation (AMENF), registered
            in 2021, is built on a unique model designed to expand human
            resources in the medical sector in sub-Saharan Africa.
          </p>
        </div>

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
                  <Target className="w-6 h-6 mr-3 text-teal-600" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
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
                <p className="text-gray-700 leading-relaxed text-lg">
                  {aboutContent.solution}
                </p>
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
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {aboutContent.mauritiusAdvantage}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
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
                <p className="text-gray-700 leading-relaxed text-lg">
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
                <Heart className="w-6 h-6 mr-3 text-teal-600" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
                {foundation.mission}
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Globe className="w-6 h-6 mr-3 text-cyan-600" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed text-lg">
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

        {/* Commitment Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Commitment
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We are committed to recognizing and honoring the invaluable
            contributions of benefactors to the medical infrastructure we are
            building through name recognition within the precincts of the
            Pan-African medical college to be set up.
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Together, our collective efforts will be instrumental in preventing
            Africa from becoming a medical wasteland—a scenario that would not
            only devastate the continent but also pose a grave risk to global
            health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
