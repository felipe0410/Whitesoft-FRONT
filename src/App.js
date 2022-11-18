import './App.css';
import Header from "./componentes/Header";
import Footter from "./componentes/Footer";
import Index from "./pages/Index"
import { Route, Routes } from "react-router-dom"
function App() {
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>
      <Footter />

    </div>
  );
}

export default App;
