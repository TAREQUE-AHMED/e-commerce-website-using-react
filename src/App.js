import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import About from './components/About/About';
import Cart from './components/Cart/Cart';
import Contact from './components/Contact/Contact';
import { GlobalStyle } from './components/GlobalStyle';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Products from './components/Products/Products';
import SingleProduct from './components/SingleProduct/SingleProduct';

function App() {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      helper:"#8490ff",
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98,84,243,0.5)",
      hr: "#ffffff",
      gradient: "linear-gradient(0deg,rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.02)0px 1px 3px 0px,rgba(27,31,35.0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
      
    },
    media: {
      mobile: "768px",
      tab:"998px",
    },
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/singleproduct" element={<SingleProduct></SingleProduct>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
