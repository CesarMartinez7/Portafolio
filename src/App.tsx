import { BrowserRouter,Route,Routes } from "react-router-dom";
import Main from "./page/Home";
import NotFound from "./page/Notfound";


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
