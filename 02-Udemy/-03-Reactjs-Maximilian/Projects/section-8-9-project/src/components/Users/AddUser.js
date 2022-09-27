import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // Here add ref and use in return below
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // ref is here move any code here 💪💪💪
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    // print ref and show result
    // console.log(nameInputRef.current.value);

    // here we store value
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    event.preventDefault();

    // if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    // props.onAddUser(enteredUsername, enteredAge);
    props.onAddUser(enteredName, enteredAge);
    // ref is here move any code here 💪💪💪

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // ref is here move any code here 💪💪💪

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // ref is here move any code here 💪💪💪
            // value={enteredUsername}
            // onChange={usernameChangeHandler}

            // Here use ref
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // ref is here move any code here 💪💪💪
            // value={enteredAge}
            // onChange={ageChangeHandler}

            // Here use ref
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
