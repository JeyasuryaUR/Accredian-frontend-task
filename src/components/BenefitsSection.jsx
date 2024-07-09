import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  SvgIcon,
  useMediaQuery,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const benefits = [
  {
    title: "Earn Together",
    description:
      "Invite friends and earn rewards together. The more you refer, the more you earn!",
    icon: <GroupAddIcon sx={{ fontSize: 60, color: "primary.main" }} />,
    imageIcon: <GroupAddIcon sx={{ fontSize: 120, color: "primary.main" }} />,
  },
  {
    title: "Exclusive Rewards",
    description:
      "Unlock exclusive rewards and bonuses with each successful referral.",
    icon: <StarRateIcon sx={{ fontSize: 60, color: "secondary.main" }} />,
    imageIcon: <LoyaltyIcon sx={{ fontSize: 120, color: "secondary.main" }} />,
  },
  {
    title: "Instant Cash",
    description:
      "Get instant cash rewards directly to your account with each referral.",
    icon: <MonetizationOnIcon sx={{ fontSize: 60, color: "success.main" }} />,
    imageIcon: (
      <AccountBalanceWalletIcon sx={{ fontSize: 120, color: "success.main" }} />
    ),
  },
];

const BenefitsSection = () => {
  const isMobile = useMediaQuery("(max-width:960px)");
  return (
    <Box
      sx={{
        flexGrow: 1,
        mx: isMobile ? 2 : 4,
        py: 4,
        px: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        textAlign="center"
        color="text.primary"
        sx={{ mb: 4 }}
      >
        Referral Program Benefits
      </Typography>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
                overflow: "visible",
              }}
            >
              <Box sx={{ p: 3, textAlign: "center" }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography variant="body1">{benefit.description}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: "auto",
                  p: 2,
                }}
              >
                <SvgIcon
                  component={benefit.imageIcon.type}
                  sx={benefit.imageIcon.props.sx}
                />
              </Box>
              <CardContent
                sx={{
                  flexGrow: 1,
                  px: 3,
                  py: 2,
                  mt: "auto",
                  backgroundColor: "#e0f7fa",
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  Dive into the details and start referring today!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitsSection;
