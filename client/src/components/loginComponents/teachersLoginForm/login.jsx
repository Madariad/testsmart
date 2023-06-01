import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import axiosConfig from "../../axiosConfig";

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  errorText: {
    color: theme.palette.error.main,
    marginTop: theme.spacing(1),
  },
  errorAnimation: {
    transition: 'opacity 0.3s ease-in-out',
    opacity: 1,
  },
  successAnimation: {
    transition: 'opacity 0.3s ease-in-out',
    opacity: 0,
  },
}));

function LoginForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);

  const handleLogin = async () => {
    setEmailError(false);
    setPasswordError(false);
    setErrorVisible(false);
    setSuccessVisible(false);

    // Validate email and password
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    if (emailValue === '') {
      setEmailError(true);
    }
    if (passwordValue === '') {
      setPasswordError(true);
    }


    if (emailValue !== '' && passwordValue !== '') {
      try {

        const response = await axiosConfig.post('/api/v1/teachers/login', { email: emailValue, password: passwordValue });

  
        const token = response.data.token;
        console.log(response);


        localStorage.setItem('token', token);

  
        setSuccessVisible(true);
        setTimeout(() => navigate('/'), 1000);
      } catch (error) {
    
        setErrorVisible(true);
      }
    }
  };

  return (
    <form className={classes.form}>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        className={classes.textField}
        inputRef={emailRef}
        error={emailError}
        helperText={emailError ? 'Please enter a valid email' : ''}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        className={classes.textField}
        inputRef={passwordRef}
        error={passwordError}
        helperText={passwordError ? 'Please enter a password' : ''}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} className={classes.button}>
        Login
      </Button>
      <CSSTransition in={errorVisible} timeout={300} classNames="error-animation" unmountOnExit nodeRef={emailRef}>
        <Typography variant="body2" className={`${classes.errorText} ${classes.errorAnimation}`}>
          Invalid email or password.
        </Typography>
      </CSSTransition>
      <CSSTransition in={successVisible} timeout={300} classNames="success-animation" unmountOnExit nodeRef={emailRef}>
        <Typography variant="body2" className={`${classes.errorText} ${classes.successAnimation}`}>
          Login successful. Redirecting...
        </Typography>
      </CSSTransition>
    </form>
  );
}

export default LoginForm;
