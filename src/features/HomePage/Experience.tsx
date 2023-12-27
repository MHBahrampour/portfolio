import { useRef, useState } from "react";

import { m } from "framer-motion";

import { Tab, Tabs, Typography } from "@mui/material";

import SmoothLink from "@/components/SmoothLink";

import { useHighlightMenuItem } from "@/hooks/useHighlighMenuItem";

import { directionMotion } from "@/utils/motions";

export default function Experience() {
  // Handle tabs change
  const [value, setValue] = useState(0);
  const handleTabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabPanelElements = (
    <>
      <TabPanel value={value} index={0}>
        <div className="grid gap-1">
          <Typography variant="h6">Front-End Developer</Typography>
          <Typography variant="body2">
            Sep 2022 - Apr 2023 · 8 months
          </Typography>
        </div>

        <ul>
          <li>
            Developed Web3 components for company projects, ensuring the
            creation of maintainable code
          </li>
          <li>
            Refactored a variety of products using modern technologies,
            significantly enhancing accessibility and achieving an 18%
            performance boost
          </li>
          <li>
            Collaborated daily with cross-functional teams to guarantee seamless
            project execution
          </li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="grid gap-1">
          <Typography variant="h6">Web Developer</Typography>
          <Typography variant="body2">
            Feb 2020 - Sep 2022 · 2 years 8 month
          </Typography>
        </div>

        <ul>
          <li>
            Developed responsive user interfaces using vanilla JavaScript and
            CSS preprocessors
          </li>
          <li>
            Engineered robust back-end solutions through the development of
            Django applications
          </li>
        </ul>
      </TabPanel>
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
          <Tab label="030labs" {...tabProps(0)} />
          <Tab label="Freelance" {...tabProps(1)} />
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
