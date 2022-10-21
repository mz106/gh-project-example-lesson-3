import {Route, Routes} from "react-router-dom"
import Home from "./pages/home/Home";
import Basket from "./pages/basket/Basket"



function App() {
  return (
    <Routes>
      <Route index element = {<Home />}/>
      <Route path = "/basket" element = {<Basket />}/>

    </Routes>
    
  )
}

export default App;
