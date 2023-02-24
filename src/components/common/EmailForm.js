import axios from 'axios';
import React, { useState } from 'react';
import '../../styles/EmailForm.scss';
import EmailIcon from '../../assets/email-icon.svg';
import GitHubIcon from '../../assets/github-icon.svg';
import LinkedInIcon from '../../assets/linkedin-icon.svg';

import {
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Stack,
  Box,
  ListItem,
} from '@mui/material';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

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
        console.log('Message sent');
      })
      .catch((r) => {
        console.log('error');
      });
  };

  const Mailto = ({ email, subject, body, children }) => {
    return (
      <a
        href={`mailto:${email}?subject=${
          encodeURIComponent(subject) || ''
        }&body=${encodeURIComponent(body) || ''}`}
      >
        {children}
      </a>
    );
  };

  return (
    <div className='container'>
      <Card
        sx={{
          width: {
            xl: '26rem',
            lg: '26rem',
            md: '26rem',
            sm: '26rem',
            xs: '25rem',
          },
          height: {
            xl: '37.5rem',
            lg: '37.5rem',
            md: '37.5rem',
            sm: '37.5rem',
            xs: '37.5rem',
          },
          // alignContent: 'center',
          borderRadius: 6,
        }}
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
          // textAlign='center'
          sx={{
            mt: 4,
          }}
        >
          <Typography
            variant='h3'
            component='div'
            color='text.secondary'
            sx={{
              fontSize: {
                xl: '4.375rem',
                lg: '4.375rem',
                md: '4.375rem',
                sm: '4.375rem',
                xs: '2rem',
              },
              color: 'primary.main',
              textAlign: 'center',
            }}
          >
            Contact me
          </Typography>
          <Typography
            gutterBottom
            className='card-text'
            variant='h5'
            color='text.secondary'
            align='center'
            sx={{
              fontSize: {
                xl: '1.375rem',
                lg: '1.28rem',
                md: '1.2rem',
                sm: '1.2rem',
                xs: '1rem',
              },
              color: 'primary.main',
            }}
            style={{ fontFamily: 'Aleo' }}
          >
            I'm currently seeking new opportunities. Feel free to say hello and
            get in touch with me!
          </Typography>
          <CardContent sx={{ width: 420, height: 600 }}>
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
                  width: 380,
                }}
                className='card-text'
                onChange={handleOnChange}
                value={inputs.email}
                // id='email'
                // type='email'
                // name='email'
                placeholder='Email'
              />
              {/* <TextField
                onChange={handleOnChange}
                value={inputs.email}
                id='outlined-basic'
                label='Email'
                variant='outlined'
              /> */}
              <input
                style={{
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 40,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 380,
                }}
                className='card-text'
                onChange={handleOnChange}
                value={inputs.subject}
                id='subject'
                type='text'
                name='subject'
                placeholder='Telephone Number'
              />
              {/* <TextField
                onChange={handleOnChange}
                value={inputs.subject}
                id='outlined-basic'
                label='Telephone Number'
                variant='outlined'
              /> */}
              <textarea
                style={{
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 150,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 380,
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
                  // display: 'flex',
                  // justifyContent: 'center',
                  // alignItems: 'center',
                  fontSize: 22,
                  backgroundColor: '#EDE3DF',
                  height: 50,
                  border: '1px solid black',
                  borderRadius: '4px',
                  paddingLeft: 10,
                  margin: 1,
                  width: 380,
                }}
                onClick={notify}
                className='card-text'
                type='submit'
              >
                Send Message
              </button>
              <Stack
                direction='row'
                spacing={2}
                sx={{
                  pt: 2,
                  display: {
                    xl: 'none',
                    lg: 'none',
                    md: 'none',
                    sm: 'block',
                    xs: 'block',
                  },
                }}
              >
                {/* <Mailto
                  email='temel.ulas@googlemail.com'
                  style={{ textDecoration: 'none' }}
                >
                  temel.ulas@googlemail.com
                </Mailto> */}
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                  key='Email'
                  component='a'
                  href='temel.ulas@googlemail.com'
                >
                  temel.ulas@googlemail.com
                </Link>
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                  href='#'
                >
                  github.com/ulas312
                </Link>
                <Link
                  style={{
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                  href='#'
                >
                  in/ulastemel
                </Link>

                {/* <Typography>temel.ulas@googlemail.com</Typography> */}
                {/* <Typography>github.com/ulas312</Typography>
                <Typography>/in/ulastemel</Typography> */}
              </Stack>

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
