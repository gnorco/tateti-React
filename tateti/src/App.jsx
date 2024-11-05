import { useState } from 'react'

function App() {
  const [cells,setCells] = useState([null,null,null,null,null,null,null,null,null]);
  const randomChoice = Math.floor(Math.random()*2);
  const [choice,setChoice] = useState(randomChoice)
  const [mensaje,setMensaje] = useState("")

  const start = () => {
    if (choice== 1){
      setMensaje("turno del jugador 1")
    }else{
      setMensaje("turno del jugador 2")
    }
    console.log(mensaje)
  };


  const pressed = (e) =>{
    const indice =  e.target.getAttribute("value");
    const newCells = [...cells];
    if(choice == 1){
      newCells[indice] = "X";
      setChoice(0)
    }else{
      setMensaje("turno del jugador 2")
      newCells[indice] = "0";
      setChoice(1);
    };
    setCells(newCells);
  };

  return (
    <>
      <h1>Tateti</h1>
      <h2>El jugador 1 es : X <br></br> El jugador 2 es : O</h2>
      <button onClick={start}>Empezar</button>
      <div className="container">
        <div value="0" onClick={pressed} className="item">{cells[0]}</div>
        <div value="1" onClick={pressed} className="item">{cells[1]}</div>
        <div value="2" onClick={pressed} className="item">{cells[2]}</div>
        <div value="3" onClick={pressed} className="item">{cells[3]}</div>
        <div value="4" onClick={pressed} className="item">{cells[4]}</div>
        <div value="5" onClick={pressed} className="item">{cells[5]}</div>
        <div value="6" onClick={pressed} className="item">{cells[6]}</div>
        <div value="7" onClick={pressed} className="item">{cells[7]}</div>
        <div value="8" onClick={pressed} className="item">{cells[8]}</div>
      </div>
      <p>{mensaje}</p>
    </>
  )
}

export default App;
