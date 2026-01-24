import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from "./componentes/layout/NavBar";
import Footer from "./componentes/layout/Footer";
import IntroHome from "./pages/Home/IntroHome";
import Atividades from "./pages/Home/Atividades";
import Contato from "./pages/Home/Contato";
import Planos from "./pages/Planos/Planos";
import Nutri from "./pages/Nuticao/Nutricao";



function App() {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen bg-zinc-950">
        <NavBar />

        <Routes>

          <Route path="/" element={
            <main className="flex flex-col">
              <div id="home">
                <IntroHome />
              </div>
              <Atividades />
              <div id='contato'>
                <Contato />
              </div>
            </main>
          } />

          <Route path="/planos" element={<Planos />} />
          <Route path="/Nutricao" element={<Nutri />} />
        
      
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;