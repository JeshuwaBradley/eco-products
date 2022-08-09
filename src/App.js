import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
