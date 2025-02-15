import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./page/Home";
import ProyectPage from "./page/ProyectPage";
import Footer from "./components/Footer";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="proyect/:id" element={<ProyectPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
