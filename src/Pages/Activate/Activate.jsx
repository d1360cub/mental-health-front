import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

function Activate() {
  const { token } = useParams();
  const navigation = useNavigate();
  useEffect(() => {
    const activate = async () => {
      const response = await fetch(`${API_URL}/auth/local/verify/${token}`);
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigation('/');
      }
    };
    activate();
  }, []);
  return (
    <div>loading</div>
  );
}

export default Activate;
