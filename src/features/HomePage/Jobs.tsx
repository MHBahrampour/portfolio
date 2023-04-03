import { useState } from "react";

import SmoothLink from "@/components/SmoothLink";
import { motion } from "framer-motion";
import moment from "moment";

import { Tab, Tabs, Typography } from "@mui/material";

import getMonthsFromNow from "@/utils/getMonthfromNow";

export default function Jobs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <motion.section
      id="jobs"
      className="dpx grid gap-4"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <Typography component="h2" className="heading">
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
        >
          <Tab label="Innovation Berlin" {...tabProps(0)} />
          <Tab label="Your Company ?!" {...tabProps(1)} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <div className="grid gap-1">
            <Typography variant="h6">Junior Front-end Developer</Typography>
            <Typography variant="body2">
              Sep 2022 - Present · {getMonthsFromNow(moment("2022-08-01"))}{" "}
              months
            </Typography>
          </div>

          <ul>
            <li>Write modern and maintainable code for company projects.</li>
            <li>
              Worked with technologies such as React, TypeScript, Next.js and
              MUI.
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
      </div>
    </motion.section>
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
