import React from 'react'
import {
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaLaravel, FaPython, FaPhp, FaAws,
  FaMicrosoft, FaGoogle, FaDocker, FaRobot, FaLink,
  FaApple, FaMobileAlt, FaLaptopCode
} from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiFlutter, SiKotlin, SiPytorch, SiTensorflow, SiKubernetes } from 'react-icons/si'

const stacks = {
    Frontend: [
      { name: "React", color: "#61dafb", icon: <FaReact /> },
      { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
      { name: "Vue.js", color: "#42b883", icon: <FaVuejs /> },
      { name: "Angular", color: "#dd0031", icon: <FaAngular /> },
      { name: "TypeScript", color: "#3178c6", icon: <SiTypescript /> },
    ],
    Backend: [
      { name: "Node.js", color: "#339933", icon: <FaNodeJs /> },
      { name: "Laravel", color: "#ff2d20", icon: <FaLaravel /> },
      { name: ".NET", color: "#512bd4", icon: <FaLaptopCode /> },
      { name: "Python", color: "#3776ab", icon: <FaPython /> },
      { name: "PHP", color: "#777bb4", icon: <FaPhp /> },
    ],
    Mobile: [
      { name: "Flutter", color: "#02569b", icon: <SiFlutter /> },
      { name: "React Native", color: "#61dafb", icon: <FaMobileAlt /> },
      { name: "Kotlin", color: "#7f52ff", icon: <SiKotlin /> },
      { name: "Swift", color: "#fa7343", icon: <FaApple /> },
    ],
    "Cloud & DevOps": [
      { name: "AWS", color: "#ff9900", icon: <FaAws /> },
      { name: "Azure", color: "#0078d4", icon: <FaMicrosoft /> },
      { name: "GCP", color: "#4285f4", icon: <FaGoogle /> },
      { name: "Docker", color: "#2496ed", icon: <FaDocker /> },
      { name: "Kubernetes", color: "#326ce5", icon: <SiKubernetes /> },
    ],
    "AI / ML": [
      { name: "OpenAI", color: "#412991", icon: <FaRobot /> },
      { name: "TensorFlow", color: "#ff6f00", icon: <SiTensorflow /> },
      { name: "PyTorch", color: "#ee4c2c", icon: <SiPytorch /> },
      { name: "LangChain", color: "#00d4aa", icon: <FaLink /> },
    ],
}
const TechStack = () => {
  return (
    <>
     <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Technologies We Use</p>
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900 mb-12">
          Built With Industry-Leading Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {Object.entries(stacks).map(([cat, techs]) => (
            <div key={cat}>
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-5 h-0.5 bg-indigo-600 inline-block rounded-full" />{cat}
              </p>
              <div className="flex flex-col gap-2">
                {techs.map(t => (
                  <div key={t.name} className="flex items-center gap-3 px-3 py-2 rounded-lg border border-gray-200 bg-white transition-all duration-300 hover:shadow-sm"
                    style={{ borderColor: 'transparent' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = t.color; e.currentTarget.style.backgroundColor = `${t.color}08`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.backgroundColor = 'white'; }}
                  >
                    <span className="text-lg" style={{ color: t.color }}>{t.icon}</span>
                    <span className="text-sm font-semibold text-gray-700">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default TechStack;