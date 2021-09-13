import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { createAccount } from "./demoSlice";


const PrimaryContainer = styled.div`
  background: #d4b4d6;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  min-height: 40vh;
  min-width: 60vw;
  padding: 2vh 2vw 2vh 2vw;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1vh;
  width: 20vw;
`;

const Input = styled.input``;

const Label = styled.label``;

const Button = styled.button``;

const Demo = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [favoriteFood, setFavoriteFood] = useState("");

  const dispatch = useAppDispatch();

  const account = useAppSelector((state) => state.demo);

  const handleSignUp = (): void => {
    dispatch(createAccount({username, favoriteFood}))
  };

  const greeting = () => {
    if(account.username.length) {
      return (
        <h1>Hi, {account.username} how about some {account.favoriteFood}?</h1>
      )
    }
  }

  return (
    <PrimaryContainer>
      <div>
        {greeting()}
      </div>
      <InputContainer>
        <Label>Username</Label>
        <Input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
      </InputContainer>
      <InputContainer>
        <Label>Password</Label>
        <Input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
      </InputContainer>
      <InputContainer>
        <Label>Favorite Food</Label>
        <Input
          type="text"
          onChange={(event) => setFavoriteFood(event.target.value)}
          value={favoriteFood}
        />
      </InputContainer>
      <InputContainer>
        <Button onClick={handleSignUp}>Sign Up</Button>
      </InputContainer>
    </PrimaryContainer>
  );
};

export default Demo;
