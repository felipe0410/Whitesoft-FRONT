import './App.css';
import Header from "./componentes/Header";
import Footter from "./componentes/Footer";
import Index from "./pages/Index"
import DetalleP from './pages/Detalle';
import { Route, Routes } from "react-router-dom"
import DashboardP from './pages/Dashboard';
function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/detalle/:id" element={<DetalleP/>}/>
        <Route path="/dashboard" element={<DashboardP/>}/>
      </Routes>
      <Footter />

    </div>
  );
}

export default App;
