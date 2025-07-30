import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, ExternalLink, CheckCircle } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "CRM Implementation",
      faqs: [
        {
          question: "How long does a typical CRM implementation take?",
          answer: "Implementation timelines vary based on complexity and requirements. A basic setup can be completed in 2-4 weeks, while comprehensive implementations with custom integrations typically take 6-12 weeks. We provide detailed project timelines during our initial consultation."
        },
        {
          question: "What's included in your CRM implementation service?",
          answer: "Our comprehensive implementation includes: initial consultation and requirements gathering, system configuration and customization, data migration from existing systems, user training and onboarding, integration setup with third-party tools, testing and quality assurance, and ongoing support during the transition period."
        },
        {
          question: "Can you migrate data from our existing CRM system?",
          answer: "Yes, we specialize in data migration from all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, Zoho, and legacy systems. Our process includes data mapping, cleansing, validation, and integrity checks to ensure no data loss during migration."
        },
        {
          question: "Do you provide training for our team?",
          answer: "Absolutely! We provide comprehensive training programs tailored to different user roles. This includes basic user training, administrator training, best practices workshops, and ongoing support materials. We also offer refresher sessions and training for new team members."
        }
      ]
    },
    {
      title: "System Integration",
      faqs: [
        {
          question: "Which systems can you integrate with our CRM?",
          answer: "We integrate CRMs with a wide range of business applications including email platforms (Gmail, Outlook), marketing automation tools (HubSpot, Marketo), accounting software (QuickBooks, Xero), e-commerce platforms (Shopify, WooCommerce), and custom applications via APIs."
        },
        {
          question: "How do you ensure data security during integrations?",
          answer: "We follow enterprise-grade security protocols including encrypted data transmission, secure API connections, role-based access controls, regular security audits, and compliance with GDPR, HIPAA, and other regulatory requirements. All integrations are tested in secure sandbox environments first."
        },
        {
          question: "What happens if an integration breaks or fails?",
          answer: "We provide ongoing monitoring and maintenance for all integrations. Our support team is alerted to any failures and works quickly to resolve issues. We also maintain backup procedures and rollback capabilities to minimize business disruption."
        }
      ]
    },
    {
      title: "Pricing & Plans",
      faqs: [
        {
          question: "How do you price CRM implementation projects?",
          answer: "Pricing depends on project scope, complexity, data volume, and customization requirements. We offer fixed-price packages for standard implementations and custom quotes for complex projects. All pricing is transparent with no hidden fees."
        },
        {
          question: "Do you offer ongoing support after implementation?",
          answer: "Yes, we provide various support plans including basic email support, priority phone support, dedicated account management, regular system health checks, and proactive optimization recommendations. Support plans can be customized based on your needs."
        },
        {
          question: "Can I change or upgrade my plan later?",
          answer: "Absolutely! Our services are designed to scale with your business. You can upgrade to more comprehensive support plans, add new integrations, or expand functionality as your needs grow. We'll work with you to ensure smooth transitions."
        }
      ]
    },
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "What CRM platforms do you work with?",
          answer: "We work with all major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics 365, Zoho CRM, Pipedrive, Freshworks, and many others. We also have experience with industry-specific CRMs and can recommend the best platform for your needs."
        },
        {
          question: "Do you provide custom development services?",
          answer: "Yes, we offer custom development for unique business requirements including custom fields and objects, automated workflows, custom integrations, reporting dashboards, and mobile applications. Our developers are experienced with various CRM APIs and development frameworks."
        },
        {
          question: "How do you handle data backup and recovery?",
          answer: "We implement comprehensive backup strategies including automated daily backups, multiple backup locations, regular restore testing, and documented recovery procedures. We also help set up your organization's ongoing backup policies and disaster recovery plans."
        }
      ]
    },
    {
      title: "Business Process",
      faqs: [
        {
          question: "How do you ensure the CRM matches our business processes?",
          answer: "We start with a thorough analysis of your current workflows and business processes. Our team works closely with your stakeholders to map existing processes, identify improvement opportunities, and configure the CRM to support optimized workflows while maintaining familiar user experiences."
        },
        {
          question: "What if we need changes after the implementation is complete?",
          answer: "Change requests are common and expected. We provide ongoing optimization services to refine processes, add new features, and adapt to changing business needs. Minor adjustments are often included in support plans, while major changes are handled as separate projects."
        },
        {
          question: "How do you measure the success of a CRM implementation?",
          answer: "Success is measured through various KPIs including user adoption rates, data quality improvements, process efficiency gains, sales productivity increases, and ROI metrics. We establish baseline measurements and track progress through regular reviews and reporting."
        }
      ]
    }
  ];

  const allFaqs = faqCategories.flatMap(category => 
    category.faqs.map(faq => ({ ...faq, category: category.title }))
  );

  const filteredFaqs = allFaqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const groupedFilteredFaqs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-32">
          <div className="text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Frequently Asked
              <span className="block bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Find answers to common questions about CRM implementation, system integration, 
              and our consulting services. Can't find what you're looking for? Contact us directly.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {searchTerm ? (
            /* Search Results */
            <div className="space-y-6">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-slate-900">
                  Search Results ({filteredFaqs.length})
                </h2>
                <p className="text-slate-600 mt-2">
                  Showing results for "{searchTerm}"
                </p>
              </div>
              
              {filteredFaqs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <div key={index} className="bg-slate-50 rounded-xl border border-slate-200">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors rounded-xl"
                        onClick={() => toggleItem(index)}
                      >
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-1">{faq.question}</h3>
                          <span className="text-sm text-blue-600 font-medium">{faq.category}</span>
                        </div>
                        {openItems.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      {openItems.includes(index) && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">No results found</h3>
                  <p className="text-slate-600">Try searching with different keywords or browse categories below.</p>
                </div>
              )}
            </div>
          ) : (
            /* Category View */
            <div className="space-y-12">
              {groupedFilteredFaqs.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                    {category.title}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across categories
                      return (
                        <div key={faqIndex} className="bg-slate-50 rounded-xl border border-slate-200">
                          <button
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 transition-colors rounded-xl"
                            onClick={() => toggleItem(globalIndex)}
                          >
                            <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                            {openItems.includes(globalIndex) ? (
                              <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                            )}
                          </button>
                          {openItems.includes(globalIndex) && (
                            <div className="px-6 pb-4">
                              <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-slate-600">
              Explore our resources or get in touch with our team for personalized assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Free Consultation</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get expert advice tailored to your specific CRM needs
              </p>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-1"
              >
                <span>Book Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Knowledge Base</h3>
              <p className="text-sm text-slate-600 mb-4">
                Comprehensive guides and tutorials for CRM success
              </p>
              <a
                href="https://salescentri.com/resources/whitepapers-ebooks"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-1"
              >
                <span>Explore</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Case Studies</h3>
              <p className="text-sm text-slate-600 mb-4">
                Real-world examples of successful CRM implementations
              </p>
              <a
                href="https://salescentri.com/resources/case-studies"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-1"
              >
                <span>Read More</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Contact Support</h3>
              <p className="text-sm text-slate-600 mb-4">
                Get direct help from our CRM implementation experts
              </p>
              <a
                href="https://salescentri.com/get-started/contact"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-1"
              >
                <span>Get Help</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-white space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100">
              Let our CRM experts help you implement a solution that drives real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/get-started/free-trial"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Start Free Trial</span>
                <ExternalLink className="w-5 h-5" />
              </a>
              <a
                href="https://salescentri.com/get-started/book-demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;