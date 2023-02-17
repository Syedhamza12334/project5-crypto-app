import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Exchanges from "./component/Exchanges";
import CoinDerails from "./component/CoinDerails";
import Coin from "./component/Coin";
import Footer from "./component/Footer";


function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/coin" element={<Coin />} />
      <Route path="/coin/:id" element={<CoinDerails />} />
      <Route path="/exchanges" element={<Exchanges />} />
      </Routes>
      <Footer/>
    </Router>
      
    
  );
}

export default App;
