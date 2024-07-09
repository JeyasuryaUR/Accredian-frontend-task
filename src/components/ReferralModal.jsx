import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';
import axios from 'axios'; // Ensure you have axios installed

const api = axios.create({
    baseURL: 'http://localhost:3000',
  });

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const ReferralModal = ({ open, handleClose }) => {
    const [formValues, setFormValues] = useState({
        referrerName: '',
        referrerEmail: '',
        refereeName: '',
        refereeEmail: '',
        message: '', // Added message field
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormValues(prevState => ({ ...prevState, [id]: value }));
        if (errors[id]) {
            setErrors(prevState => ({ ...prevState, [id]: '' }));
        }
    };

    const validateForm = () => {
        let tempErrors = {};
        // Validation logic remains the same
        // Add or remove validations based on your requirements
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await api.post('/referrals', formValues);
                console.log('Form submitted successfully:', response.data);
                handleClose();
            } catch (error) {
                console.error('Error submitting form:', error);
                // Handle errors (e.g., show error message to the user)
            }
        } else {
            console.log('Form is invalid, show errors:', errors);
        }
    };

    return (
        <Modal
            open={open}
            onClose={() => {
                if (validateForm()) handleClose();
            }}
            aria-labelledby="referral-modal-title"
            aria-describedby="referral-modal-description"
        >
            <Box sx={style}>
                <h2 id="referral-modal-title" className="mb-4">Refer a Course</h2>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                    <TextField
                        id="referrerName"
                        label="Your Name"
                        fullWidth
                        margin="normal"
                        value={formValues.referrerName}
                        onChange={handleChange} />
                    <TextField
                        id="referrerEmail"
                        label="Your Email"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={formValues.referrerEmail}
                        onChange={handleChange} />
                    <TextField
                        id="refereeName"
                        label="Referee's Name"
                        fullWidth
                        margin="normal"
                        value={formValues.refereeName}
                        onChange={handleChange} />
                    <TextField
                        id="refereeEmail"
                        label="Referee's Email"
                        fullWidth
                        margin="normal"
                        type="email"
                        value={formValues.refereeEmail}
                        onChange={handleChange} />
                    <TextField
                        id="message"
                        label="Message (Optional)"
                        fullWidth
                        margin="normal"
                        multiline
                        rows={4}
                        value={formValues.message}
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{mr:2, mt:2}}>
                        Submit
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleClose} sx={{mt:2}}>
                        Close
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default ReferralModal;