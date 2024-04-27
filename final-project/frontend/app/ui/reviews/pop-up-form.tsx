import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';

const AddReviewPopup: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [hotelName, setHotelName] = useState('');
  const [cityName, setCityName] = useState('');
  // const addRecord = useStore((state) => state.addRecord);

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const reviewToSend = { userName, title, rating, text, date, hotelName, cityName };
      const response = await axios.post('http://localhost:3000/api/reviews', reviewToSend);
      const savedRecord = response.data;
      // addRecord(savedRecord);
      setOpen(false);
      resetForm();
    } catch (error) {
      console.error('Failed to add record:', error);
    }
  };

  // Function to reset the form fields
  const resetForm = () => {
    setUserName('');
    setTitle('');
    setRating(0);
    setText('');
    setDate(new Date().toISOString().split('T')[0]);
    setHotelName('');
    setCityName('');
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>Add Review</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Review</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {/* Add the rest of the form fields here */}
            {/* ... */}
            <TextField
              margin="dense"
              id="hotelName"
              label="Hotel Name"
              type="text"
              fullWidth
              variant="outlined"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="cityName"
              label="City Name"
              type="text"
              fullWidth
              variant="outlined"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
            />
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Add</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddReviewPopup;