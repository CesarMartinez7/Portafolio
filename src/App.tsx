import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./page/Home";
import ProyectPage from "./page/ProyectPage";



function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="proyect/:id" element={<ProyectPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
