
import Navbar from '../../components/Navbar/Navbar'
import './CreateBlog.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const navigate = useNavigate()

 
const createBlog=async (e)=>{
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const data = Object.fromEntries(formData)
  const response =   await axios.post("https://64ee09461f87218271423715.mockapi.io/Blogs",data)
  if(response.status == 201){
  navigate("/")
  }else{
  alert("Something went wrong")
  }

}

  return (
    <div className="container">
      <Navbar />
        <h1 className="form-title">Add Blog</h1>
        
        
        <form onSubmit={createBlog} >
       
            <input type="text" id="title" placeholder='title' name="title" required  />
            
            <textarea id="description" placeholder='description' name="description" rows="4" required  ></textarea>
            
            <input type="text" id="image" placeholder='image' name="avatar" required  />
            
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default CreateBlog



// import { useState } from "react"
// import Navbar from '../../components/Navbar/Navbar'
// import './CreateBlog.css'
// import axios from "axios";
// const CreateBlog = () => {
//   const [title,setTitle]=useState("");
//   const [description,setDescription]=useState("");
//   const [image,setImage]=useState("");

//   const createBlog=async()=>{
//     e.preventDefault()
//     const data={
//       title:title,
//       description:description,
//       image:image
//     }
    
//    const respons=await axios.post("https://64ee09461f87218271423715.mockapi.io/Blogs")
//   if(response.status=201)
//   {
//     window.location.href("/")
//     alert("sucessfully inserted")
//   }
//   else {
//     alert("Something went wrong")
//   }
//   }
//   console.log(title,"Title");
//   console.log(description,"Description");  
//   return (
      
//         <div className="container">
//           <h2 className="form-title">Create a New Item</h2>
//           <form onSubmit={createBlog}>
//             <div class="form-group">
//               <label for="title">Title:</label>
//               <input type="text" id="title" name="title" required onChange={(e)=>setTitle(e.target.value)}/>
//             </div>
//             <div class="form-group">
//               <label for="description">Description:</label>
//               <textarea id="description" name="description" rows="4" required onChange={(e)=>setTitle(e.target.value)}></textarea>
//             </div>
//             <div class="form-group">
//               <label for="image">Image:</label>
//               <input type="file" id="image" name="image" accept="image/*" required onChange={(e)=>setTitle(e.target.value)}/>
//             </div>
//             <input type="submit"/>
//           </form>
//         </div>
      
//     )
//   }
  
//   export default CreateBlog