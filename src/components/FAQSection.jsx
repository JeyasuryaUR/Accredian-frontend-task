import React, { useState } from "react";
import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const FAQSection = () => {
  const theme = useTheme();
  const [selectedSection, setSelectedSection] = useState("Eligibility");

  const faqs = {
    Eligibility: [
      {
        question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
      },
    ],
    "How to Use": [],
    "Terms & Conditions": [],
  };

  return (
    <Box sx={{
      flexGrow: 1,
      mt: 4,
      my: { xs: 2, md: 4 },
      mx: { xs: 2, sm: 8, md: 16 },
      py: 4,
      px: { xs: 2, sm: 4, md: 4 },
    }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Frequently Asked Questions
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <List>
            {Object.keys(faqs).map((section) => (
              <ListItem disablePadding key={section}>
                <ListItemButton
                  selected={selectedSection === section}
                  onClick={() => setSelectedSection(section)}
                >
                  <ListItemText primary={section} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box sx={{ p: 2 }}>
            {faqs[selectedSection].length > 0 ? (
              faqs[selectedSection].map((faq, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {faq.question}
                  </Typography>
                  <Typography>{faq.answer}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No data available.</Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;