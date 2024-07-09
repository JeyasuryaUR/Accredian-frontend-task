import React from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HeadsetMic } from "@mui/icons-material";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row", 
        justifyContent: "space-between", 
        alignItems: "center", 
        my: isMobile ? 2 : 4,
        mx: isMobile ? 2 : 16, 
        p: isMobile ? 2 : 6, 
        bgcolor: "blue",
        borderRadius: isMobile ? "25px" : "50px", 
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          position: "relative",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "60px" : "80px", 
            height: isMobile ? "60px" : "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "primary.main",
            borderRadius: "24%",
          }}
        >
          <HeadsetMic sx={{ fontSize: isMobile ? 30 : 40, color: "white" }} />
        </Box>
        <Box sx={{ flex: "1", my: "auto", textAlign: isMobile ? "center" : "left" }}> 
          <Typography variant="h5" component="h2" color="white" gutterBottom>
            Want to delve deeper into the program?
          </Typography>
          <Typography variant="subtitle1" color="white">
            Share your details to receive expert insights from our program team!
          </Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          alignSelf: "center",
          bgcolor: "white",
          color: "blue",
          ":hover": {
            bgcolor: "white",
          },
          mt: isMobile ? 2 : 0, 
        }}
      >
        Get in touch
      </Button>
    </Box>
  );
};

export default ContactSection;