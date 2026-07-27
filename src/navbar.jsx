import LOGO from './assets/LOGO.jpeg'

function Navbar(){
 

 return(
<nav class="grid grid-cols-3 items-center px-6 py-6 bg-cream  mb-8">

 
  <div class=" flex  justify-center justify-self-start  ">
    <img src={LOGO} className='w-20 h-auto  border border-xl border-rose-300 rounded-full' >
    </img>
    <h1 className='text-xl text-rose mt-6 p-4'>Mayberry Cakes</h1>
  </div>

  
  <div class="hidden md:flex justify-self-center items-center gap-8">
    <a href="#home" class="text-charcoal hover:text-rose transition-colors font-monserat">Home</a>
    <a href="#about" class="text-charcoal hover:text-rose transition-colors font-monserat">About</a>
    <a href="#menu" class="text-charcoal hover:text-rose transition-colors font-monserat">Menu</a>
    
    <a href="#gallery" class="text-charcoal hover:text-rose transition-colors font-monserat">Gallery</a>
    <a href="#contact" class="text-charcoal hover:text-rose transition-colors font-monserat">Contact</a>
  </div>

  
  <div class="flex justify-self-end items-center gap-3">
    <button class="text-charcoal font-medium px-4 py-2 hover:text-rose transition-colors font-monserat">
      Login
    </button>
    <button class=" text-charcoal font-monserat font-medium px-4 py-2 rounded-t-xl rounded-b-xl hover:border border-xl border-rose transition-colors">
      Sign Up
    </button>
  </div>

</nav>


)}

export default Navbar