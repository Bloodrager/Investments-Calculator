import { useState } from "react";
import classes from "./Input.module.css"

const initialInput = {
  "current-savings": 6000,
  "yearly-contribution": 1800,
  "expected-return": 10,
  duration: 15,
};

const Input = (props) => {
  const [inputText, setInputText] = useState(initialInput);

  const resetHandler = (event) => {
    event.preventDefault();
    setInputText(initialInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(inputText);
  };

  const inputHandler = (inputId, value) => {
    setInputText((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +value, // the "+" converts the string value to a number
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="current-savings">Aktuálne úspory (€)</label>
          <input
            onChange={(event) =>
              inputHandler("current-savings", event.target.value)
            }
            value={inputText["current-savings"]}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Ročné úspory (€)</label>
          <input
            onChange={(event) =>
              inputHandler("yearly-contribution", event.target.value)
            }
            value={inputText["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={classes["input-group"]}>
        <p>
          <label htmlFor="expected-return">Odhadovaný úrok (%, za rok)</label>
          <input
            onChange={(event) =>
              inputHandler("expected-return", event.target.value)
            }
            value={inputText["expected-return"]}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Dĺžka investície (roky)</label>
          <input
            onChange={(event) => inputHandler("duration", event.target.value)}
            value={inputText["duration"]}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
          Resetovať
        </button>
        <button type="submit" className={classes.button}>
          Vypočítať
        </button>
      </p>
    </form>
  );
};

export default Input;
