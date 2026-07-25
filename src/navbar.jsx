function Navbar(){
 

 return(
<nav class="grid grid-cols-3 items-center px-6 py-4 bg-white shadow-sm">

 
  <div class="justify-self-start">
    <a href="/" class="text-xl font-bold text-gray-800">My App</a>
  </div>

  
  <div class="hidden md:flex justify-self-center items-center gap-8">
    <a href="#home" class="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
    <a href="#about" class="text-gray-600 hover:text-gray-900 transition-colors">About</a>
    <a href="#gallery" class="text-gray-600 hover:text-gray-900 transition-colors">Gallery</a>
    <a href="#contact" class="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
  </div>

  
  <div class="flex justify-self-end items-center gap-3">
    <button class="text-gray-700 font-medium px-4 py-2 hover:text-gray-900 transition-colors">
      Login
    </button>
    <button class="bg-blue-600 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
      Sign Up
    </button>
  </div>

</nav>


)}

export default Navbar