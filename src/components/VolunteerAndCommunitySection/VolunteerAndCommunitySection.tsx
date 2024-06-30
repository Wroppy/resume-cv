import React from "react";
import RecordSection from "../RecordSection/RecordSection";
import RecordComponent from "../RecordComponent/RecordComponent";
import { Record } from "../../types/Record";

const VolunteerAndCommunitySection = () => {
  const volunteerAndCommunity: Record[] = [
    {
      name: "University of Auckland Clubs",
      timestamp: "2024",
    },
    {
      name: "Scots College Team 2 Badminton Captain",
      timestamp: "2021 - 2022",
    },
    {
      name: "Scots College Lunch Time Tutor",
      timestamp: "2022",
    },
  ];

  const volunteerAndCommunityContent: React.ReactNode[] = [
    <>
      <div>
        A member of the Thai Student Association, SESA (Software Engineering
        Student Association), DEVS Society, WDCC (Web Development & Consulting
        Club), AUES (Auckland University Engineering Society), Cantonese Student
        Society of Auckland, and JAM+ (Japanese Auckland Meetup+).
      </div>
    </>,
    <>
      <div>
        Led the team to a 1st place finish in the Wellington Secondary Schools
        Division 1 badminton competition in 2021, and a 2nd place finish in
        2022.
      </div>
    </>,
    <>
      <div>
        Tutored Year 12 students in Mathematics, Chemistry, and Physics to help
        them achieve their academic goals.
      </div>
    </>,
  ];

  return (
    <RecordSection heading="Volunteer & Community">
      {volunteerAndCommunity.map((record, index) => (
        <RecordComponent key={index} record={record}>
          {volunteerAndCommunityContent[index]}
        </RecordComponent>
      ))}
    </RecordSection>
  );
};

export default VolunteerAndCommunitySection;
