import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Book, FileText, Gavel, Library, MessageSquare, Newspaper, Shield, Users } from 'lucide-react';
import Layout from '@/components/Layout';
import { useTranslation } from 'react-i18next';

const Index = () => {
  const { t } = useTranslation();
  // Auto-open chatbot on home page - reduced delay for better UX
  useEffect(() => {
    // Wait a bit and then simulate a click on the chatbot button if it's not already open
    const timer = setTimeout(() => {
      const chatbotButton = document.querySelector('.chatbot-toggle') as HTMLButtonElement;
      if (chatbotButton) {
        chatbotButton.click();
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Legal Assistance",
      description: "Access to legal advice and representation through our network of legal professionals.",
      icon: <Gavel className="h-10 w-10 text-india-saffron" />,
      link: "/services",
    },
    {
      title: "Legal Education",
      description: "Resources to understand your rights, duties and the legal system of India.",
      icon: <Book className="h-10 w-10 text-india-saffron" />,
      link: "/resources",
    },
    {
      title: "Digital Library",
      description: "Access the Constitution of India, legal books, and judicial documents.",
      icon: <Library className="h-10 w-10 text-india-saffron" />,
      link: "/library",
    },
    {
      title: "Case Repository",
      description: "Comprehensive database of legal case histories from Indian courts.",
      icon: <FileText className="h-10 w-10 text-india-saffron" />,
      link: "/cases",
    },
  ];

  const latestNews = [
    {
      title: "Supreme Court Rules on Right to Privacy Case",
      date: "April 25, 2025",
      snippet: "The Supreme Court delivered a landmark judgment today on the right to privacy case...",
      url: "/news/1",
    },
    {
      title: "New Guidelines for Virtual Court Proceedings Released",
      date: "April 20, 2025",
      snippet: "The Department of Justice has issued new guidelines for virtual court proceedings...",
      url: "/news/2",
    },
    {
      title: "Legal Aid Services Expanded to Rural Areas",
      date: "April 15, 2025",
      snippet: "The Government's initiative to expand legal aid services to rural areas has seen significant progress...",
      url: "/news/3",
    },
  ];

  const recentCases = [
    {
      title: "State of Maharashtra v. Anand Kumar",
      court: "Supreme Court",
      date: "March 28, 2025",
      snippet: "Judgment on constitutional validity of Section 377 of the IPC...",
      url: "/cases/1",
    },
    {
      title: "Priya Sharma v. Union of India",
      court: "Delhi High Court",
      date: "March 22, 2025",
      snippet: "Case regarding the right to education for underprivileged children...",
      url: "/cases/2",
    },
    {
      title: "ABC Corporation v. Tax Authority",
      court: "Supreme Court",
      date: "March 15, 2025",
      snippet: "Verdict on corporate tax evasion case with significant implications...",
      url: "/cases/3",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Supreme Court Image */}
      <section className="relative bg-gradient-to-r from-india-blue to-india-blue/90 text-white">
        <div className="absolute inset-0 opacity-20">
          <img
            src="public\lovable-uploads\supremeCourt.webp"
            alt="Supreme Court of India"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container relative z-10 px-6 py-24 mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('hero.title', 'NYAYBANDHU')}
              <span className="block text-india-saffron">{t('hero.subtitle', 'Legal Assistant')}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 text-white/80">
              {t('hero.description', 'Empowering citizens through legal awareness, resources, and support - upholding the principles of justice as enshrined in the Constitution of India.')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-india-saffron hover:bg-india-saffron/90 text-white">
                {t('hero.access_services', 'Access Legal Services')}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white border-2 text-blue-500 font-bold hover:bg-white hover:text-india-blue hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 active:translate-y-[1px]"
                onClick={() => {
                  const chatbotButton = document.querySelector('.chatbot-toggle') as HTMLButtonElement;
                  if (chatbotButton) {
                    chatbotButton.click();
                    // Focus on the chatbot textarea after a small delay
                    setTimeout(() => {
                      const chatInput = document.querySelector('.chatbot-input input, .chatbot-input textarea') as HTMLElement;
                      if (chatInput) {
                        chatInput.focus();
                      }
                    }, 300);
                  }
                }}
              >
                {t('hero.consult_ai', 'Consult Legal AI')}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="public\lovable-uploads\th (1).jpeg"
                  alt="Supreme Court of India"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-india-saffron rounded-full hidden md:flex items-center justify-center text-white font-bold text-sm p-2 text-center">
                {t('hero.support_247', '24/7 Legal Support')}
              </div>
            </div>
          </div>
        </div>

        <div className="h-1.5 w-full tricolor-gradient"></div>
      </section>

      {/* Enhanced Chatbot Highlight Section */}
      <section className="py-12 bg-white border-b relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="rotating-wheel absolute -right-40 -top-40 w-80 h-80">
            <img src="/lovable-uploads/ashoka-chakra.svg" alt="Ashoka Chakra Background" />
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-india-blue mb-3">
              <span className="inline-block relative">
                AI-Powered Legal Assistant
                <span className="absolute -top-3 -right-12 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">New</span>
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience instant legal guidance with Nyaybandhu's AI assistant, available 24/7 in multiple languages
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-india-blue/5 to-india-blue/10 rounded-xl p-6 shadow-sm">
            <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
              <h3 className="text-xl font-bold text-india-blue mb-3">Your Personal Legal Guide</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-india-green/20 text-india-green p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Get instant answers to complex legal questions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-india-green/20 text-india-green p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Available in 10+ languages including Hindi, English, Sindhi, and Konkani</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-india-green/20 text-india-green p-1 rounded-full mr-2 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Learn about your rights, constitutional provisions, and legal procedures</span>
                </li>
              </ul>
              <Button
                className="bg-india-saffron hover:bg-india-saffron/90 text-blue-500 font-bold hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 active:translate-y-[1px]"
                size="lg"
                onClick={() => {
                  const chatbotButton = document.querySelector('.chatbot-toggle') as HTMLButtonElement;
                  if (chatbotButton) {
                    chatbotButton.click();
                    // Focus on the chatbot textarea after a small delay
                    setTimeout(() => {
                      const chatInput = document.querySelector('.chatbot-input input, .chatbot-input textarea') as HTMLElement;
                      if (chatInput) {
                        chatInput.focus();
                      }
                    }, 300);
                  }
                }}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat With Nyaybandhu AI
              </Button>
            </div>
            <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md border border-india-blue/10 max-w-md">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white shadow-md">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="bg-muted rounded-lg p-3 shadow-sm max-w-[80%] border-l-4 border-india-blue">
                  <p className="text-sm">
                    Namaste! I'm Nyaybandhu Assistant. I can help you with legal information,
                    queries about the Constitution, IPC, RTI, and more in multiple languages.
                  </p>
                </div>
              </div>

              <div className="flex justify-end mt-3">
                <div className="bg-india-blue rounded-lg p-3 shadow-sm max-w-[80%] text-white">
                  <p className="text-sm">
                    Can you tell me about the Right to Information Act?
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 mt-3">
                <div className="w-10 h-10 rounded-full bg-india-blue flex items-center justify-center text-white shadow-md">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="bg-muted rounded-lg p-3 shadow-sm max-w-[80%] border-l-4 border-india-blue">
                  <p className="text-sm typing-animation">
                    The Right to Information Act, 2005 (RTI) is an Act of the Parliament of India...
                  </p>
                </div>
              </div>

              <div className="flex justify-center mt-6 border-t pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-500 font-bold border-india-blue/40 hover:shadow-md hover:translate-y-[-1px] hover:bg-india-blue/10 transition-all duration-300 active:translate-y-[1px]"
                  onClick={() => {
                    const chatbotButton = document.querySelector('.chatbot-toggle') as HTMLButtonElement;
                    if (chatbotButton) {
                      chatbotButton.click();
                      // Focus on the chatbot textarea after a small delay
                      setTimeout(() => {
                        const chatInput = document.querySelector('.chatbot-input input, .chatbot-input textarea') as HTMLElement;
                        if (chatInput) {
                          chatInput.focus();
                        }
                      }, 300);
                    }
                  }}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nyaybandhu offers a comprehensive range of legal services to ensure justice
              and legal awareness for all citizens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-card-effect border-t-4 border-t-india-saffron">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-india-blue p-0">
                    <Link to={service.link} className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">About NYAYBANDHU</h2>
              <p className="text-muted-foreground mb-6">
                NYAYBANDHU is an initiative
                aimed at promoting legal literacy and providing access to justice for all citizens,
                especially those from marginalized and underserved communities.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to bridge the gap between citizens and the legal system by providing
                easy-to-understand legal information, resources, and support services that empower
                individuals to understand and exercise their legal rights.
              </p>
              <div className="flex space-x-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-india-saffron">24/7</div>
                  <div className="text-sm text-muted-foreground">Legal Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-india-saffron">10+</div>
                  <div className="text-sm text-muted-foreground">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-india-saffron">1000+</div>
                  <div className="text-sm text-muted-foreground">Legal Resources</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-40 bg-india-blue/10">
                  <img
                    src="public\lovable-uploads\doj1.png"
                    alt="Legal services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-56 bg-india-green/10">
                  <img
                    src="public\lovable-uploads\doj2.png"
                    alt="Legal education"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-56 bg-india-saffron/10">
                  <img
                    src="public\lovable-uploads\doj3.png"
                    alt="Legal awareness"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-40 bg-india-blue/10">
                  <img
                    src="public\lovable-uploads\doj4.png"
                    alt="Community outreach"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Cases Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>

          <Tabs defaultValue="news" className="w-full">
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-2 w-[400px]">
                <TabsTrigger value="news" className="text-base">Latest News</TabsTrigger>
                <TabsTrigger value="cases" className="text-base">Recent Cases</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="news" className="space-y-6">
              {latestNews.map((news, index) => (
                <Card key={index} className="hover-card-effect">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{news.title}</CardTitle>
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{news.snippet}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="text-india-blue p-0">
                      <Link to={news.url} className="flex items-center">
                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <div className="flex justify-center pt-4">
                <Button variant="outline" asChild>
                  <Link to="/news" className="flex items-center">
                    View All News <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="cases" className="space-y-6">
              {recentCases.map((case_, index) => (
                <Card key={index} className="hover-card-effect">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{case_.title}</CardTitle>
                      <div className="text-right">
                        <div className="text-sm font-medium">{case_.court}</div>
                        <div className="text-sm text-muted-foreground">{case_.date}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{case_.snippet}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild className="text-india-blue p-0">
                      <Link to={case_.url} className="flex items-center">
                        Read Case Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              <div className="flex justify-center pt-4">
                <Button variant="outline" asChild>
                  <Link to="/cases" className="flex items-center">
                    View All Cases <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features & Support Section */}
      <section className="section-padding bg-gradient-to-r from-india-blue to-india-blue/90 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Legal Protection</h3>
              <p className="text-white/80">
                Understanding your rights and how to protect yourself with the power of legal knowledge.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Support</h3>
              <p className="text-white/80">
                Access to a network of legal professionals and community resources for assistance.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                <Newspaper className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Latest Updates</h3>
              <p className="text-white/80">
                Stay informed about the latest legal developments, rulings, and changes to the law.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Legal Assistance?</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6">
              Our team of legal experts is ready to assist you with any questions or concerns.
              Contact us today to get the help you need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="bg-white text-india-blue hover:bg-white/90 font-medium" size="lg" asChild>
                <Link to="/contact">Contact Us Now</Link>
              </Button>
              <Button
                className="bg-india-saffron hover:bg-india-saffron/90 text-blue-500 font-bold hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 active:translate-y-[1px]"
                size="lg"
                onClick={() => {
                  const chatbotButton = document.querySelector('.chatbot-toggle') as HTMLButtonElement;
                  if (chatbotButton) {
                    chatbotButton.click();
                    // Focus on the chatbot textarea after a small delay
                    setTimeout(() => {
                      const chatInput = document.querySelector('.chatbot-input input, .chatbot-input textarea') as HTMLElement;
                      if (chatInput) {
                        chatInput.focus();
                      }
                    }, 300);
                  }
                }}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Chat With Nyaybandhu AI
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
