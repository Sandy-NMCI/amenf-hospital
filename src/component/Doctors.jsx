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
import doctorbanner from "../assets/img2.jpg";

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
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { doctorsDetails, doctors } from "../data/data";

const Doctors = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <div className="pt-10 bg-[url('./img2.jpg')] bg-cover bg-center h-100"> */}
      <div
        className="pt-10 bg-cover bg-center h-100"
        style={{ backgroundImage: `url(${doctorbanner})` }}
      >
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 text-lg px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            Best Doctors
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Doctors
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            “At AMENF Hospital, our doctors combine expertise with compassion to
            deliver the best care for every patient.”
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Doctors –
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                  {" "}
                  The Heart of AMENF Hospital
                </span>
                !
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At AMENF Hospital, we believe that exceptional healthcare begins
                with exceptional doctors. Our team of highly skilled and
                compassionate specialists is dedicated to providing world-class
                medical care with a personal touch.
              </p>
              <div className="grid sm:grid-cols-1 gap-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {" "}
                  Why Our Doctors Stand Out:
                </h2>
                {doctorsDetails.map((docDetails, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700 font-bold">
                      {docDetails.title} -{" "}
                    </span>
                    {docDetails.description}
                  </div>
                ))}
                <p className="text-lg text-gray-600 leading-relaxed">
                  At AMENF Hospital, our doctors are more than medical
                  professionals—they are healers, mentors, and trusted partners
                  in your journey to better health.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-1">
            <h2 className="text-3xl md:text-4xl text-center pb-10 font-bold text-gray-900">
              Our Doctors
            </h2>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
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
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    {doctor.email}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full border border-gray-400"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full border border-gray-400"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full border border-gray-400"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="bg-gray-100 hover:bg-teal-500 hover:text-white text-gray-600 p-2 rounded-full border border-gray-400"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                  {/* <button
                    variant="outline"
                    className="w-full rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Read More...
                  </button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
