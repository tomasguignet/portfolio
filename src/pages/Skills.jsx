import { Box, css, Typography } from "@mui/material";
/* import skills from "../utils/Skills.json"; */
import html5 from "../../public/icons/icons8-html5-96.png";
import ccs3 from "../../public/icons/icons8-css3-96.png";
import javascript from "../../public/icons/icons8-javascript-96.png";
import react from "../../public/icons/icons8-react-96.png";
import redux from "../../public/icons/icons8-redux-96.png";
import next from "../../public/icons/nextJS.svg";
import node from "../../public/icons/icons8-node-96.png";
import express from "../../public/icons/icons8-express-96.png";
import mysql from "../../public/icons/icons8-mysql-96.png";
import postgresql from "../../public/icons/icons8-postgresql-96.png";
function Skills() {
  const skills = [
    { name: "HTML5", image: html5 },
    { name: "CSS", image: ccs3 },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Redux", image: redux },
    { name: "Next", image: next },
    { name: "Node", image: node },
    { name: "Express", image: express },
    { name: "MySQL", image: mysql },
    { name: "PostgreSQL", image: postgresql },
  ];
  return (
    <Box
      id="skills"
      bgcolor="primary.dark"
      height="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      /* boxShadow="inset 0 8px 16px 0 rgba(0, 0, 0, 0.6)" */
    >
      <Typography
        marginTop="6rem"
        marginBottom="2rem"
        variant="h4"
        color="secondary"
      >
        My Skills
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        marginLeft="1.5rem"
        marginTop="2rem"
        flexWrap="wrap"
        justifyContent="center"
        paddingX="15rem"
      >
        {skills.map((skill, id) => (
          <div key={id} className="Skill-Card">
            <Box
              display="flex"
              flexDirection="column"
              marginRight="6rem"
              marginBottom="4rem"
              paddingX="1rem"
              paddingY="0.3rem"
              borderRadius="1rem"
              alignItems="center"
              bgcolor="#1a1a1b"

              /*           width="8vw" */
            >
              <img
                style={{ width: "5vw", transform: "none" }}
                src={skill.image}
                alt={skill.name}
              />
              <Typography
                fontSize="0.9rem"
                color="primary.contrastText"
                style={{ transform: "none" }}
              >
                {skill.name}
              </Typography>
            </Box>
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;
