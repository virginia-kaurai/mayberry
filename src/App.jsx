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
    <>

    <div className='bg-cream'>
      <Navbar />
      <Homepage/>
      <Marquee/>
      <Menu/>
      <Ourstory/>
      <Flavours/>
      <Gallery/>
      <Contact/>
        <Adminpage/>
    
    </div>
    </>
   
  );
}

export default App
