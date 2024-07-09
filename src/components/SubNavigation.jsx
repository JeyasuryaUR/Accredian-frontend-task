import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const SubNavigation = () => {
  const navItems = [
    { name: 'Refer', id: 'hero-section' },
    { name: 'Benefits', id: 'benefits-section' },
    { name: 'FAQs', id: 'faq-section' },
    { name: 'Support', id: 'contact-section' },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: 0.25,
        maxWidth: 'max-content',
        py: 2,
        px: 4,
        my: 2,
        backgroundColor: '#000000',
        bgcolor: '#e4eefa',
        borderRadius: 5,
        color: 'gray',
        flexWrap: { md: 'wrap' },
        mt: { md: 2 },
        textAlign: 'center',
        lineHeight: 6,
        mx: 'auto',
      }}
    >
      {navItems.map((item, index) => (
        <Box
          key={index}
          sx={{
            my: 'auto',
            color: index === 0 ? 'blue' : 'inherit',
            cursor: 'pointer',
          }}
          onClick={() => scrollToSection(item.id)}
        >
          <Typography variant="body1">{item.name}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SubNavigation;