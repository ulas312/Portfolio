import axios from 'axios';
import React, { useState } from 'react';
import '../../styles/EmailForm.scss';

import { Grid, Card, CardContent, Typography } from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EmailForm() {
  const [inputs, setInputs] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const notify = () => toast.success('Message sent!');

  const handleOnSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      url: 'https://formbold.com/s/35KY8',
      data: inputs,
    })
      .then((r) => {
        console.log('hello');
      })
      .catch((r) => {
        console.log('error');
      });
  };

  return (
    <div className='container'>
      <Card
        sx={{ width: 500, height: 600, borderRadius: 6 }}
        style={{ backgroundColor: '#383838' }}
      >
        <Grid
          item
          xs={10}
          md={10}
          container
          spacing={0}
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{
            mt: 4,
          }}
        >
          <Typography
            variant='h3'
            component='div'
            color='text.secondary'
            sx={{ fontSize: 75, color: 'primary.main' }}
          >
            Contact me
          </Typography>
          <Typography
            gutterBottom
            className='card-text'
            variant='h5'
            color='text.secondary'
            align='center'
            sx={{ fontSize: 22, color: 'primary.main' }}
            style={{ fontFamily: 'Aleo' }}
          >
            I'm currently seeking new opportunities. Feel free to say hello and
            get in touch with me!
          </Typography>
          <CardContent sx={{ width: 500, height: 600 }}>
            <form onSubmit={handleOnSubmit}>
              <input
                style={{
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 40,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 455,
                }}
                className='card-text'
                onChange={handleOnChange}
                value={inputs.email}
                id='email'
                type='email'
                name='email'
                placeholder='Email'
              />
              <input
                style={{
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 40,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 455,
                }}
                className='card-text'
                onChange={handleOnChange}
                value={inputs.subject}
                id='subject'
                type='text'
                name='subject'
                placeholder='Telephone Number'
              />
              <textarea
                style={{
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 150,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 455,
                }}
                className='card-text'
                onChange={handleOnChange}
                value={inputs.message}
                id='message'
                name='message'
                placeholder='Message'
              />
              <button
                style={{
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 50,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 455,
                }}
                onClick={notify}
                className='card-text'
                type='submit'
              >
                Send Message
              </button>
              {/* </Box> */}
              <ToastContainer
                style={{
                  fontSize: 30,
                }}
                position='bottom-left'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
              />
            </form>
          </CardContent>
        </Grid>
      </Card>
    </div>
  );
}
