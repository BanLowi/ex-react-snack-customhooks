import useSwitch from "./useSwitch";
import useDate from "./useDate";
import useCustomPointer from "./useCustomPointer";

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

  /*
  
  SNACK 2: useDate 

  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );

  */


  /*
  
  SNACK 3: useCustomPointer */

  const customPointer = useCustomPointer("🔥");

  return (
    < div >
      {customPointer}
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
    </div >
  );
}

export default App;