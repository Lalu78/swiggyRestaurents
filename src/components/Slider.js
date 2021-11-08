import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


 const bannerData = [
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/u3g5fhfam7ttybkuck3m" ,
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dzn0ylwkubzgr9cjcufw" ,
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/snniv0ctl7sel6xhvawc" ,
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rfjxx9mant8wrsalz4is" ,
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/flcoeq6cdjoaferp54hd" ,
     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kogpxxoqfgpztpjwcbcb",
     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/cis0b3d9dknsdi6ugo4l",
     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/gubwz8cbugdx3prtieuj",
     "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ft6ftbffbbyp7q0p8ip9",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/cb0fuky4kdrjyisnvox1"
];
const responsive = {
   
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Slider() {
    return (
        
        <Carousel responsive={responsive}
           dotListClass="custom-dot-list-style"
          
            itemClass={{style:{background:"white"}}}
        >
    {
                bannerData.map((img) => {
                    return (
                        <div className=" lg:ml-0 md:ml-0 ml-5  mt-20  p-5  h-96 w-full bg-slidebg flex justify-around items-center  ">
                            <img className="h-72  cursor-pointer transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ..." src={img} alt="img"/>
                            
                        </div>
                    )
                })
            }
    </Carousel>
          
 
  )
}

export default Slider
