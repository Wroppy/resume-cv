import "./MainColumn.scss";
import CvHeading from "../CvHeading/CvHeading";
import CustomDivider from "../CustomDivider/CustomDivider";
import EducationSection from "../EducationSection/EducationSection";
import AchievementsSection from "../AchievementsSection/AchievementsSection";
import VolunteerAndCommunitySection from "../VolunteerAndCommunitySection/VolunteerAndCommunitySection";

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
  </div>
);

export default MainColumn;
