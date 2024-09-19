import { useRef, useState } from "react";

import { m } from "framer-motion";
import moment from "moment";

import { Tab, Tabs, Typography } from "@mui/material";

import SmoothLink from "@/components/SmoothLink";

import { useHighlightMenuItem } from "@/hooks/useHighlighMenuItem";

import getMonthsFromNow from "@/utils/getMonthfromNow";
import { directionMotion } from "@/utils/motions";

interface ExperienceData {
  company: string;
  title: string;
  duration: string;
  description: string[];
}

const experienceData: ExperienceData[] = [
  {
    company: "Simorgh",
    title: "Front-End Developer",
    duration: `Dec 2023 - Current · ${getMonthsFromNow(
      moment("2023-12-01"),
    )} months`,
    description: [
      "Utilized cutting-edge technologies like NextAuth.js to develop a real estate investment platform",
      "Developed a user application and dashboard system as part of a comprehensive contract service",
      "Designed and developed a sleek landing-page for Simorgh",
    ],
  },
  {
    company: "030labs",
    title: "Front-End Developer",
    duration: "Sep 2022 - Apr 2023 · 8 months",
    description: [
      "Developed Web3 components for company projects, ensuring the creation of maintainable code",
      "Refactored a variety of products using modern technologies, significantly enhancing accessibility and achieving an 18% performance boost",
      "Developed documentation page, facilitating easy access to essential resources",
      "Collaborated daily with cross-functional teams to guarantee seamless project execution",
    ],
  },
  {
    company: "Freelance",
    title: "Web Developer",
    duration: "Feb 2020 - Sep 2022 · 2 years 8 months",
    description: [
      "Developed responsive user interfaces using vanilla JavaScript and CSS preprocessors",
      "Engineered robust back-end solutions through the development of Django applications",
    ],
  },
];

export default function Experience() {
  // Handle tabs change
  const [value, setValue] = useState(0);
  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabPanelElements = (
    <>
      {experienceData.map((experience, index) => (
        <TabPanel key={index} value={value} index={index}>
          <div className="grid gap-1">
            <Typography variant="h6">{experience.title}</Typography>
            <Typography variant="body2">{experience.duration}</Typography>
          </div>

          <ul>
            {experience.description.map((description, descriptionIndex) => (
              <li key={descriptionIndex}>{description}</li>
            ))}
          </ul>
        </TabPanel>
      ))}
    </>
  );

  // Highlight active menu items
  const sectionRef = useRef(null);
  useHighlightMenuItem(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="dpx grid w-full max-w-6xl gap-4"
    >
      <Typography
        className="heading"
        component={m.h2}
        {...directionMotion("TB", 0)}
      >
        Experience
      </Typography>

      <Typography
        variant="body1"
        component={m.h2}
        {...directionMotion("LR", 1)}
      >
        Shall we start a journey together? Feel free to{" "}
        <SmoothLink link="get-in-touch" className="link">
          contact me
        </SmoothLink>
        .
      </Typography>

      <div>
        <Tabs
          value={value}
          onChange={handleTabsChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="jobs tabs"
          className="[&_.MuiTab-root]:text-base [&_.MuiTab-root]:font-semibold [&_.MuiTab-root]:normal-case"
          component={m.div}
          {...directionMotion("LR", 2)}
        >
          {experienceData.map((experience, index) => (
            <Tab key={index} label={experience.company} {...tabProps(index)} />
          ))}
        </Tabs>

        {/* Tabs content */}
        <m.div {...directionMotion("BT", 3)}>{tabPanelElements}</m.div>
      </div>
    </section>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = ({ children, value, index, ...other }: TabPanelProps) => (
  <div
    role="jobsPanel"
    hidden={value !== index}
    id={`jobsPanel-${index}`}
    aria-labelledby={`jobsPanel-${index}`}
    {...other}
  >
    {value === index && <div className="pt-4">{children}</div>}
  </div>
);

const tabProps = (index: number) => ({
  id: `jobsTab-${index}`,
  "aria-controls": `jobsTab-${index}`,
});
