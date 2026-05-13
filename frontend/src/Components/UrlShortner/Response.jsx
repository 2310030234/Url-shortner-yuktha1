/*import React from 'react'


export default function Response({response}) {
 return (
   <div>
      {"https://url-shortener-bootcamp.onrender.com/api/s/"+response.shortCode}
   </div>
 )
}*/
import React from 'react'


export default function Response({response}) {
 return (
   <div>
    <a href={import.meta.env.VITE_DEV_PROXY+"/api/s/"+response.shortCode}>Click Me</a>
     
      {"https://url-shortener-bootcamp.onrender.com/api/s/"+response.shortCode}
   </div>
 )
}
