import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Interest from './Components/Interest'
import Info from './Components/Info'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="App">
  
       <Header/>
       <Info/>
       <About/>
       <Interest/>
       <Footer/>
       </div>
    
  );
}

export default App;
