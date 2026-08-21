// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './navbar.jsx'
import Homepage from './homepage.jsx';
import Menu from './menu.jsx'
import Ourstory from './ourstory.jsx';
import Gallery from './gallery.jsx';
import Contact from './contact.jsx';
import Marquee from './Scroll.jsx';
import Adminpage from './Adminpage.jsx';
import Flavours from './flavours.jsx';

function App() {
  return (
    <div className='bg-cream'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home"><Homepage/></div>
                <Marquee/>
                <div id="menu"><Menu/></div>
                <div id="ourstory"><Ourstory/></div>
                <div id="flavours"><Flavours/></div>
                <div id="gallery"><Gallery/></div>
                <div id="contact"><Contact/></div>
              </>
            }
          />
          <Route path="/admin" element={<Adminpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App