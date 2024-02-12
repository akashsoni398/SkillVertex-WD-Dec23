import styles from './App.module.css';
import Greeting from './Greeting';
import Header from './components/header';
import ExpenseSection from './components/expenseSection';
import States from './States';

function App() {

  let greet = <h1>Hello React!</h1>

  var cangreet = true;
  if(cangreet) {
    greet = <h1>Hello React!!</h1>
  }

  let greeting = () => {
    document.getElementById("target").innerHTML = "<h1>Hello React!!!</h1>";
  }

  let buttonStyle = {color: "white", backgroundColor: "green", padding:"20px"}

  return (
    <div>
      <Header comment="Header in react page rendered from App." />
      Hello World
      <div className='' id="target">{greet}</div>
      <Greeting />
      <ExpenseSection />
      <States />
      <div className={styles.itemStyle} >This is a CSS module in ReactJS</div>
      
      <button onClick={greeting} style={buttonStyle}>Click</button>
    </div>
  );
}

export default App;
