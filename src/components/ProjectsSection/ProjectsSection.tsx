import React, { ReactNode } from "react";
import RecordSection from "../RecordSection/RecordSection";
import { Record } from "../../types/Record";
import RecordComponent from "../RecordComponent/RecordComponent";

const ProjectsSection = () => {
  const projects: Record[] = [
    {
      name: "Odd and Evens Game",
    },
    {
      name: "Risk Map Engine",
    },
    {
      name: "Loded Freezer",
    },
  ];

  const projectDescriptions: ReactNode[] = [
    <>
      <div>
        A command line interface written in Java that allows the user to play
        the Odd and Evens hand game with a bot of varying difficulty. It uses
        the factory, strategy design pattern, and the four basic object-oriented
        programming principles.
      </div>
    </>,
    <>
      <div>
        A command line interface written in Java that allows the user to search
        for information on countries and the shortest path between two countries
        in the Risk game map. It uses custom exception handling, a custom graph
        data structure, and the breadth-first search algorithm.
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
