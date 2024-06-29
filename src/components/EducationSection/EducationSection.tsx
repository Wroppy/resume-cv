import React from "react";
import "./EducationSection.scss";
import { Record } from "../../types/Record";
import RecordComponent from "../RecordComponent/RecordComponent";

const EducationSection = () => {
  const education: Record[] = [
    {
      name: "University of Auckland",
      timestamp: "2023 - Present",
    },
    {
      name: "Scots College",
      timestamp: "2016 - 2022",
    },
  ];

  const educationContent: React.ReactNode[] = [
    <>
      <div>
        Bachelor of Software Engineering (Honours) / Bachelor of Science
        (Mathematics)
      </div>
      <div>GPA: 8.80/9.00</div>
    </>,
    <>
      <div>NCEA Level 2 and 3 with Excellence Endorsement</div>
      <div>
        Relevant Subjects: Calculus, Physics, Chemistry, Digital Technologies,
        English
      </div>
    </>,
  ];

  return (
    <div className="EducationSection">
      <div className="EducationHeading">Education</div>
      <div className="EducationContent">
        {education.map((record, index) => (
          <RecordComponent key={index} record={record}>
            {educationContent[index]}
          </RecordComponent>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
