import { Card } from '@heroui/react'
import React from 'react'
import { MdOutlineBuild, MdOutlineLanguage, MdOutlinePhoneAndroid, MdOutlineScreenshotMonitor } from "react-icons/md";
import { SiPaloaltosoftware } from "react-icons/si";
import { FaCloudUploadAlt, FaRobot, FaUserShield } from "react-icons/fa";
import { TbSettingsCog } from "react-icons/tb";

const services = [
  {
    icon: <MdOutlineScreenshotMonitor />,
    title: "Technology Consulting",
    description:
      "Strategic guidance to help you make the right technology decisions and achieve measurable outcomes.",
    features: [
      "IT Strategy & Roadmap",
      "Digital Transformation",
      "Technology Assessment",
      "Process Automation Consulting",
    ],
  },
  {
    icon: <SiPaloaltosoftware />,
    title: "Custom Software Development",
    description:
      "Scalable, secure and high-performance software tailored to your unique business requirements.",
    features: [
      "Web Application Development",
      "Enterprise Software",
      "SaaS Development",
      "API Development & Integration",
    ],
  },
  {
    icon: <MdOutlinePhoneAndroid />,
    title: "Mobile App Development",
    description:
      "Native & cross-platform mobile apps for iOS & Android that deliver exceptional user experiences.",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-Platform Apps",
      "UI/UX Design for Mobile",
    ],
  },
  {
    icon: <MdOutlineLanguage/>,
    title: "Web & SaaS Development",
    description:
      "Modern, responsive and high-performing web applications that drive growth and engagement.",
    features: [
      "Frontend Development",
      "Backend Development",
      "SaaS Application Development",
      "Progressive Web Apps",
    ],
  },
  {
    icon: <FaRobot />,
    title: "AI & Automation Solutions",
    description:
      "Intelligent solutions that automate processes, improve efficiency and drive innovation.",
    features: [
      "AI Strategy & Consulting",
      "Machine Learning Solutions",
      "Chatbot & NLP Solutions",
      "Business Process Automation",
    ],
  },
  {
    icon: <FaCloudUploadAlt />,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and services to ensure reliability, security and cost efficiency.",
    features: [
      "Cloud Migration",
      "Cloud Architecture",
      "AWS, Azure & GCP",
      "DevOps & CI/CD",
    ],
  },
  {
    icon: <FaUserShield />,
    title: "Cybersecurity Solutions",
    description:
      "Advanced security solutions to protect your data, systems and digital assets.",
    features: [
      "Security Assessment",
      "Penetration Testing",
      "Security Monitoring",
      "Compliance & Risk Management",
    ],
  },
  {
    icon: <TbSettingsCog/>,
    title: "Maintenance & Support",
    description:
      "24/7 support and maintenance to ensure your systems run smoothly and efficiently.",
    features: [
      "Application Maintenance",
      "Bug Fixing & Support",
      "Performance Optimization",
      "24/7 Monitoring",
    ],
  },
];


const ServicesSection = () => {
  return (
<>
    <section className="bg-[#020B18]  py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00D4AA] text-sm font-semibold uppercase tracking-widest mb-2">
            What We Offer
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Our Comprehensive Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border border-white/10 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <Card className="p-5">
                <div className="w-11 h-11 rounded-xl bg-[#00D4AA]/10 flex items-center justify-center text-2xl text-white/80 mb-4 group-hover:bg-[#00D4AA]/20 transition">
                  {service.icon}
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-1 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-[#00D4AA] text-xs">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="text-[#00D4AA] text-sm font-semibold hover:underline">
                  Learn More →
                </button>
              </Card>
            </Card>
          ))}
        </div>
      </div>
    </section>
</>

)
}

export default ServicesSection