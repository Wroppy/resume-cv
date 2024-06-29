import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import CustomDivider from "./components/CustomDivider/CustomDivider";
import CvHeading from "./components/CvHeading/CvHeading";
import EducationSection from "./components/EducationSection/EducationSection";


export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#1e88e5",
    },
    secondary: {
      main: "#f50057",
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={createTheme(themeOptions)}>
      <div className="CV">
        <CvHeading />
        <CustomDivider />
        <EducationSection />
      </div>
    </ThemeProvider>
  );
}

export default App;
