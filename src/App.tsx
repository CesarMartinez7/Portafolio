import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./page/Home";
import NotFound from "./page/Notfound";
import Footer from "./components/Footer";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
