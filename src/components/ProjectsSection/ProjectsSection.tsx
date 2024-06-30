import React, { ReactNode } from "react";
import RecordSection from "../RecordSection/RecordSection";
import { Record } from "../../types/Record";
import RecordComponent from "../RecordComponent/RecordComponent";

const ProjectsSection = () => {
  const projects: Record[] = [
    {
      name: "Venue Hire System",
    },
  ];

  const projectDescriptions: ReactNode[] = [
    <>
      <div>
        A command line interface allows the user to create and manage venues and
        their bookings. The program is written in Java and demonstrates
        object-oriented programming principles, such as encapsulation,
        inheritance and polymorphism.
      </div>
    </>,
  ];

  return (
    <RecordSection heading="Projects">
      {projects.map((record, index) => (
        <RecordComponent key={index} record={record}>
          {projectDescriptions[index]}
        </RecordComponent>
      ))}
    </RecordSection>
  );
};

export default ProjectsSection;
