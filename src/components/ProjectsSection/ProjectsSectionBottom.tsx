import { ReactNode } from "react";
import { Record } from "../../types/Record";
import RecordComponent from "../RecordComponent/RecordComponent";

const ProjectsSectionBottom = () => {
  const projects: Record[] = [
    {
      name: "Loded Freezer",
    },
    {
      name: "UoaTimetableParser",
    },
  ];

  const desc: ReactNode[] = [
    <>
      <div>
        "Loded Freezer" is a website for flat management specifically made for use within my flat.
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
        parse the HTML page, and the iCalender module to create the desired
        file.
      </div>
    </>,
  ];

  return (
    <div style={{ flexDirection: "column", display: "flex", gap: "2mm" }}>
      {projects.map((project, index) => (
        <RecordComponent key={index} record={project}>
          {desc[index]}
        </RecordComponent>
      ))}
    </div>
  );
};

export default ProjectsSectionBottom;
