import './App.css';
import { BrowserRouter } from 'react-router-dom';  // IMPORTAR BrowserRouter
import Header from './Components/Header.jsx';
import AppRoutes from './Routes.jsx'; 
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
