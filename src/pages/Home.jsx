import NavBar from "../components/NavBar";
import { Box, Button, Typography } from "@mui/material";
import Cv from "../../public/CV+TOMAS+GUIGNET+COMPLETO.pdf";
import github from "../../public/icons8-github-96.png";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <Box
      bgcolor="primary.main"
      height="100vh"
      boxShadow="inset 0 -15px 16px 20 rgba(0, 0, 0, 0.3)"
    >
      <NavBar />
      <Box
        className="bodyHome"
        paddingTop="9rem"
        paddingLeft="19.8vw"
        display="flex"
        flexDirection="row"
      >
        <Box>
          <Box>
            <Typography variant="h6" color="primary.contrastText">
              {"Hi, I'm"}
            </Typography>
            <Typography variant="h3" color="secondary" marginBottom="2rem">
              FULLSTACK DEVELOPER
            </Typography>
          </Box>
          <Typography
            width="42rem"
            marginBottom="1rem"
            color="primary.contrastText"
          >
            Being a young professional dedicated to technology and web
            development, I tirelessly seek to understand and navigate the
            challenges of the tech sector.
          </Typography>
          <Typography
            width="42rem"
            marginBottom="1rem"
            color="primary.contrastText"
          >
            My technical toolkit is rich with experience in backend development
            using Node.js, alongside frontend development with React. I am also
            proficient in SQL databases, having worked extensively with MySQL
            and PostgreSQL.
          </Typography>
          <Typography
            width="42rem"
            marginBottom="4rem"
            color="primary.contrastText"
          >
            I am currently seeking opportunities that allow me to further
            develop my skills and gain new experiences in the tech industry. My
            goal is to contribute to innovative projects that challenge me and
            expand my knowledge of web development and software engineering
          </Typography>
          <Box>
            <Button
              href={Cv}
              download="Cv-TomasGuignet.pdf"
              style={{
                width: "20rem",
                height: "3rem",
              }}
              color="secondary"
              variant="contained"
            >
              CV
            </Button>
            <Button
              href="https://github.com/tomasguignet"
              style={{
                width: "3.1rem",
                height: "3rem",
                marginLeft: "4rem",
                minWidth: "3rem",
                borderRadius: "7rem",
              }}
              color="secondary"
              variant="contained"
            >
              <GitHubIcon />
              {/* <img src={github} style={{ width: "2rem" }} alt="github" /> */}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
