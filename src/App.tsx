import "./App.css";
import CustomDivider from "./components/CustomDivider/CustomDivider";
import CvHeading from "./components/CvHeading/CvHeading";
import EducationSection from "./components/EducationSection/EducationSection";
import AchievementsSection from "./components/AchievementsSection/AchievementsSection";
import VolunteerAndCommunitySection from "./components/VolunteerAndCommunitySection/VolunteerAndCommunitySection";
import SkillsSection from "./components/SkillsSection/SkillsSection";
import HobbiesAndInterests from "./components/HobbiesAndInterests/HobbiesAndInterests";

function App() {
  return (
    <div className="CV">
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
}

export default App;
