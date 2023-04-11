import { useEffect, useRef, useState } from "react";

import SmoothLink from "@/components/SmoothLink";
import { m, useInView } from "framer-motion";
import moment from "moment";

import { Tab, Tabs, Typography, useTheme } from "@mui/material";

import getMonthsFromNow from "@/utils/getMonthfromNow";
import { highlightMenuItem } from "@/utils/highlightMenuItem";
import { directionMotion } from "@/utils/motions";

export default function Jobs() {
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
            Sep 2022 - Present · {getMonthsFromNow(moment("2022-08-01"))} months
          </Typography>
        </div>

        <ul>
          <li>Write modern and maintainable code for company projects.</li>
          <li>
            Worked with technologies such as React, TypeScript, Next.js and MUI.
          </li>
          <li>
            Communicate with teams of engineers, designers and developers on a
            daily basis.
          </li>
        </ul>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Typography variant="body1">
          I’m currently looking for better positions, if you are interested in
          hiring me, please{" "}
          <SmoothLink link="get-in-touch" className="link">
            contact me
          </SmoothLink>
          .
        </Typography>
      </TabPanel>
    </>
  );

  const ref = useRef(null);
  highlightMenuItem(ref, "jobs-menu");

  return (
    <section ref={ref} id="jobs" className="dpx grid gap-4">
      <Typography
        component={m.h2}
        className="heading"
        {...directionMotion("TB", 0)}
      >
        Jobs
      </Typography>

      <div className="w-full max-w-4xl">
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
          <Tab label="Innovation Berlin" {...tabProps(0)} />
          <Tab label="Your Company ?!" {...tabProps(1)} />
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
