import { Box, Dialog, Typography } from "@mui/material";
import iCare from "../../public/projects/iCare-Image.png";
import HenryFood from "../../public/projects/HenryFood-Image.png";
import Ubuntu from "../../public/projects/Ubuntu-Image.png";
import { useState } from "react";
import GitHub from "@mui/icons-material/GitHub";

function Projects() {
  const [projects, setProjects] = useState({
    henryFood: false,
    iCare: false,
    ubuntu: false,
  });
  const handleProject = (project) => {
    setProjects({ ...projects, [project]: !projects[project] });
  };
  const handleClose = (project) => {
    setProjects({ ...projects, [project]: false });
  };
  return (
    <Box
      id="projects"
      display="flex"
      flexDirection="column"
      height="100vh"
      bgcolor="primary.main"
    >
      <Typography
        marginTop="6rem"
        marginBottom="2rem"
        variant="h4"
        color="secondary"
        alignSelf="center"
      >
        Projects
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        paddingX="14%"
        flexWrap="wrap"
      >
        <Box
          className="project"
          display="flex"
          flexDirection="column"
          marginBottom="3rem"
          marginRight="4rem"
          bgcolor="primary.contrastText"
          width="22rem"
          /* alignItems="center" */
          paddingBottom="1rem"
          borderRadius="0.8rem"
          onClick={() => handleProject("henryFood")}
        >
          <Typography variant="h6" marginLeft="1.3rem" marginTop="0.1rem">
            Henry Food
          </Typography>
          <Typography variant="body1" marginLeft="1.6rem">
            01/2023
          </Typography>
          <img
            src={HenryFood}
            alt="Henry-Food"
            style={{
              width: "20vw",
              margin: "auto",
              borderRadius: "0.3rem",
            }}
          />
        </Box>
        <Dialog
          open={projects.henryFood}
          onClose={() => handleClose("henryFood")}
        >
          <Box
            height="10rem"
            bgcolor="primary.contrastText"
            paddingX="1rem"
            paddingY="0.7rem"
            display="flex"
            flexDirection="column"
          >
            <Typography marginBottom="1.2rem">
              An application that retrieves information about food recipes from
              an external API, allowing filtering by name, diet, and sorting by
              rating or name. Additionally, users can create new recipes, modify
              existing ones, or delete them from the database.
            </Typography>
            <Box display="flex" flexDirection="row">
              <Typography marginRight="0.7rem">React</Typography>
              <Typography marginRight="0.7rem">Redux</Typography>
              <Typography marginRight="0.7rem">Node js</Typography>
              <Typography marginRight="0.7rem">Express js</Typography>
              <Typography marginRight="0.7rem">Sequelize</Typography>
              <a
                href="https://github.com/tomasguignet/Henry-Pi"
                style={{ marginLeft: "2rem" }}
              >
                <GitHub />
              </a>
            </Box>
          </Box>
        </Dialog>
        <Box
          className="project"
          display="flex"
          flexDirection="column"
          marginBottom="3rem"
          bgcolor="primary.contrastText"
          width="22rem"
          paddingBottom="1rem"
          borderRadius="0.8rem"
          onClick={() => handleProject("iCare")}
        >
          <Typography variant="h6" marginLeft="1.3rem" marginTop="0.1rem">
            iCare
          </Typography>
          <Typography variant="body1" marginLeft="1.6rem">
            02/2023
          </Typography>
          <img
            src={iCare}
            alt="iCare"
            style={{
              width: "20vw",
              margin: "auto",
              borderRadius: "0.3rem",
            }}
          />
        </Box>
        <Dialog
          maxWidth="40vw"
          open={projects.iCare}
          onClose={() => handleClose("iCare")}
        >
          <Box
            height="16rem"
            maxWidth="37vw"
            overflow="hidden"
            bgcolor="primary.contrastText"
            paddingX="1rem"
            paddingY="0.7rem"
            display="flex"
            flexDirection="column"
          >
            <Typography fontSize="0.95rem" marginBottom="1.5rem">
              An online clinic management application offers various features
              for registered users including scheduling appointments, virtual
              consultations, and maintaining medical records. Users can also
              view profiles, track appointments, and leave doctor reviews, with
              non-registered users accessing reviews and a chatbot for FAQs.
              Doctors manage their schedules, handle emergencies, and interact
              with patient feedback. Administrators control user roles, manage
              content, and handle subscriptions, ensuring comprehensive clinic
              operations online
            </Typography>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
              <Typography variant="body2" marginRight="0.7rem">
                React
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                Redux
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                Node js
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                Express js
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                Sequelize
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                PostgreSQL
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                Material Ui
              </Typography>
              <Typography variant="body2" marginRight="0.7rem">
                Firebase
              </Typography>
              <Typography
                variant="body2"
                marginTop="0.7rem"
                marginRight="0.7rem"
              >
                Cloudinary
              </Typography>
              <Typography
                variant="body2"
                marginTop="0.7rem"
                marginRight="0.7rem"
              >
                Mercado Pago Api
              </Typography>
              <a
                style={{ marginTop: "0.4rem", marginLeft: "3rem" }}
                href="https://github.com/ezequielnores/PF-GRUPO-2"
              >
                <GitHub />
              </a>
            </Box>
          </Box>
        </Dialog>
        <Box
          className="project"
          display="flex"
          flexDirection="column"
          bgcolor="primary.contrastText"
          width="22rem"
          /* alignItems="center" */
          paddingBottom="1rem"
          borderRadius="0.8rem"
          onClick={() => handleProject("ubuntu")}
        >
          <Typography variant="h6" marginLeft="1.3rem" marginTop="0.1rem">
            Ubuntu App
          </Typography>
          <Typography variant="body1" marginLeft="1.6rem">
            03/2024
          </Typography>
          <img
            src={Ubuntu}
            alt="Ubuntu-App"
            style={{
              width: "12vw",
              borderRadius: "0.3rem",
              margin: "auto",
            }}
          />
        </Box>
        <Dialog
          maxWidth="38vw"
          open={projects.ubuntu}
          onClose={() => handleClose("ubuntu")}
        >
          <Box
            height="10rem"
            maxWidth="38vw"
            bgcolor="primary.contrastText"
            paddingX="1rem"
            paddingY="0.7rem"
            display="flex"
            flexDirection="column"
          >
            <Typography
              fontSize="0.9rem"
              marginBottom="1.5rem"
              overflow="hidden"
            >
              It is an app designed to display micro-enterprise ideas aimed at
              creating environmental and social impact, attracting investors
              interested in contributing to this change. Users can explore
              projects, read interesting posts, and contact entrepreneurs.
              Administrators are able to analyze interaction statistics, manage
              projects and posts, and review contact requests
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flexDirection="row"
                flexWrap="wrap"
                alignContent="center"
              >
                <Typography variant="body2" marginRight="0.7rem">
                  React
                </Typography>
                <Typography variant="body2" marginRight="0.7rem">
                  Redux
                </Typography>
                <Typography variant="body2" marginRight="0.7rem">
                  Material Ui
                </Typography>
                <Typography variant="body2" marginRight="0.7rem">
                  Sass
                </Typography>
                <Typography variant="body2" marginRight="0.7rem">
                  Axios
                </Typography>
                <Typography variant="body2" marginRight="0.7rem">
                  Firebase
                </Typography>
              </Box>
              <a>
                <GitHub style={{ marginRight: "10rem" }} />
              </a>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
}

export default Projects;
