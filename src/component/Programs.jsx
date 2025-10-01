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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../component/ui/tabs";
import {
  GraduationCap,
  Award,
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
} from "lucide-react";
import { mockData, programsData, requirements } from "../data/data";
import { useNavigate } from "react-router-dom";
import { Carousel } from "flowbite-react";
import programbanner from "../assets/img2.jpg";

const Programs = () => {
  const navigate = useNavigate();

  const goToProgramDetailsPage = () => {
    navigate("/ProgramDetails"); // Navigate to the '/about' route
  };
  // const getIcon = (iconName) => {
  //   const icons = {
  //     GraduationCap,
  //     Heart,
  //     Users,
  //     Globe,
  //   };
  //   return icons[iconName] || GraduationCap;
  // };
  const { programs, foundation } = mockData;
  const programHighlights = [
    {
      icon: GraduationCap,
      title: "Medical Scholarships",
      value: programs.scholarships.annual.toLocaleString(),
      description: "Annual scholarships for medical students",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: Heart,
      title: "Allied Health",
      value: programs.scholarships.alliedHealth.toString(),
      description: "Scholarships in allied health fields",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Primary Care Training",
      value: programs.training.doctors.toString(),
      description: "Doctors trained annually in primary healthcare",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Globe,
      title: "Global Reach",
      value: programs.scholarships.countries.toString() + "+",
      description: "Countries across sub-Saharan Africa",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50">
      <div
        className="pt-10 bg-cover bg-center h-100"
        style={{ backgroundImage: `url(${programbanner})` }}
      >
        {/* Header Section */}
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
            build the next generation of healthcare professionals for Africa.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Program Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-lg`}
                >
                  <highlight.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-2">
                  {highlight.value}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600">{highlight.description}</p>
                <Button
                  onClick={goToProgramDetailsPage}
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-teal-100 to-cyan-200 hover:from-teal-200 hover:to-cyan-300 shadow-lg"
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Program Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger
                value="overview"
                className="bg-red-100 p-4 hover:bg-red-300 hover:cursor-pointer"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="medical"
                className="bg-green-100 p-4 hover:bg-green-300 hover:cursor-pointer"
              >
                Medical Program
              </TabsTrigger>
              <TabsTrigger
                value="allied"
                className="bg-blue-100 p-4 hover:bg-blue-300 hover:cursor-pointer"
              >
                Allied Health
              </TabsTrigger>
              <TabsTrigger
                value="requirements"
                className="bg-yellow-100 p-4 hover:bg-yellow-300 hover:cursor-pointer"
              >
                Requirements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Program Overview
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Each year, we will provide 3,000 scholarships to sub-Saharan
                    countries, totaling 15,000 scholarships over five years. Our
                    comprehensive approach includes medical education, allied
                    health training, and specialized programs.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">
                        5-year comprehensive program
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">
                        Focus on underserved communities
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-teal-600" />
                      <span className="text-gray-700">
                        Innovative curriculum design
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 border-0">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <TrendingUp className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          15,000
                        </h3>
                        <p className="text-gray-600">
                          Total scholarships over 5 years
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-0">
                    <CardContent className="p-6">
                      <div className="text-center">
                        <Clock className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          2 Years
                        </h3>
                        <p className="text-gray-600">
                          Service commitment period
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="medical" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Medical Education Program
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our innovative medical curriculum integrates primary care,
                  community medicine, telemedicine, and AI diagnostics to
                  prepare doctors for modern healthcare challenges.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <BookOpen className="w-5 h-5 mr-3 text-teal-600" />
                      Curriculum Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Primary Care Medicine",
                      "Community Health",
                      "Telemedicine",
                      "AI Diagnostics",
                      "Public Health",
                      "Emergency Medicine",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-teal-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <MapPin className="w-5 h-5 mr-3 text-cyan-600" />
                      Clinical Training
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Mauritius Medical Facilities",
                      "Rural Health Centers",
                      "Community Clinics",
                      "Telemedicine Centers",
                      "Research Laboratories",
                      "International Partnerships",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-cyan-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="allied" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Allied Health Programs
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  125 tuition-free scholarships will be granted in allied health
                  fields across various streams, supporting the broader
                  healthcare ecosystem.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Nursing",
                    description:
                      "Comprehensive nursing education with specialization options",
                    icon: Heart,
                  },
                  {
                    title: "Pharmacy",
                    description:
                      "Pharmaceutical sciences and clinical pharmacy practice",
                    icon: BookOpen,
                  },
                  {
                    title: "Medical Technology",
                    description:
                      "Laboratory sciences and diagnostic technology",
                    icon: Target,
                  },
                  {
                    title: "Physiotherapy",
                    description:
                      "Rehabilitation and physical therapy specialization",
                    icon: Users,
                  },
                  {
                    title: "Midwifery",
                    description: "Maternal and child health focused programs",
                    icon: Heart,
                  },
                  {
                    title: "Public Health",
                    description: "Community health and epidemiology studies",
                    icon: Globe,
                  },
                ].map((program, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
                        <program.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-lg">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {program.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Eligibility Requirements
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our scholarship programs are designed for exceptional students
                  committed to serving their communities and advancing
                  healthcare in Africa.
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    General Requirements
                  </h3>
                  <div className="space-y-4">
                    {requirements.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Application Process
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Submit online application with required documents",
                      "Complete entrance examination",
                      "Participate in interview process",
                      "Medical and background verification",
                      "Final selection and enrollment",
                    ].map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-white">
                            {index + 1}
                          </span>
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-teal-600 to-cyan-600 border-0 shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Transform Your Future in Healthcare
              </h2>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto">
                Join our mission to address Africa's healthcare crisis. Apply
                now for a tuition-free medical education that will change your
                life and impact thousands of others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-teal-600 hover:bg-gray-50 shadow-lg"
                >
                  Apply for Scholarship
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600"
                >
                  Download Application Guide
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Programs;
