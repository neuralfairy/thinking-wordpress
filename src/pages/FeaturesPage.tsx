import React, { useEffect, useState } from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, BarChart3, Users, Settings, Cloud, ExternalLink } from 'lucide-react';

const FeaturesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: "CRM Migration & Integration",
      description: "Seamlessly migrate from your existing CRM or integrate with current systems without data loss or business disruption.",
      benefits: [
        "Zero-downtime migration process",
        "Data integrity validation",
        "Custom field mapping",
        "Third-party app integration"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "Custom Dashboards & Pipelines", 
      description: "Create personalized dashboards and sales pipelines that match your unique business processes and reporting needs.",
      benefits: [
        "Real-time performance metrics",
        "Customizable pipeline stages",
        "Advanced reporting tools",
        "Mobile-optimized dashboards"
      ]
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "Automation Workflows",
      description: "Streamline your operations with intelligent automation that handles routine tasks, lead routing, and follow-up communications.",
      benefits: [
        "Lead scoring automation",
        "Email sequence triggers",
        "Task assignment rules",
        "Approval workflow management"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: "Enterprise Security",
      description: "Bank-level security with role-based permissions, data encryption, and compliance features for regulated industries.",
      benefits: [
        "Multi-factor authentication",
        "Data encryption at rest",
        "GDPR compliance tools",
        "Audit trail logging"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Team Collaboration",
      description: "Unite your teams with shared calendars, communication tools, and collaborative workspaces that improve productivity.",
      benefits: [
        "Shared team calendars",
        "Internal messaging system",
        "Document collaboration",
        "Activity stream updates"
      ]
    },
    {
      icon: <Cloud className="w-12 h-12 text-blue-600" />,
      title: "Cloud-Based Platform",
      description: "Access your CRM anywhere with cloud infrastructure that scales with your business growth and ensures 99.9% uptime.",
      benefits: [
        "Global data synchronization",
        "Automatic backups",
        "Scalable infrastructure",
        "Mobile app access"
      ]
    }
  ];

  const integrations = [
    { name: "Salesforce", logo: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { name: "HubSpot", logo: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { name: "Microsoft Dynamics", logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { name: "Zoho", logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { name: "Pipedrive", logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    { name: "Freshworks", logo: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-slate-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className={`text-center space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Powerful CRM Features
              <span className="block bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                Built for Your Success
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Discover comprehensive CRM capabilities designed to streamline your sales process, 
              enhance customer relationships, and drive measurable business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://salescentri.com/solutions/psa-suite/integrations"
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>View Integrations</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our comprehensive feature set is designed to address every aspect of customer relationship management 
              and sales process optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-slate-100 group">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              See Our Features in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience how our advanced CRM capabilities can transform your business operations 
              with real-world demonstrations and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Automated Lead Scoring</h3>
                <p className="text-slate-600 mb-6">
                  Our AI-powered lead scoring system automatically evaluates prospects based on behavior, 
                  demographics, and engagement patterns, ensuring your sales team focuses on the highest-value opportunities.
                </p>
                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">Lead Quality Score</span>
                    <span className="text-2xl font-bold text-green-600">94/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style={{width: '94%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Pipeline Visualization</h3>
                <p className="text-slate-600 mb-6">
                  Get complete visibility into your sales pipeline with customizable stages, 
                  probability tracking, and revenue forecasting capabilities.
                </p>
                <div className="flex justify-between items-center bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">127</div>
                    <div className="text-sm text-slate-600">Prospects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$2.4M</div>
                    <div className="text-sm text-slate-600">Pipeline Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">68%</div>
                    <div className="text-sm text-slate-600">Win Rate</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="CRM Dashboard Interface"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Connect with the tools you already use. Our platform integrates with hundreds of 
              popular business applications to create a unified workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-center">
                <img
                  src={integration.logo}
                  alt={integration.name}
                  className="w-16 h-16 mx-auto rounded-lg mb-4 object-cover"
                />
                <div className="font-semibold text-slate-900">{integration.name}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://salescentri.com/solutions/psa-suite/integrations"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <span>View All Integrations</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Experience These Features?</h2>
            <p className="text-xl text-blue-100">
              See how our comprehensive CRM solution can transform your business operations 
              and drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Schedule Live Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;