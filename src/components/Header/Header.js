import logo from "../../assets/investment-calculator-logo.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>
        KALKULAČKA ZHODNOTENIA <strong>INVESTÍCIÍ</strong>
      </h1>
    </header>
  );
};

export default Header;
