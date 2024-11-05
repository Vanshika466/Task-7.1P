import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        name: name,
        email: email,
      });
      console.log('User created successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error signing up', error);
      alert(error.message);
    }
  };

  const styles = {
    formWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    formBox: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
      maxWidth: '500px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      alignItems: 'center',
      textAlign: 'left',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    header: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#333',
      textAlign: 'center',
      margin: '0',
    },
    inputField: {
      padding: '14px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      color: '#333',
      backgroundColor: '#f4f6f8',
      transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      width: '100%',
      marginBottom: '10px',
    },
    inputFieldFocus: {
      borderColor: '#00aaff',
      outline: 'none',
      boxShadow: '0 0 6px rgba(0, 170, 255, 0.4)',
    },
    buttonMain: {
      padding: '14px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 'bold',
      color: '#ffffff',
      backgroundColor: '#00aaff',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease',
      marginTop: '20px',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#008ecc',
      transform: 'translateY(-3px)',
    },
    linkBack: {
      color: '#00aaff',
      fontSize: '0.9rem',
      textAlign: 'center',
      marginTop: '20px',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#008ecc',
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.formWrapper}>
      <form
        onSubmit={handleSignUp}
        style={styles.formBox}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
      >
        <h2 style={styles.header}>Sign Up</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            style={styles.inputField}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            onFocus={(e) => (e.currentTarget.style = styles.inputFieldFocus)}
            onBlur={(e) => (e.currentTarget.style = styles.inputField)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            style={styles.inputField}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onFocus={(e) => (e.currentTarget.style = styles.inputFieldFocus)}
            onBlur={(e) => (e.currentTarget.style = styles.inputField)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            style={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onFocus={(e) => (e.currentTarget.style = styles.inputFieldFocus)}
            onBlur={(e) => (e.currentTarget.style = styles.inputField)}
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            style={styles.inputField}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            onFocus={(e) => (e.currentTarget.style = styles.inputFieldFocus)}
            onBlur={(e) => (e.currentTarget.style = styles.inputField)}
          />
        </div>
        <button
          type="submit"
          style={styles.buttonMain}
          onMouseEnter={(e) => (e.currentTarget.style = styles.buttonHover)}
          onMouseLeave={(e) => (e.currentTarget.style = styles.buttonMain)}
        >
          Sign Up
        </button>
        <span
          style={styles.linkBack}
          onMouseEnter={(e) => (e.currentTarget.style = styles.linkHover)}
          onMouseLeave={(e) => (e.currentTarget.style = styles.linkBack)}
          onClick={() => navigate('/login')}
        >
          Back to Login
        </span>
      </form>
    </div>
  );
};

export default SignUp;