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
import servicesbanner from "../assets/services.jpg";
import {
  GraduationCap,
  Award,
  Stethoscope,
  Monitor,
  Users,
  FlaskConical,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { mockData } from "../data/data";

const Services = () => {
  const { services, foundation } = mockData;

  const getIcon = (iconName) => {
    const icons = {
      GraduationCap,
      Award,
      Stethoscope,
      Monitor,
      Users,
      FlaskConical,
    };
    return icons[iconName] || GraduationCap;
  };

  const features = [
    "Innovative curriculum design",
    "AI-powered diagnostics training",
    "Telemedicine specialization",
    "Community medicine focus",
    "Global health perspective",
    "Practical clinical experience",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div
        className="pt-10 bg-cover bg-center h-100"
        style={{ backgroundImage: `url(${servicesbanner})` }}
      >
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 text-lg px-4 py-2">
            <Stethoscope className="w-4 h-4 mr-2" />
            Comprehensive Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Services
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Innovative medical education and training programs designed to
            address Africa's healthcare challenges through comprehensive,
            technology-enabled learning.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  py-10">
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            return (
              <Card
                key={service.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white hover:-translate-y-2"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  <Button
                    variant="ghost"
                    className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Features Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Why Choose
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {" "}
                  AMENF
                </span>
                ?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our unique approach combines traditional medical education with
                cutting-edge technology and community-focused training to
                prepare healthcare professionals for real-world challenges.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">100%</p>
                      <p className="text-teal-100">Tuition-Free</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6  text-teal-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">2 Years</p>
                      <p className="text-teal-100">Service Commitment</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6  text-teal-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">45+</p>
                      <p className="text-teal-100">Countries Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Process */}
        <div className="text-center space-y-12 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Service Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your application with required documents",
              },
              {
                step: "02",
                title: "Selection",
                description: "Comprehensive evaluation and selection process",
              },
              {
                step: "03",
                title: "Training",
                description:
                  "Innovative medical education and clinical training",
              },
              {
                step: "04",
                title: "Service",
                description: "Two-year commitment in underserved communities",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <span className="text-xl font-bold text-white">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                Join thousands of students who are transforming healthcare
                across Africa. Apply now for our tuition-free medical education
                program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-teal-600 hover:bg-gray-50 shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600"
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
