import React, { useState } from "react";

import Button from "../../UI/Button/Button";

//here imort module styles
// import classes from "./CourseInput.module.css";
import styles from "./CourseInput.module.css";

// import "./CourseInput.css";
// here make import style component
/*
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(test) => (test.invalid ? "red" : "black")};
  }

  & input {
    display: block;
    width: 100%;
    // here maek arrow funcation use it instead under style
    border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
    // here you can use any name for paramters (props or test or any things )
    background: ${(test) => (test.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // &.invalid input {
  //   border-color: red;
  //   background-color: rgb(236, 161, 161);
  // }

  // &.invalid label {
  //   color: red;
  // }
`;
*/
// make import Style component

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  // const [isValid, setIsValid] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // check if happend change or not
    // console.log(event.target.value);
    // if (event.target.value.trim().length > 0) {
    //   setIsValid(true);
    // }
    // // trim() function colect charcter
    // console.log(event.target.value.trim());
    // // trim().length function colect number of charcter
    // console.log(event.target.value.trim().length);

    console.log(event.target.value.trim().length);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // if (enteredValue.trim().length === 0) {
    //   setIsValid(false);
    //   return;
    // }
    console.log(enteredValue.trim().length);

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
  };

  // here how to make condition if input is valid
  /*
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isValid ? "red" : "#ccc",
            background: !isValid ? "salmon" : "transparent",
          }}
          // style={{
          //   borderColor: !isValid ? "red" : "#ccc",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
  */
  // here how to add class if input is valid
  /*
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
  */
  // Here use style component instead make import file css this first way how to use style component
  /*
  return (
    <form onSubmit={formSubmitHandler}>
    <FormControl className={!isValid && "invalid"}>
    <label>Course Goal</label>
    <input type="text" onChange={goalInputChangeHandler} />
    </FormControl>
      <Button type="submit">Add Goal</Button>
      </form>
      );
      */
  // Here use style component instead make import file css this second way how to use style component
  /*
  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
  */

  return (
    <form onSubmit={formSubmitHandler}>
      {/* this is way */}
      {/* <div className={styles["form-control"]}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
