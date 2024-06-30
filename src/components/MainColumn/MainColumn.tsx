import "./MainColumn.scss";
import CvHeading from "../CvHeading/CvHeading";
import CustomDivider from "../CustomDivider/CustomDivider";
import EducationSection from "../EducationSection/EducationSection";
import AchievementsSection from "../AchievementsSection/AchievementsSection";
import VolunteerAndCommunitySection from "../VolunteerAndCommunitySection/VolunteerAndCommunitySection";
import PersonalStatementSection from "../PersonalStatementSection/PersonalStatementSection";

const MainColumn = () => (
  <div className="MainColumn">
    <CvHeading />
    <CustomDivider />
    <PersonalStatementSection />
    <CustomDivider />
    <EducationSection />
    <CustomDivider />
    <AchievementsSection />
    <CustomDivider />
    <VolunteerAndCommunitySection />
    <CustomDivider />
  </div>
);

export default MainColumn;
