import React from "react";
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  CardMedia,
  useTheme,
} from "@mui/material";
import herobg from "../assets/herobg.png";

const HeroSection = ({ onOpenModal }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: { xs: 1, md: 4 },
        mx: { xs: 2, sm: 8, md: 32 },
        py: 12,
        px: { xs: 2, sm: 4 },
        borderRadius: "20px",
        boxShadow: 4,
        backgroundColor: "#eef5ff",
        overflow: "hidden",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        height: "100%",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: 2,
        }}
      >
        <Typography variant={isMobile ? "h4" : "h3"} component="h1" gutterBottom>
          Let's Learn <br />& Earn
        </Typography>
        <Typography variant="h5" component="p" sx={{ mb: 2 }}>
          Get a chance to win up-to
          <Typography variant="h4" component="p" sx={{ color: "blue" }}>
            Rs. 15,000
          </Typography>
        </Typography>
        <Button variant="contained" color="primary" onClick={onOpenModal} sx={{zIndex: 1}}>
          Refer Now
        </Button>
      </Box>
      <CardMedia
        component="img"
        alt="Refer a course"
        image={herobg}
        sx={{
          position: "absolute",
          bottom: 0,
          right: { xs: "calc(-50% + 120px)", md: 0 },
          height: "auto",
          width: { xs: "80%", md: "50%" },
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default HeroSection;