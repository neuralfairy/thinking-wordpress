import React from 'react';
import { Users, Target, Award, TrendingUp, ExternalLink, MapPin, Mail, Phone } from 'lucide-react';

const AboutPage = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder", 
      bio: "15+ years in CRM consulting with expertise in enterprise implementations. Former VP of Sales Operations at Fortune 500 company.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Technical architect with deep expertise in CRM integrations and automation. Former lead engineer at major CRM platform.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "Emily Rodriguez", 
      role: "VP of Customer Success",
      bio: "Customer success expert who ensures every implementation delivers measurable results. 12+ years in business process optimization.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Senior Implementation Specialist",
      bio: "Hands-on CRM implementation expert with experience across multiple industries. Specializes in complex data migrations.",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      linkedin: "#"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: "500+", label: "Successful Implementations" },
    { icon: <Target className="w-8 h-8 text-blue-600" />, value: "95%", label: "Client Satisfaction Rate" },
    { icon: <Award className="w-8 h-8 text-blue-600" />, value: "50+", label: "Industry Awards" },
    { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, value: "40%", label: "Average ROI Increase" }
  ];

  const industries = [
    {
      name: "Technology",
      description: "SaaS companies, software development firms, and tech startups",
      companies: "150+ companies served",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      name: "Healthcare", 
      description: "Medical practices, hospitals, and healthcare service providers",
      companies: "80+ organizations served",
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      name: "Financial Services",
      description: "Banks, insurance companies, and financial advisors",
      companies: "120+ firms served", 
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      name: "Manufacturing",
      description: "Industrial manufacturers and supply chain companies",
      companies: "90+ manufacturers served",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    }
  ];

  const values = [
    {
      title: "Customer-Centric Approach",
      description: "Every decision we make is guided by what's best for our clients' success and growth."
    },
    {
      title: "Technical Excellence", 
      description: "We maintain the highest standards in CRM implementation and system integration."
    },
    {
      title: "Measurable Results",
      description: "Our success is measured by the tangible business outcomes we deliver for clients."
    },
    {
      title: "Long-term Partnerships",
      description: "We build lasting relationships that extend far beyond initial implementation."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transforming Business
                <span className="block bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                  Through CRM Excellence
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Founded in Henderson, NV, Thinkinginwordpress Solutions has been helping organizations 
                implement, customize, and optimize CRM systems to streamline sales workflows and improve 
                team productivity for over a decade.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://salescentri.com/company/careers"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Join Our Team</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-all duration-200">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We exist to help businesses unlock their full potential through strategic CRM implementation 
              and optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses with CRM solutions that drive measurable growth, enhance customer 
                relationships, and streamline operations. We believe every organization deserves a CRM 
                system that works as hard as they do.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-slate-600 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the most trusted CRM consultancy, known for delivering exceptional results and 
                building lasting partnerships. We envision a world where every business can harness 
                the full power of their customer data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our team combines deep technical expertise with extensive business experience to deliver 
              CRM solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, allowing us to deliver tailored 
              CRM solutions that address specific business challenges and opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h3>
                  <p className="text-slate-600 mb-4">{industry.description}</p>
                  <div className="text-blue-600 font-medium">{industry.companies}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our approach to client relationships 
              and project delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Let's discuss how we can help transform your business with the right CRM solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-blue-100">Henderson, NV</p>
            </div>
            <div className="text-white">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:info@thinkinginwordpress.com" className="text-blue-100 hover:text-white transition-colors">
                info@thinkinginwordpress.com
              </a>
            </div>
            <div className="text-white">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+17022551234" className="text-blue-100 hover:text-white transition-colors">
                (702) 255-1234
              </a>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/get-started/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center space-x-2"
            >
              <span>Get In Touch</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;