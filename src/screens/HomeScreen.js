import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Auth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const { user, setUser } = useContext(Auth);
  let navigate = useNavigate();

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <Container>
      <h2 className="mt-4">Home</h2>
    </Container>
  );
};

export default HomeScreen;
