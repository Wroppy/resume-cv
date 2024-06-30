import { ReactNode } from "react";
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
    {
      name: "UoaTimetableParser",
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
    <>
      <div>
        A website for flat management specifically made for use within my flat.
        The website allows users to view and manage shared expenses, shopping
        lists, and chores within the flat.
      </div>
      <div>
        Written in Next.js with Typescript, and Sass as the preprocessor for
        CSS, with MongoDB as its database and NextAuth.js for authentication.
      </div>
    </>,
    <>
      <div>
        An application written in Python that takes an HTML page of a University
        of Auckland timetable and parses it into an iCalender file with the help
        from some user input. The calendar file can then be saved to storage and
        imported into a desired calendar app (Google Calendar, Apple Calendar,
        etc).
      </div>
      <div>
        The application uses PyQt6 for its user interface, Beautiful Soup to
        parse the HTML page, and the icalender module to create the desired
        file.
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
