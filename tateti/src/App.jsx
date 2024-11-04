import { useState } from 'react'

function App() {
  const [cells,setCells] = useState([null,null,null,null,null,null,null,null,null])

  return (
    <>
      <h1 style={{textAlign:"center",marginTop : "50px"}}>Tateti</h1>
      <div className="container">
        <div value="0" onClick={pressed} className="item"></div>
        <div value="1" onClick={pressed} className="item"></div>
        <div value="2" onClick={pressed} className="item"></div>
        <div value="3" onClick={pressed} className="item"></div>
        <div value="4" onClick={pressed} className="item"></div>
        <div value="5" onClick={pressed} className="item"></div>
        <div value="6" onClick={pressed} className="item"></div>
        <div value="7" onClick={pressed} className="item"></div>
        <div value="8" onClick={pressed} className="item"></div>
      </div>
    </>
  )
}

export default App
