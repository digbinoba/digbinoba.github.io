// @ts-nocheck

'use client';

import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {
  Breakpoint,
  Theme,
  ThemeProvider,
  useTheme,
  createTheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { motion } from 'framer-motion';
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from '../utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import resumeData from '../contants/jobData';
function UseWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}
function checkIsMobileDevice() {
  const screenSize = UseWidth();

  if (screenSize === 'xs' || screenSize == 'sm') {
    return true;
  } else {
    return false;
  }
}

export default function Experience() {
  const [value, setValue] = React.useState('1');
  const isAMobileDevice = checkIsMobileDevice();

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <section
      id="experience"
      className="relative z-10 bg-neutrals-900 mx-auto w-11/12 max-w-7xl 2xl:w-4/5 flex flex-col items-center justify-center min-h-[60vh] before:inset-x-0 before:h-px before:absolute before:w-4/5 before:top-0 before:-z-10 before:bg-gradient-to-r before:from-transparent before:via-slate-500 before:to-transparent before:max-w-7xl before:mx-auto"
    >
      <motion.div
        initial="hidden"
        variants={slideInFromTop}
        animate="visible"
        className="Welcome-box mb-4 py-[15px] px-[10px] border border-[#7042f88b] opacity-[0.9] mx-auto lg:mx-0"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">Experience</h1>
      </motion.div>
      <motion.div initial="hidden" variants={slideInFromTop} animate="visible">
        <h2 className="mb-4 text-balance text-3xl/tight font-bold  md:text-5xl/tight text-center bg-gradient-to-r from-zinc-50 to-zinc-400 text-transparent bg-clip-text">
          What I have done so far.
        </h2>
      </motion.div>
      <motion.div
        initial="hidden"
        variants={slideInFromRight(0.5)}
        animate="visible"
        className="mb-4"
      >
        <p className="max-w-prose text-base/relaxed font-extralight text-center">
          I've had the privilege of contributing to esteemed organizations
          throughout my career. Explore my professional journey to gain insights
          into my diverse experiences and contributions.
        </p>
      </motion.div>

      <Box
        sx={{
          width: '90%',
          typography: 'body1',
          display: isAMobileDevice ? 'block' : 'flex',
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              orientation={isAMobileDevice ? 'horizontal' : 'vertical'}
              classes={{
                flexContainer: 'flex-row justify-center',
              }}
              sx={{
                color: '#fff',
              }}
            >
              {resumeData.map((job, index) => {
                return (
                  <Tab
                    label={job.expData.company}
                    value={(index + 1).toString()}
                    sx={{
                      color: '#fff',
                    }}
                  />
                );
              })}
            </TabList>
          </Box>
          {resumeData.map((job, index) => {
            return (
              <div className="flex flex-row ">
                <TabPanel
                  value={(index + 1).toString()}
                  key={(index + 1).toString()}
                  sx={{ flexDirection: 'column' }}
                >
                  <h1 className="mb-2 text-lg">
                    {job.expData.position}
                    <span className="text-purple-500">{` @ ${job.expData.company}`}</span>
                  </h1>
                  <h1 className="mb-2 text-sm font-thin">
                    {job.expData.period}
                  </h1>
                  <h1 className="mb-4 font-medium">{job.expData.details}</h1>
                  <>
                    {job.expData.skills && (
                      <ul className="mt-2 flex flex-wrap">
                        {job.expData.skills.map((skill, index) => {
                          return (
                            <li className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-purple-400/20 text-purple-300 px-3 py-1 text-xs font-medium leading-5 text-white">
                                {skill}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                </TabPanel>
              </div>
            );
          })}
        </TabContext>
      </Box>
    </section>
  );
}
