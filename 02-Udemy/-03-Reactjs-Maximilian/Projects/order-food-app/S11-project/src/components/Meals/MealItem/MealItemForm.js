import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // use state
  const [amountIsValid, setAmountIsValid] = useState(true);

  //use Ref function
  const amountInputRef = useRef();

  // Here make function don't reload
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return setAmountIsValid(false);
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    // here use submitHandler
    <form className={classes.form} onSubmit={submitHandler}>
      {/* Here double {{}} mean 1- pass the value. 2- to make this value to object  */}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a Valid amount (1-5). </p>}
    </form>
  );
};

export default MealItemForm;
