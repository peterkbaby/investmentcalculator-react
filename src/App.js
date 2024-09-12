import {useState} from 'react'
import './App.css';
import Calculator from './components/Calculator';
import Header from './components/Header'
import Results from './components/Results';
function App() {
  const [userInput, setuserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
});
  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setuserInput(prevUserInput => {
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue,
        };
    });
  }

  return (
    <>
      <Header />
      <Calculator userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">please enter a duraiton greater than zero</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App;
