import { useState } from 'react'

function App() {
  const [choice, setChoice] = useState(0);
  const [cells, setCells] = useState([null, null, null, null, null, null, null, null, null]);
  const [mensaje, setMensaje] = useState("");
  const [mensajeStart, setMensajeStart] = useState ("")
  const [comenzar, setComenzar] = useState(false);

  const start = () => {
    const randomChoice = Math.floor(Math.random() * 2);
    setChoice(randomChoice)
    setComenzar(true)
    if (choice === 1) {
      setMensajeStart("¡Vamos a jugar!");
      setMensaje("Turno del jugador 1");
    } else {
      setMensajeStart("¡Vamos a jugar!");
      setMensaje("Turno del jugador 2");
    }
  };

  const checkGanar = (newCells) => {
    const winComb = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let combinacion of winComb) {
      const [a, b, c] = combinacion;
      if (newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]) {
        return newCells[a];
      }
    }
    return null;
  };

  const pressed = (e) => {
    if (comenzar){
      const index = e.target.getAttribute("value");
      const newCells = [...cells];
      if (cells[index] !== "O" && cells[index] !== "X") {
        if (choice === 1) {
          newCells[index] = "X";
          setChoice(0);
          setMensaje("Turno del jugador 2");
        } else {
            newCells[index] = "O";
            setChoice(1);
            setMensaje("Turn  o del jugador 1");
          }

        setCells(newCells)  ;

        const winner = checkGanar(newCells);
        if (winner) {
          if (winner == "X"){
            setMensaje("¡El jugador 1 ha ganado!");
            setComenzar(false);
          }else{
            setMensaje("¡El jugador 2 ha ganado!");
            setComenzar(false);
          }
        }else{
            const tableroLleno = newCells.every(cells => cells != null)
            if (tableroLleno ){
              setMensaje("¡Han empatado!")
            };
          };
        };
      };
    }


    const reiniciar = () => {
      setCells([null, null, null, null, null, null, null, null, null]);
      setMensajeStart("");
      setMensaje("");
      setChoice(Math.floor(Math.random() * 2));
      setComenzar(false)
    };
 
    return (
      <>
        <div className='flex'>
          <h1>Tateti</h1>
          <p>El jugador 1 es: X <br /> El jugador 2 es: O</p>
          <h2>{mensaje}</h2>
          <p>{mensajeStart}</p>
          <button className='start' onClick={start}>Empezar</button>
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
          <button onClick={reiniciar} className='reset'>Volver a jugar</button>
        </div>
      </>
    );
 
  };
export default App;