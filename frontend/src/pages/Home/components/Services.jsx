import { Card, Chip } from '@heroui/react'
import React from 'react'
import { FaChartLine, FaCloud, FaCloudUploadAlt, FaCode, FaDatabase, FaMobileAlt, FaPaintBrush, FaRobot, FaShieldAlt } from 'react-icons/fa'

const Services = () => {
  return (
    <>
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
          icon: <FaCloud className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "Mobile Apps",
          desc: "Native and cross-platform mobile applications for iOS and Android.",
          icon: <FaMobileAlt className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "Cloud Solutions",
          desc: "Scalable cloud infrastructure and migration services.",
          icon: <FaCloudUploadAlt className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "UI/UX Design",
          desc: "User-centered design that drives engagement and conversions.",
          icon: <FaPaintBrush className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "AI & Machine Learning",
          desc: "Intelligent automation and data-driven solutions.",
          icon: <FaRobot className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "IT Consulting Services",
          desc: "Strategic technology consulting to accelerate your digital transformation.",
          icon: <FaChartLine className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "DevOps Services",
          desc: "CI/CD, containerization, and infrastructure automation.",
          icon: <FaCode className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "Big Data",
          desc: "Data engineering, analytics, and business intelligence.",
          icon: <FaDatabase className="w-8 h-8 md:w-10 md:h-10" />,
        },
        {
          title: "Cybersecurity Solutions",
          desc: "Security audits, penetration testing, and compliance.",
          icon: <FaShieldAlt className="w-8 h-8 md:w-10 md:h-10" />,
        },
      ].map((service, i) => (
        <Card
          key={i}
          className="border-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          shadow="none"
          radius="lg"
        >
          <div className="p-6">
            {/* Icon with solid cyan color */}
            <span className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-cyan-50 text-cyan-600 mb-2">
              {service.icon}
            </span>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
          <div className="pt-0 px-6 pb-6">
            {/* You can add a "Learn More" button here if needed */}
          </div>
        </Card>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Services