
import './App.css';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'

function App() {
  const newElements = data.map(el=>{
    return(
      <Card
        item={el}
      />
    )
  }
    )
  return (
    <div className="App">
      <Navbar/>
      {newElements}

    </div>
  );
}

export default App;
