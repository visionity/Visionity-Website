 import WebDevelopment from '@/components/sevices/webDevelopment/WebDevelopment'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import React from 'react'
 
 const page = () => {
   return (
     <div>
       <Navbar/>
      <WebDevelopment/>
       <Footer/>
     </div>
   )
 }
 
 export default page
 