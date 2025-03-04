import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './components/router/AppRouter';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="appContainer">
        <Navbar/>
        <div className="pageContent">
          <AppRouter/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
