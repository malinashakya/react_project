import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar/Navbar"
import './AllBlogs.css'
import axios from "axios"


const AllBlogs = () => {
  const [blogs,setBlogs] = useState([])


  const fetchBlogs = async()=>{
    const response = await axios.get("https://64ee09461f87218271423715.mockapi.io/Blogs")
    if(response.status == 200){
      console.log(response.data)

    setBlogs(response.data)
  
    
  }


  }

  useEffect(()=>{
    fetchBlogs()
   
  },[])


  return (
    <div>
        <Navbar />
        
<div style={{display:'flex',justifyContent:"space-evenly",flexWrap:'wrap'}}>
{
  blogs.map((blog)=>{
    return (
      <div className="card" key={blog.id}>
     <img src={blog.avatar} alt="Avatar"  width='100%' />
      <div className="container">
        <h4><b>{blog.title}</b></h4> 
        <p style={{color:"red"}}>{blog.description}</p> 
        <p>{blog.createdAt}</p>
      </div>
</div>
    )
  })
}

</div>

        </div>
  )
}

export default AllBlogs



// import { useEffect, useState } from "react"
// import Navbar from "../../components/Navbar/Navbar"
// import './AllBlogs.css'
// import axios from "axios"

// const AllBlogs = () => {
//   const [blogs,setBlogs] = useState([])
// const fetchBlogs=async()=>
// {
//  const response=await axios.get("")
// console.log(response.status)
// if(response.status==200)
// {
//   console.log(response.data)
//   setBlogs(response.data)
// }
// console.log(blogs)
// }

// useEffect(()=>{
//   fetchBlogs()
// },[])
//   // useEffect(()=>
//   // {
//   //   console.log("Hello");
//   // },[])
//   return (
//     <div>
//         <Navbar />
//         <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>
//       {
//         blogs.map((blog)=>{
//           return (
//             <div className="card" key={blog.id}>
//             <img src={blog.avatar} alt="Avatar" width='100'/>
//             <div className="container">
//               <h4><b>{blog.title}</b></h4>
//               <p>{blog.description}</p>
//               <p>{blog.CreatedAt}</p>
//             </div>
//           </div> 
//           )
        
//         })
//       }
      
     
//         </div>
        
     
//     </div>
//   )
// }

// export default AllBlogs
