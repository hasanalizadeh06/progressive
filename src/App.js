import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRouter from './components/router/AppRouter';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <AppRouter/>
    </Router>
  );
}

export default App;
