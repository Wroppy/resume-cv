import DescriptiveSection from "../DescriptiveSection/DescriptiveSection";

const SkillsSection = () => {
  const skills = [
    "Effective Time Management",
    "Self-driven and Motivated",
    "Strong Organizational Skills",
    "Critical Thinking Skills",
    "Strong Problem Solving",
    "Touch Typing (95+ WPM)",
    "C Programming",
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Next.js",
    "Python",
    "Typescript",
    "Java",
    "Object Oriented Programming",
    "Matlab",
    "SQL",
    "Web Development",
  ];

  return <DescriptiveSection heading="Skills" contents={skills} />;
};

export default SkillsSection;
