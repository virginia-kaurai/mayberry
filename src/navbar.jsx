import LOGO from './assets/LOGO.jpeg'
import { useState } from 'react'
import { HiMenu, HiX } from "react-icons/hi";
function Navbar(){
    

  const [isOpen,setisOpen] = useState(false);


 return(
< div className="grid grid-cols-2 lg:grid-cols-3  items-center px-6 py-6 md:px-32 bg-cream  mb-8">

 
  <header className=" flex  justify-center justify-self-start  ">
    <img src={LOGO} className="w-16 h-16 sm:w-18sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24   border-rose-300 rounded-full" >
    </img>
    <h1 className='text-lg sm:text-xl md:text-2xl font-semibold text-rose  p-4'>Mayberry Cakes</h1>




     <div className="hidden  lg:flex justify-self-center  gap-8  ">

      <ul className='flex items-center gap-8'>
    <li><a href="#home" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Home</a></li>
    <li><a href="#about" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">About</a></li>
    <li><a href="#menu" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Menu</a></li>
    
    <li><a href="#gallery" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Gallery</a></li>
    <li><a href="#contact" className="text-charcoal hover:text-rose transition-colors font-monserat px-4">Contact</a></li>
     </ul>
</div>
  


  <div class="hidden md:flex justify-self-end items-center gap-4">
    <button class="text-charcoal font-medium px-4 py-2 hover:text-rose transition-colors font-monserat">
      Login
    </button>
    <button class=" text-charcoal font-monserat font-medium px-4 py-2 rounded-t-xl rounded-b-xl hover:border border-xl border-rose transition-colors">
      Sign Up
    </button>
    
  </div>

  <div>


     <button
          className="justify-self-end p-8  text-3xl text-rose-500 lg:hidden "
          onClick={() => setisOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
  </div>


 {isOpen && (

        <div className="lg:hidden mt-6 border-t border-rose-200 pt-6">

          <ul className="flex flex-col gap-5 text-center">

            <li>
              <a href="#home" className="hover:text-rose">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-rose">
                About
              </a>
            </li>

            <li>
              <a href="#menu" className="hover:text-rose">
                Menu
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-rose">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-rose">
                Contact
              </a>
            </li>

          </ul>

          <div className="flex flex-col gap-3 mt-8">

            <button className="border border-rose rounded-full py-2">
              Login
            </button>

            <button className="bg-rose text-white rounded-full py-2">
              Sign Up
            </button>

          </div>

        </div>

      )}
  </header>

  
  
  
</div>


)}

export default Navbar