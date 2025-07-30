import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Zap, Shield, BarChart3, ExternalLink } from 'lucide-react';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Lightning-Fast Implementation",
      description: "Get your CRM up and running in weeks, not months, with our proven methodology."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance to protect your sensitive business data."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Transform your data into actionable insights with custom dashboards and reporting."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Team Collaboration",
      description: "Unite your sales team with seamless workflows and real-time collaboration tools."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "VP of Sales, TechCorp",
      content: "Thinkinginwordpress Solutions transformed our sales process. We saw a 40% increase in productivity within the first quarter.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Operations Director, GrowthCo",
      content: "The CRM implementation was seamless. Their team understood our needs and delivered beyond expectations.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Lisa Martinez",
      role: "CEO, InnovateLabs",
      content: "ROI was evident within months. Our sales team is more organized and efficient than ever before.",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const stats = [
    { value: "500+", label: "CRM Implementations" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "40%", label: "Average Productivity Gain" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-slate-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Power Smarter Sales with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                  CRM Built for You
                </span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                We implement intelligent CRM workflows to automate, optimize, and grow your business. 
                Transform your sales process with enterprise-grade solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://salescentri.com/get-started/book-demo"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Book Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://salescentri.com/get-started/free-trial"
                  className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>14-day free trial</span>
                </div>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CRM Dashboard"
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
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our CRM Solutions?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine technical expertise with business intelligence to deliver CRM solutions that drive real results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-white space-y-6">
            <TrendingUp className="w-16 h-16 mx-auto text-blue-200" />
            <h2 className="text-3xl lg:text-4xl font-bold">Calculate Your CRM ROI</h2>
            <p className="text-xl text-blue-100">
              See how much time and money you could save with our CRM automation solutions.
            </p>
            <a
              href="https://salescentri.com/platforms/lead-management/roi-calculator"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span>Calculate ROI</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600">
              Real results from real businesses who trusted us with their CRM transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Join hundreds of companies who've already streamlined their operations with our CRM solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://salescentri.com/get-started/book-demo"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Consultation
            </a>
            <a
              href="https://salescentri.com/resources/whitepapers-ebooks"
              className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Download Free Guide
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;