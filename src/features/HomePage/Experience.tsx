import { useState } from "react";

import SmoothLink from "@/components/SmoothLink";
import { m } from "framer-motion";

import { Tab, Tabs, Typography } from "@mui/material";

import { directionMotion } from "@/utils/motions";

export default function Experience() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabPanelElements = (
    <>
      <TabPanel value={value} index={0}>
        <div className="grid gap-1">
          <Typography variant="h6">Junior Front-end Developer</Typography>
          <Typography variant="body2">
            Sep 2022 - Apr 2023 · 8 months
          </Typography>
        </div>

        <ul>
          <li>
            Write responsible and maintainable code including Web3 components
            for company projects.
          </li>
          <li>
            Refactored Metaroom’s front-end using modern technologies and other
            optimizations.
          </li>
          <li>
            Communicate with teams of engineers, designers and developers on a
            daily basis.
          </li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="grid gap-1">
          <Typography variant="h6">Junior Full-stack Developer</Typography>
          <Typography variant="body2">
            Feb 2020 - Sep 2022 · 2 years 8 month
          </Typography>
        </div>

        <ul>
          <li>
            Beginning to learn and implement real world projects after
            university.
          </li>
          <li>
            Designing and implementing responsive web applications using Django,
            HTML, CSS and Javascript for clients.
          </li>
        </ul>
      </TabPanel>
    </>
  );

  return (
    <section id="experience" className="dpx grid w-full max-w-6xl gap-4">
      <Typography
        component={m.h2}
        className="heading"
        {...directionMotion("TB", 0)}
      >
        Experience
      </Typography>

      <Typography variant="body1">
        Shall we start a journey together? Feel free to{" "}
        <SmoothLink link="get-in-touch" className="link">
          contact me
        </SmoothLink>
        .
      </Typography>

      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="jobs tabs"
          className="[&_.MuiTab-root]:text-base [&_.MuiTab-root]:font-semibold [&_.MuiTab-root]:normal-case"
          component={m.div}
          {...directionMotion("LR", 1)}
        >
          <Tab label="030labs" {...tabProps(0)} />
          <Tab label="Freelance" {...tabProps(1)} />
        </Tabs>

        {/* Tabs content */}
        <m.div {...directionMotion("BT", 2)}>{tabPanelElements}</m.div>
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
