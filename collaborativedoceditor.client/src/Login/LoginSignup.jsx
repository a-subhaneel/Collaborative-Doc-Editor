import React, { useState } from 'react';
import './LoginSignup.scss'; // Import CSS file for styling
import CustomTextField from '../Components/CustomTextField';
import { sendLoginInfo, sendSignupInfo } from '../Services/ApiService';

const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      sendLoginInfo(email, password);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <CustomTextField
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          fullWidth={true}
          id="loginEmail"
          label="Email"
          name="Email"
          autoComplete="false"
          autoFocus={true}
        />
        <CustomTextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          id="loginPassword"
          label="Password"
          name="Password"
          autoComplete="false"
          autoFocus={false}
        />
        <button type="submit">Login</button>
      </form>
    </Card>
  );
};

const SignupForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      sendSignupInfo(username, email, password);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <CustomTextField
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          required={true}
          fullWidth={true}
          id="signupUsername"
          label="Username"
          name="Username"
          autoComplete="false"
          autoFocus={true}
        />
        <CustomTextField
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          required={true}
          fullWidth={true}
          id="signupEmail"
          label="Email"
          name="Email"
          autoComplete="false"
          autoFocus={false}
        />
        <CustomTextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required={true}
          id="signupPassword"
          label="Password"
          name="Password"
          autoComplete="false"
          autoFocus={false}
        />
        <button type="submit">Signup</button>
      </form>
    </Card>
  );
};

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true); // State to track whether to show login or signup form

  const handleLogin = (data) => {
    // handle login logic
    console.log('Logging in with:', data);
  };

  const handleSignup = (data) => {
    // handle signup logic
    console.log('Signing up with:', data);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      {isLogin ? <LoginForm onSubmit={handleLogin} /> : <SignupForm onSubmit={handleSignup} />}
      <button className="toggle-button" onClick={toggleForm}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
};

export default LoginSignupPage;
