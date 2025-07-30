import React, { useState } from 'react';
import { Check, ArrowRight, ExternalLink, Star, Users, Zap, Shield } from 'lucide-react';

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started with CRM",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "Up to 5 users",
        "1,000 contacts",
        "Basic CRM functionality",
        "Email integration",
        "Mobile app access",
        "Standard support",
        "Basic reporting",
        "Lead management"
      ],
      popular: false,
      ctaText: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Pro",
      description: "Advanced features for growing businesses",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Up to 25 users",
        "10,000 contacts",
        "Advanced automation",
        "Custom dashboards",
        "API access",
        "Priority support",
        "Advanced reporting",
        "Sales forecasting",
        "Third-party integrations",
        "Custom fields",
        "Workflow automation",
        "Team collaboration tools"
      ],
      popular: true,
      ctaText: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      monthlyPrice: 149,
      yearlyPrice: 1490,
      features: [
        "Unlimited users",
        "Unlimited contacts",
        "Full automation suite",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom reporting",
        "Predictive analytics",
        "White-label options",
        "Advanced permissions",
        "Custom workflows",
        "SLA guarantees",
        "Training & onboarding",
        "Account management"
      ],
      popular: false,
      ctaText: "Contact Sales",
      ctaLink: "https://salescentri.com/get-started/contact"
    }
  ];

  const features = [
    {
      category: "Core CRM",
      items: [
        { name: "Contact Management", starter: true, pro: true, enterprise: true },
        { name: "Lead Tracking", starter: true, pro: true, enterprise: true },
        { name: "Deal Pipeline", starter: true, pro: true, enterprise: true },
        { name: "Activity Logging", starter: true, pro: true, enterprise: true },
        { name: "Email Integration", starter: true, pro: true, enterprise: true },
        { name: "Mobile App", starter: true, pro: true, enterprise: true }
      ]
    },
    {
      category: "Automation & Workflows",
      items: [
        { name: "Basic Automation", starter: false, pro: true, enterprise: true },
        { name: "Advanced Workflows", starter: false, pro: true, enterprise: true },
        { name: "Custom Triggers", starter: false, pro: true, enterprise: true },
        { name: "Approval Processes", starter: false, pro: false, enterprise: true },
        { name: "Complex Automation", starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Reporting & Analytics",
      items: [
        { name: "Standard Reports", starter: true, pro: true, enterprise: true },
        { name: "Custom Dashboards", starter: false, pro: true, enterprise: true },
        { name: "Advanced Analytics", starter: false, pro: true, enterprise: true },
        { name: "Predictive Insights", starter: false, pro: false, enterprise: true },
        { name: "Custom Reports", starter: false, pro: true, enterprise: true }
      ]
    },
    {
      category: "Integration & API",
      items: [
        { name: "Basic Integrations", starter: true, pro: true, enterprise: true },
        { name: "API Access", starter: false, pro: true, enterprise: true },
        { name: "Custom Integrations", starter: false, pro: false, enterprise: true },
        { name: "Webhook Support", starter: false, pro: true, enterprise: true },
        { name: "Enterprise Connectors", starter: false, pro: false, enterprise: true }
      ]
    },
    {
      category: "Support & Security",
      items: [
        { name: "Email Support", starter: true, pro: true, enterprise: true },
        { name: "Priority Support", starter: false, pro: true, enterprise: true },
        { name: "Phone Support", starter: false, pro: false, enterprise: true },
        { name: "Dedicated Manager", starter: false, pro: false, enterprise: true },
        { name: "Advanced Security", starter: false, pro: true, enterprise: true },
        { name: "SSO Integration", starter: false, pro: false, enterprise: true }
      ]
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Sales Director",
      company: "TechFlow Solutions",
      content: "The Pro plan gave us everything we needed to scale our sales operations. ROI was clear within 3 months.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Maria Rodriguez",
      role: "CEO",
      company: "GrowthCorp",
      content: "Enterprise features and support helped us manage our complex sales processes across multiple regions.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Simple, Transparent
              <span className="block bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                CRM Pricing
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core CRM features, 
              with advanced capabilities available as you grow.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`font-medium ${billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  billingCycle === 'yearly' ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <div className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                }`}></div>
              </button>
              <span className={`font-medium ${billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'}`}>
                Yearly
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`relative rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-600 shadow-xl scale-105' 
                  : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
              } transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-slate-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-slate-900">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-slate-600">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                  </div>
                  
                  <a
                    href={plan.ctaLink}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transform hover:scale-105'
                        : 'border-2 border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    {plan.ctaText === 'Contact Sales' ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                  </a>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See exactly what's included in each plan to make the best decision for your business needs.
            </p>
            <div className="mt-6">
              <a
                href="https://salescentri.com/pricing/feature-comparison"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-1 transition-colors"
              >
                <span>View Detailed Comparison</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="text-left p-6 font-semibold text-slate-900">Features</th>
                    <th className="text-center p-6 font-semibold text-slate-900">Starter</th>
                    <th className="text-center p-6 font-semibold text-blue-600">Pro</th>
                    <th className="text-center p-6 font-semibold text-slate-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((category, categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                      <tr className="bg-slate-50">
                        <td className="p-4 font-semibold text-slate-900" colSpan={4}>
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="border-b border-slate-100">
                          <td className="p-4 text-slate-700">{item.name}</td>
                          <td className="p-4 text-center">
                            {item.starter ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-slate-300">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {item.pro ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-slate-300">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {item.enterprise ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <span className="text-slate-300">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Calculate Your ROI</h2>
            <p className="text-xl text-blue-100">
              See how much time and money you could save with our CRM automation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/platforms/lead-management/roi-calculator"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Calculate ROI</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://salescentri.com/pricing/plans-overview"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Custom Pricing</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-slate-600">
              Real results from businesses that chose the right CRM plan for their needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <div className="text-slate-600 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I change plans at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
              },
              {
                question: "What's included in the free trial?",
                answer: "All plans include a 14-day free trial with full access to features. No credit card required to start."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees for any plan. We also provide free onboarding assistance to help you get started quickly."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and can arrange invoicing for Enterprise customers."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;