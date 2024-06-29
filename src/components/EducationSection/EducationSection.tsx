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
  ];
  return (
    <div className="EducationSection">
      <div className="EducationHeading">Education</div>
      <div className="EducationContent">
        {education.map((record, index) => (
          <RecordComponent key={index} record={record}>
            <div>
              Bachelor of Software Engineering (Honours) / Bachelor of Science
              (Mathematics)
            </div>
            <div>GPA: 8.80/9.00</div>
          </RecordComponent>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
