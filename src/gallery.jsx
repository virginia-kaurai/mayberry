import IMAGE4 from "./assets/IMAGE4.jpeg"
import IMAGE5 from "./assets/IMAGE5.jpeg"
import IMAGE6 from "./assets/IMAGE6.jpeg"
import IMAGE7 from "./assets/IMAGE7.jpeg"
import IMAGE8 from "./assets/IMAGE8.jpeg"
import IMAGE9 from "./assets/IMAGE9.jpeg"

const galleryimages =[


  {
    "name": "Floral Birthday Cake",
    "photo": IMAGE4
  },
  {
    "name": "Classic Buttercream Birthday Cake",
    "photo": IMAGE5
  },
  {
    "name": "Graduation Celebration Cake",
    "photo": IMAGE6
  },
  {
    "name": "Heart Floral Cake",
    "photo": IMAGE7
  },
  {
    "name": "Pink Rosette Birthday Cake",
    "photo": IMAGE8
  },

  {
    "name": "Pink Rosette Birthday Cake",
    "photo": IMAGE9
  }


  
]

function CreateCard({name, photo}){


  return(

    <div ClassName="flex flex-col items-center justify-center gap-4 p-10 m-10">
           
            <img src={photo} className= " object-cover mt-8 "   alt="Cakes " />
                <p className="text-lg font-bold text-center">{name}</p>
    </div>
  )
}
function Gallery(){



    return(

        <>
        <div className="flex items-center justify-center gap-4 mb-10 p-10">
        <div className="w-10 border-t border-gold"></div>

        <p className="text-xs uppercase tracking-[0.4em] text-gold">
          Gallery
        </p>

        <div className="w-10 border-t border-gold"></div>
      </div>

      <div >
           <p className="font-quick p-10 m-10 flex justify-center items-center text-4xl">


            “Our wedding cake was so beautiful guests didn’t want to cut it — and then so delicious we ran out in ten minutes. Mayberry made
           

          
           
           </p>
            <h1 className="text-gold text-2xl flex justify-center p-10 m-8">
            Amelia & Rowan · June wedding
           </h1>



           {/* Gallery images */}
           <div>
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 ">
                      {galleryimages.map(CreateCard)}

                    </div>


           </div>
        </div>
        
        </>

 

    )
}

export default Gallery