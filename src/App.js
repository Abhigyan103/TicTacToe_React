import './App.css';
import Square from './Components/Square';

function App() {
  const cSquare = () => {
    alert("Hehe")
  }
  return (
    <div className="App">
      <div className="Board">
        <div className="Row">
          <Square val={"X"} cSquare={cSquare}/>
          <Square val={"O"} cSquare={cSquare}/>
          <Square val={"X"} cSquare={cSquare}/>
        </div>
        <div className="Row">
          <Square val={"O"} cSquare={cSquare}/>
          <Square val={"X"} cSquare={cSquare}/>
          <Square val={"O"} cSquare={cSquare}/>
        </div>
        <div className="Row">
          <Square val={"X"} cSquare={cSquare}/>
          <Square val={"O"} cSquare={cSquare}/>
          <Square val={"X"} cSquare={cSquare}/>
        </div>
      </div>
    </div>
  );
}

export default App;
