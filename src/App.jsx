import useSwitch from "./useSwitch";
import useDate from "./useDate";

function App() {
  /*

  SNACK 1: useSwitch
  
  const [isOn, toggle] = useSwitch();
  
    return (
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    );
    
    */

  /* SNACK 2: useDate */

  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
}

export default App;