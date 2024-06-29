import DescriptiveSection from "../DescriptiveSection/DescriptiveSection";

const SkillsSection = () => {
  const skills = [
    "Effective Time Management",
    "Self-driven and Motivated",
    "Strong Organizational Skills",
    "Problem Solving",
    "C Programming",
    "Javascript",
    "React",
    "Python",
    "Typescript",
    "Java",
    "Object Oriented Programming",
    "Matlab",
    "Web Development",
    "SQL",
    "Touch Typing (95+ WPM)",
  ];

  return <DescriptiveSection heading="Skills" words={skills} />;
};

export default SkillsSection;
