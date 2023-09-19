import { useState } from "react";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Result from "./components/Results/Results";

function App() {
  const [inputText, setInputText] = useState(null);

  const calculateHandler = (inputText) => {
    setInputText(inputText);
  };

  const yearlyData = []; // per-year results

  if (inputText) {
    let currentSavings = +inputText["current-savings"];
    const yearlyContribution = +inputText["yearly-contribution"];
    const expectedReturn = +inputText["expected-return"] / 100;
    const duration = +inputText["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <Input onCalculate={calculateHandler} />
      {!inputText && <p style={{textAlign: "center"}}>Vložte vstup pre kalkuláciu investícií.</p>}
      {inputText && (
        <Result
          data={yearlyData}
          initialInvestment={inputText["current-savings"]}
        />
      )}
    </div>
  );
}

export default App;
