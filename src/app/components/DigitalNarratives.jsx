import { FaBullhorn, FaCogs, FaUsers, FaChartBar } from 'react-icons/fa';

const items = [
  {
    icon: <FaBullhorn />,
    title: 'Get Discovered',
    desc: "Increase your brand's visibility with our white label solution tailored for your L&D requirements.",
  },
  {
    icon: <FaCogs />,
    title: 'Deliver Excellence',
    desc: 'Deliver excellence by offering cutting-edge learning tools and personalized experiences.',
  },
  {
    icon: <FaUsers />,
    title: 'Engage Learners',
    desc: 'Drive learner engagement to new heights with multi-channel notifications and better learning interaction.',
  },
  {
    icon: <FaChartBar />,
    title: 'Insightful Analytics',
    desc: 'Leverage powerful analytics and insights to refine course offerings and enhance learner engagement.',
  },
];

export default function DigitalNarratives() {
  return (
    <section className="digital-section">
      <div className="digital-header">
        <h2>
          Unlocking Seamless <strong>Digital Narratives.</strong>
        </h2>
        <p>
          With our advanced eLearning, accessibility, and content development
          services, we're redefining excellence in learning and reshaping the
          future of education.
        </p>
      </div>

      <div className="digital-card">
        <div className="digital-grid">
          {items.map((item, i) => (
            <div className="digital-item" key={i}>
              <div className="icon-circle">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}