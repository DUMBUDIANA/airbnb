
import './App.css';
import Gallery from './components/Gallery';
import Activities from './components/Activities';
import{ Navbar } from './components/Nav'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='gallery'>
      <Gallery/>
      </div>
      <Activities
      
      />
    
    </div>
  );
}

export default App;
