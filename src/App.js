import Home  from "./Components/Home";
import About from "./Components/About";
import {Routes, Route } from 'react-router-dom'
import Contact from "./Components/Contact";
import Orders from "./Components/Orders";
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='/orders' element={<Orders />}></Route>
    </Routes>
   
  );
}

export default App;
