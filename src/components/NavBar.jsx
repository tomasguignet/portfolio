import { Box, Button, Link, Typography } from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

function NavBar() {
  const goToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box
      component="nav"
      display="flex"
      flexDirection="row"
      position="fixed"
      width="100vw"
      justifyContent="space-between"
      top="0px"
      paddingTop="0.7rem"
      paddingBottom="0.7rem"
      bgcolor="primary.main"
      zIndex="1"
    >
      <Box display="flex" flexDirection="row" marginLeft="7.3vw">
        <Button onClick={goToHome}>
          <IntegrationInstructionsIcon color="secondary" />
          <Typography
            marginLeft="0.5rem"
            color="primary.contrastText"
            /* fontFamily="Poppins" */
          >
            Tomas Guignet
          </Typography>
        </Button>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        marginRight="8.33vw"
        alignItems="center"
      >
        <Link
          underline="none"
          marginRight="2rem"
          color="primary.contrastText"
          href="#skills"
          fontSize="1.1rem"
          /* fontFamily="Poppins" */
        >
          <Typography>Skills</Typography>
        </Link>
        <Link
          underline="none"
          marginRight="2rem"
          color="primary.contrastText"
          href="#projects"
          fontSize="1.1rem"
          /* fontFamily="Poppins" */
        >
          <Typography>Projects</Typography>
        </Link>
        <Link
          underline="none"
          color="primary.contrastText"
          href="#contact"
          fontSize="1.1rem"
          /* fontFamily="Poppins" */
        >
          <Typography>Contact</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default NavBar;
