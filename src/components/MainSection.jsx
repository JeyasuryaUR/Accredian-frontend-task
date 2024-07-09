import {useState} from 'react';
import SubNavigation from './SubNavigation';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import ReferralModal from './ReferralModal';
import FAQSection from './FAQSection';
import BenefitsSection from './BenefitsSection';

const MainSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className='px-8'>
      <SubNavigation /> 
      <ReferralModal open={modalOpen} handleClose={handleCloseModal} />
      <div id="hero-section"><HeroSection onOpenModal={handleOpenModal}/></div>
      <div id="benefits-section"><BenefitsSection /></div>
      <div id="faq-section"><FAQSection /></div>
      <div id="contact-section"><ContactSection /></div>
    </div>
  );
};
 
export default MainSection;