import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* here we use spread operator Mean you can add any types like {id - type - min - max} and so on */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
