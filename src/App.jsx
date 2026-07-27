import Navbar from './navbar.jsx'
import Homepage from './homepage.jsx';
import Menu from './menu.jsx'
import Ourstory from './ourstory.jsx';
import Gallery from './gallery.jsx';

function App() {
  

  return (
    <>

    <div className='bg-cream'>
      <Navbar />
      <Homepage/>
      <Menu/>
      <Ourstory/>
      <Gallery/>
    </div>
    </>
   
  );
}

export default App
