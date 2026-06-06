import {
  Button,
  Card,
  Avatar,
  Chip,
  Input,
  Link,
} from "@heroui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home_HeroSection from "./components/Home_HeroSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home_HeroSection/>

    

      {/* ========== TRUSTED COMPANIES ========== */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 text-gray-400">
            <p className="text-2xl font-bold text-gray-300">TechCorp</p>
            <p className="text-2xl font-bold text-gray-300">InnovateX</p>
            <p className="text-2xl font-bold text-gray-300">DataFlow</p>
            <p className="text-2xl font-bold text-gray-300">CloudNine</p>
            <p className="text-2xl font-bold text-gray-300">NexGen</p>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Chip color="primary" variant="flat" size="sm" className="mb-4">
              What We Offer
            </Chip>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 text-lg">
              End-to-end technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                desc: "Custom web applications built with modern frameworks and best practices.",
                icon: "🌐",
                color: "bg-blue-50",
                border: "border-blue-200",
              },
              {
                title: "Mobile Apps",
                desc: "Native and cross-platform mobile applications for iOS and Android.",
                icon: "📱",
                color: "bg-green-50",
                border: "border-green-200",
              },
              {
                title: "Cloud Solutions",
                desc: "Scalable cloud infrastructure and migration services.",
                icon: "☁️",
                color: "bg-purple-50",
                border: "border-purple-200",
              },
              {
                title: "UI/UX Design",
                desc: "User-centered design that drives engagement and conversions.",
                icon: "🎨",
                color: "bg-pink-50",
                border: "border-pink-200",
              },
              {
                title: "AI & Machine Learning",
                desc: "Intelligent automation and data-driven solutions.",
                icon: "🤖",
                color: "bg-yellow-50",
                border: "border-yellow-200",
              },
              {
                title: "IT Consulting",
                desc: "Strategic technology consulting to accelerate your digital transformation.",
                icon: "💡",
                color: "bg-indigo-50",
                border: "border-indigo-200",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className={`border-2 ${service.border} ${service.color} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                shadow="none"
                radius="lg"
              >
                  <div className="p-6">
                  <span className="text-4xl mb-4 block">{service.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                  </div>
                  <div className="pt-0 px-6 pb-6">
                  <Button
                    as={Link}
                    href="/services"
                    variant="light"
                    color="primary"
                    size="sm"
                    endContent={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    }
                  >
                    Learn More
                  </Button>
                  </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "200+", label: "Clients" },
              { value: "500+", label: "Projects" },
              { value: "50+", label: "Team Members" },
              { value: "4.9", label: "Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-indigo-200 text-lg font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT / FEATURES ========== */}
      <section id="about" className="py-20 bg-white">
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
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-20 bg-gray-50">
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
      </section>

      <Footer />
    </div>
  );
};

export default Home;