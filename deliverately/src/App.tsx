import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main.tsx';
import Header from "./components/Main/Header.tsx"
import Nav from './Nav.tsx';
import OrderForm from "./OrderForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/order" element={<OrderForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
