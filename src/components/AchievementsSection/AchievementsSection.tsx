import "./AchievementsSection.scss";
import { Record } from "../../types/Record";
import RecordComponent from "../RecordComponent/RecordComponent";
import RecordSection from "../RecordSection/RecordSection";

const AchievementsSection = () => {
  const achievements: Record[] = [
    {
      name: "Certificate of Distinction (Stats 101, Maths 162)",
      timestamp: "2024",
    },
    {
      name: "Dean's Honours List",
      timestamp: "2023",
    },
    {
      name: "Certificate of Distinction (Maths 130)",
      timestamp: "2023",
    },
    {
      name: "Faculty of Science High Achiever Undergraduate Entry Scholarship",
      timestamp: "2022",
    },
    {
      name: "Scots College 1st in NCEA Level 3 Digital Technology",
      timestamp: "2022",
    },
    {
      name: "College Sport Wellington Division 1 Badminton Champions",
      timestamp: "2021",
    },
  ];
  return (
    <RecordSection heading="Achievements">
      {achievements.map((record, index) => (
        <RecordComponent key={index} record={record} bold={false} />
      ))}
    </RecordSection>
  );
};

export default AchievementsSection;
