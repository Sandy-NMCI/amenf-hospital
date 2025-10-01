import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../component/ui/card";
import { Badge } from "../component/ui/badge";
import { Button } from "../component/ui/button";
import { Input } from "../component/ui/input";
import { Textarea } from "../component/ui/textarea";
import { Label } from "../component/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../component/ui/select";
import { useToast } from "../hooks/use-toast";
import contactbanner from "../assets/contact2.jpg";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Send,
  MessageCircle,
  Clock,
  Users,
  Heart,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { mockData } from "../data/data";

const Contact = () => {
  const { contact } = mockData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    message: "",
    inquiryType: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value, name) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for contacting AMENF. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      message: "",
      inquiryType: "",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content: contact.address,
      description: "Visit us in Mauritius",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: contact.phone,
      description: "Call us anytime",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: contact.email,
      description: "Send us an email",
    },
    {
      icon: Globe,
      title: "Website",
      content: contact.website,
      description: "Visit our website",
    },
  ];

  const inquiryTypes = [
    "Scholarship Application",
    "Program Information",
    "Partnership Opportunities",
    "Media Inquiries",
    "Donation Information",
    "General Questions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div
        className="pt-10 bg-cover bg-center h-100"
        style={{ backgroundImage: `url(${contactbanner})` }}
      >
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 text-lg px-4 py-2">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
              Us
            </span>
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Have questions about our programs or want to get involved? We'd love
            to hear from you. Reach out to us and let's work together to
            transform healthcare in AMENF.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  py-10">
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-teal-600 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900 flex items-center">
                <Send className="w-6 h-6 mr-3 text-teal-600" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="Enter your country"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type</Label>
                  <Select
                    onValueChange={(value) =>
                      handleSelectChange(value, "inquiryType")
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type, index) => (
                        <SelectItem key={index} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter message subject"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-teal-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Office Hours
                    </h3>
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                    </p>
                    <p>
                      <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Follow Us
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    Stay updated with our latest news, programs, and success
                    stories by following us on social media.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-teal-600 text-teal-600 hover:bg-teal-50"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                    >
                      <Twitter className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      <Facebook className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Emergency Support
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    For urgent scholarship or program-related inquiries, please
                    contact our emergency support line available 24/7.
                  </p>
                  <div className="space-y-2">
                    <p className="text-cyan-600 font-medium">
                      Emergency Line: +230 XXX XXXX
                    </p>
                    <p className="text-sm text-gray-600">
                      Available 24/7 for current students
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <Card className="mt-16 border-0 shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">
              Visit Our Campus
            </h3>
            <p className="text-teal-100">
              Located in the beautiful island of Mauritius
            </p>
          </div>
          <div className="h-64 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Interactive Map Coming Soon</p>
              <p className="text-sm">Medical Education Complex, Mauritius</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
