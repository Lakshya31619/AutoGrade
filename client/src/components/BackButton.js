import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBack} style={styles.button}>
      &#8592; Back
    </button>
  );
};

const styles = {
  button: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    zIndex: 10
  }
};

export default BackButton;
