import React, { useState } from 'react';
import RestouCard from './RestouCard';
import RestouData from "./RestouData"

function RestoCardItem() {
    const [data, setData] = useState(RestouData)
    console.log("cartitemdata", data);
    console.log("RestouData",RestouData)
  return (
      <div>
          
     <div className="   ml-10  mt-10 grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1  justify-items-center content-around gap-2  ">
              {
                  data.map((data1) => {
                      return (
                          <> 
                        <RestouCard
                        data1={data1} 
                        />
                      </>)
                  })
           } 
      </div>
    </div>
  )
}

export default RestoCardItem
