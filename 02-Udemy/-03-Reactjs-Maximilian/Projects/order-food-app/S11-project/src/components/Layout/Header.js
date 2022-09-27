import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReacMeals</h1>
        {/* Here you can use 👇 any name this is optional*/}
        <HeaderCartButton onClick={props.onShowCart} />
        {/* Here we get data from element 👆 header (app.js)  */}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicius food!" />
      </div>
    </Fragment>
  );
};

export default Header;
