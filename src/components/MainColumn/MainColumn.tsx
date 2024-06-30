import React from "react";
import "./MainColumn.scss";
import CvHeading from "../CvHeading/CvHeading";
import CustomDivider from "../CustomDivider/CustomDivider";
import EducationSection from "../EducationSection/EducationSection";
import AchievementsSection from "../AchievementsSection/AchievementsSection";
import VolunteerAndCommunitySection from "../VolunteerAndCommunitySection/VolunteerAndCommunitySection";
import SkillsSection from "../SkillsSection/SkillsSection";
import HobbiesAndInterests from "../HobbiesAndInterests/HobbiesAndInterests";

const MainColumn = () => (
  <div className="MainColumn">
    <CvHeading />
    <CustomDivider />
    <EducationSection />
    <CustomDivider />
    <AchievementsSection />
    <CustomDivider />
    <VolunteerAndCommunitySection />
    <CustomDivider />
    <SkillsSection />
    <CustomDivider />
    <HobbiesAndInterests />
  </div>
);

export default MainColumn;
