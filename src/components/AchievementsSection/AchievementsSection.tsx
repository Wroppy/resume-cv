import React from "react";
import "./AchievementsSection.scss";
import { Record } from "../../types/Record";
import RecordComponent from "../RecordComponent/RecordComponent";

const AchievementsSection = () => {
  const achievements: Record[] = [
    {
      name: "Certificate of Distinction (Stats 101)",
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
      name: "Scots College 1st in NCEA level 3 Digital Technology",
      timestamp: "2022",
    },
    {
      name: "College Sport Wellington Division 1 Badminton Champions",
      timestamp: "2021",
    },
  ];
  return (
    <div className="AchievementsSection">
      <div className="AchievementsHeading">Achievements</div>
      <div className="AchievementsContent">
        {achievements.map((record, index) => (
          <RecordComponent key={index} record={record} />
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
