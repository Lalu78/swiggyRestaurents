
import React, { useState } from 'react'

function RestouCard({ data1 }) {
    const [show ,setHide]= useState(true)
    console.log("all data", data1)

    const quick=show?'invisible':'visible'
    const color = data1.rating >= 4 ? "green" : "bronw";
    
    const onhandlTouch = () => {
        console.log("onTouch Click")
        setHide(false)
    }
  return (
      <div onMouseEnter={onhandlTouch}  onMouseLeave={()=>{setHide(true)}} className= " cursor-pointer my-1 w-96 lg:w-80 md:w-72  sm:w-80 lg:h-96 md:h-96  h-full  hover:border border-gray-300 shadow-xs flex justify-center items-center transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-110 ...   ">
          <div className="py-5">
         <img className="w-80 h-56 grid sm:w-72 lg:w-72 lg:h-48 md:w-64 md:h-48 md:p-2" src ={data1.image} alt=""/>
         
          <h1 className="text-primary font-medium  ml-2">{ data1.name}</h1>
          <p className="ml-2 ">{ data1.address}</p>
          <div className='flex justify-between w-60  py-4 ml-2'>
              <div className={` bg-${color}  w-12 h-5 flex items-center justify-around`}>
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                   </svg>
                  <p className="text-white text-sm pr-1">{data1.rating}</p>
              </div>
              <div className="h-0.5 w-0.5 bg-black rounded-full  flex items-center justify-center mt-2"></div>
              <p className="text-xs ">{ data1.deliverytime}</p>
              <div className="h-0.5 w-0.5 bg-black  rounded-full flex items-center justify-center mt-2"> </div>
              <p className="text-xs " >{ data1.rs}</p>
          </div>
          <hr className="  w-full md:w-60 lg:w-60 ml-2" />
          <div className="flex pt-3 ml-2">
          <svg
                 className="_1GTCc fill-current text-dicount"
                 viewBox="0 0 32 32"
                 width="18"
                 fill="#686b78"
               >
                 <path d="M14.2 2.864l-1.899 1.38c-0.612 0.447-1.35 0.687-2.11 0.687h-2.352c-0.386 0-0.727 0.248-0.845 0.613l-0.728 2.238c-0.235 0.721-0.691 1.348-1.302 1.79l-1.905 1.385c-0.311 0.226-0.442 0.626-0.323 0.991l0.728 2.241c0.232 0.719 0.232 1.492-0.001 2.211l-0.727 2.237c-0.119 0.366 0.011 0.767 0.323 0.994l1.906 1.384c0.61 0.445 1.064 1.070 1.3 1.79l0.728 2.24c0.118 0.365 0.459 0.613 0.844 0.613h2.352c0.759 0 1.497 0.24 2.107 0.685l1.9 1.381c0.313 0.227 0.736 0.227 1.048 0.001l1.9-1.38c0.613-0.447 1.349-0.687 2.11-0.687h2.352c0.384 0 0.726-0.248 0.845-0.615l0.727-2.235c0.233-0.719 0.688-1.346 1.302-1.794l1.904-1.383c0.311-0.226 0.442-0.627 0.323-0.993l-0.728-2.239c-0.232-0.718-0.232-1.49 0.001-2.213l0.727-2.238c0.119-0.364-0.012-0.765-0.324-0.992l-1.901-1.383c-0.614-0.445-1.070-1.074-1.302-1.793l-0.727-2.236c-0.119-0.366-0.461-0.614-0.845-0.614h-2.352c-0.76 0-1.497-0.239-2.107-0.685l-1.903-1.382c-0.313-0.227-0.736-0.226-1.047-0.001zM16.829 0.683l1.907 1.385c0.151 0.11 0.331 0.168 0.521 0.168h2.352c1.551 0 2.927 1 3.408 2.475l0.728 2.241c0.057 0.177 0.169 0.332 0.321 0.442l1.902 1.383c1.258 0.912 1.784 2.531 1.304 4.006l-0.726 2.234c-0.058 0.182-0.058 0.375-0.001 0.552l0.727 2.237c0.48 1.477-0.046 3.096-1.303 4.007l-1.9 1.38c-0.153 0.112-0.266 0.268-0.324 0.447l-0.727 2.237c-0.48 1.477-1.856 2.477-3.408 2.477h-2.352c-0.19 0-0.37 0.058-0.523 0.17l-1.904 1.383c-1.256 0.911-2.956 0.911-4.213-0.001l-1.903-1.384c-0.15-0.11-0.332-0.168-0.521-0.168h-2.352c-1.554 0-2.931-1.001-3.408-2.477l-0.726-2.234c-0.059-0.18-0.173-0.338-0.324-0.448l-1.902-1.381c-1.258-0.912-1.784-2.53-1.304-4.008l0.727-2.235c0.058-0.179 0.058-0.373 0.001-0.551l-0.727-2.236c-0.481-1.476 0.046-3.095 1.302-4.006l1.905-1.385c0.151-0.11 0.264-0.265 0.323-0.444l0.727-2.235c0.478-1.476 1.855-2.477 3.408-2.477h2.352c0.189 0 0.371-0.059 0.523-0.17l1.902-1.383c1.256-0.911 2.956-0.911 4.212 0zM18.967 23.002c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM18.967 20.307c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM10.545 14.549c-1.907 0-3.453-1.546-3.453-3.453s1.546-3.453 3.453-3.453c1.907 0 3.453 1.546 3.453 3.453s-1.546 3.453-3.453 3.453zM10.545 11.855c0.419 0 0.758-0.339 0.758-0.758s-0.339-0.758-0.758-0.758c-0.419 0-0.758 0.339-0.758 0.758s0.339 0.758 0.758 0.758zM17.78 7.882l2.331 1.352-7.591 13.090-2.331-1.352 7.591-13.090z"></path>
               </svg>   
              <h1 className="pl-2 text-dicount"> {data1.desprice} </h1>
                  <h1 className=" pl-2 text-dicount font-medium">{data1.coupon}</h1>
                  
              </div>
              <div  className={`${quick} pt-2`}>
                  <hr />
                  <h1 className="flex items-center justify-center pt-3 text-blue font-medium "> QUICK VIEW </h1>
              </div>
              </div>
    </div>
      
          

  )
}

export default RestouCard
