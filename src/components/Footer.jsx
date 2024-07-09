import React from "react";
import { Box, Button, Container, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/logo.png";
import { Add } from "@mui/icons-material";

const socialIcons = [
  { icon: <FacebookIcon />, alt: "Facebook" },
  { icon: <TwitterIcon />, alt: "Twitter" },
  { icon: <LinkedInIcon />, alt: "LinkedIn" },
  { icon: <InstagramIcon />, alt: "Instagram" },
  { icon: <YouTubeIcon />, alt: "YouTube" },
];

const footerLinks = [
  "About",
  "Career",
  "Blog",
  "Admission Policy",
  "Referral Policy",
  "Privacy Policy",
  "Terms Of Service",
  "Master FAQs",
];

const programs = [
  "Data Science & AI",
  "Product Management",
  "Business Analytics",
  "Digital Transformation",
  "Business Management",
  "Project Management",
  "Strategy & Leadership",
  "Senior Management",
  "Fintech",
];

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 3 }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <img
            src={logo}
            alt="Company logo"
            style={{ width: "100%", maxWidth: "120px" }}
          />
          <Box>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Schedule 1-on-1 Call Now
            </Button>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Speak with our Learning Advisor
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Programs
            </Typography>
            {programs.map((program, index) => (
              <Box key={index} display="flex" justifyContent="space-between" alignItems="center" gap={2} sx={{width: '60%'}}>
                <Typography variant="body1">
                  {program}
                </Typography>
                <Add fontSize="small" />
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email us (For Data Science Queries): admissions@accredian.com
            </Typography>
            <Typography variant="body2">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Follow Us
            </Typography>
            <Box>
              {socialIcons.map((icon, index) => (
                <Link key={index} href="#" color="inherit" sx={{ mr: 1 }}>
                  {icon.icon}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Accredian
            </Typography>
            {footerLinks.map((link, index) => (
              <Typography key={index} variant="body1">
                {link}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 5 }}
        >
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
