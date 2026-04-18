import { FaRocket, FaLightbulb, FaUsers, FaGraduationCap, FaSyncAlt, FaChartLine, FaMobileAlt, FaTools, FaShieldAlt} from 'react-icons/fa';
import "./PlatformFeatures.css";

const features = [
  { icon: <FaRocket />, title: 'AI-Powered Learning', desc: 'Our AI algorithms personalize learning experiences by adapting to each learner\'s pace, style, and preferences.' },
  { icon: <FaLightbulb />, title: 'Interactive Content', desc: 'Engage with immersive content including videos, quizzes, simulations, and gamified elements.' },
  { icon: <FaUsers />, title: 'Collaborative Learning', desc: 'Enhance learning through collaboration with peers, mentors, and industry experts via integrated tools.' },
  { icon: <FaGraduationCap />, title: 'Skill Development', desc: 'Focus on practical skill-building with courses designed to enhance real-world competencies.' },
  { icon: <FaSyncAlt />, title: 'Continuous Learning', desc: 'Stay ahead with continuously updated content evolving alongside industry trends.' },
  { icon: <FaChartLine />, title: 'Career Pathways', desc: 'Track progress and explore career opportunities connecting learning outcomes to real job roles.' },
  { icon: <FaMobileAlt />, title: 'Mobile-First Design', desc: 'Access learning anytime, anywhere with a seamless experience across all devices.' },
  { icon: <FaTools />, title: 'Customizable Interface', desc: 'Personalize your learning environment with a customizable interface aligned with your preferences.' },
  { icon: <FaShieldAlt />, title: 'Secure and Scalable', desc: 'Benefit from a platform prioritizing security and scalability, ensuring your data stays protected.' },
];

export default function PlatformFeatures() {
  return (
    <section className="platform-features">
      {/* <div className="section-header">
        <span className="section-tag">Platform Features</span>
        <h2 className="section-title">Everything You Need to Learn & Grow</h2>
        <p className="section-sub">A complete platform built to deliver personalized, engaging, and effective learning experiences.</p>
      </div> */}
      <div className="feature-grid">
        {features.map((f, i) => (
          <div className="feature-box" key={i}>
            <div className="icon-circle">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
