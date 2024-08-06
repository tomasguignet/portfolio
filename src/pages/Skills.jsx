import { Box, Typography } from "@mui/material";
import skills from "../utils/Skills.json";
function Skills() {
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
