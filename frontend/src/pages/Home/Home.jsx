import {
  Button,
  Card,
  Avatar,
  Chip,
  Input,
  Link,
} from "@heroui/react";

import { FaCloud, FaMobileAlt, FaCloudUploadAlt, FaPaintBrush, FaRobot, FaChartLine, FaCode, FaDatabase, FaShieldAlt } from 'react-icons/fa';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home_HeroSection from "./components/Home_HeroSection";
import Stats from "./components/Stats";
import CTA from "./components/CTA";
import Projects from "./components/Projects";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import Trusted from "./components/Trusted";
import WhyChooseUs from "./components/WhyChooseUs";
import ConsultingBanner from "./components/ConsultingBanner";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home_HeroSection/>
      <Trusted/>
    



      <Services/>
      <ConsultingBanner/>
      <WhyChooseUs/>
      <Projects/>
      <TechStack/>
      <CaseStudies/>
      <Testimonials/>
      <CTA/>
      
    
      
{/* ========== ABOUT / FEATURES ========== */}
      {/* <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Chip color="primary" variant="flat" size="sm" className="mb-4">
                Why Choose Us
              </Chip>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                We Deliver Technology that{" "}
                <span className="text-indigo-600">Matters</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                With years of experience across industries, we bring technical
                expertise and strategic thinking to every project we undertake.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Expert Team",
                    desc: "Skilled developers, designers, and strategists",
                    icon: "👥",
                  },
                  {
                    title: "Agile Process",
                    desc: "Fast iterations with continuous feedback",
                    icon: "⚡",
                  },
                  {
                    title: "Proven Results",
                    desc: "Track record of delivering on time and on budget",
                    icon: "🎯",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="text-2xl mt-1">{feature.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100" shadow="none" radius="2xl">
                  <div className="p-8">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      What Our Clients Say
                    </h3>
                    <div className="border-b border-gray-200 my-4" />
                    <div className="space-y-4">
                      {[
                        {
                          quote:
                            "Technify transformed our digital infrastructure. Their team was professional, responsive, and delivered beyond expectations.",
                          name: "Sarah Johnson",
                          role: "CEO, TechCorp",
                          avatar: "https://i.pravatar.cc/60?u=sarah",
                        },
                        {
                          quote:
                            "The best tech partner we've worked with. Highly recommend their consulting services.",
                          name: "Mike Chen",
                          role: "CTO, DataFlow",
                          avatar: "https://i.pravatar.cc/60?u=mike",
                        },
                      ].map((testimonial, i) => (
                        <Card key={i} shadow="none" className="bg-white/80 border border-indigo-100">
                            <div className="p-4">
                            <p className="text-gray-600 text-sm italic mb-3">
                              &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                              <Avatar
                                src={testimonial.avatar}
                                size="sm"
                              />
                              <div>
                                <p className="text-sm font-semibold text-gray-900">
                                  {testimonial.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {testimonial.role}
                                </p>
                              </div>
                            </div>
                            </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                  </div>
              </Card>
            </div>
          </div>
        </div>
      </section> */}


      
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you leverage technology to achieve
            your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              radius="full"
              size="lg"
              className="flex-1"
            />
            <Button
              as={Link}
              href="/consultation"
              color="primary"
              size="lg"
              radius="full"
              className="font-semibold"
            >
              Get Started
            </Button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Home;
