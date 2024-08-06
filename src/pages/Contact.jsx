import React from "react";
import { Box, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <Box
      id="contact"
      bgcolor="primary.dark"
      height="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        marginTop="6rem"
        marginBottom="2rem"
        variant="h4"
        color="secondary"
      >
        Contact
      </Typography>
      <Box
        bgcolor="primary.main"
        display="flex"
        flexDirection="column"
        paddingX="2rem"
        paddingY="4rem"
        marginTop="3rem"
        borderRadius="0.8rem"
      >
        <Box
          bgcolor="secondary.main"
          width="30vw"
          height="3rem"
          borderRadius="0.8rem"
          textAlign="center"
          alignContent="center"
          marginBottom="2rem"
        >
          <Typography color="primary.contrastText">
            tomasguignet9@gmail.com
          </Typography>
        </Box>
        <Box
          bgcolor="secondary.main"
          width="30vw"
          height="3rem"
          borderRadius="0.8rem"
          textAlign="center"
          alignContent="center"
          marginBottom="2rem"
        >
          <Typography color="primary.contrastText">+5492613748269</Typography>
        </Box>
        <Button
          href="https://www.linkedin.com/in/tomasguignet/"
          style={{
            width: "30vw",
            height: "3rem",
            borderRadius: "0.8rem",
            marginBottom: "2rem",
          }}
          color="secondary"
          variant="contained"
        >
          <LinkedInIcon />
          {/* <img src={github} style={{ width: "2rem" }} alt="github" /> */}
        </Button>
        <Button
          href="https://github.com/tomasguignet"
          style={{
            width: "30vw",
            height: "3rem",
            borderRadius: "0.8rem",
          }}
          color="secondary"
          variant="contained"
        >
          <GitHubIcon />
          {/* <img src={github} style={{ width: "2rem" }} alt="github" /> */}
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
