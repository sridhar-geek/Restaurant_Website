// importing pages , components,packages and images
import './App.css';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';  // this package is enable to switch b/w the pages in website
import Navbar from "./Components/navbar";
import Home from "./pages/Home"
import Menu from './pages/menu'
import About from "./pages/about"
import Contact from './pages/contact' 
import Footer from "./Components/footer"


function App() {
  return (
    <div className="App">
      <Router>   
      <Navbar />
      <Routes>
        <Route path='/' exact  Component={Home}></Route>
        <Route path='/menu' exact  Component={Menu}></Route>
        <Route path='/about' exact  Component={About}></Route>
        <Route path='/contact' exact  Component={Contact}></Route>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
