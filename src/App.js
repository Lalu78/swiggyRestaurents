import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import MidNavBar from './components/MidNavBar';
import RestoCardItem from './components/RestoCardItem';
function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
       <MidNavBar />
      
      <RestoCardItem/> 
    </div>
  );
}

export default App;
