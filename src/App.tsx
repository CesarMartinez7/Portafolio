import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./page/Home";
import Footer from "./components/Footer";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
