import React from 'react'
import './pages.css'
import Axios from 'axios';
import {useState, useEffect} from 'react'
import MyPhoto from '../../Images/mert-zag.jpg'

export const Blog = () => {

  const [blogList, setBlogList] = useState ([]);

  const getBloglist = () => {
    Axios.get("http://localhost:3010/blogList").then((response) => {
        console.log('liste konstrol')
        setBlogList(response.data);
    });
};

useEffect(()=>{
  getBloglist();
}, [])


  return (
    <div className='main'>
      <div className='content'>
        
        <h2>Blog</h2>

      <div className='chat'>
                    
                    {blogList.map((val,key)=>{
              return(
                    <div className='a'>
                        <div>
                            <img src={MyPhoto} alt="Ava" className='MyPhoto' />
                        </div>  
                        <div className='text-b'>
                        <h6 className='tag'>A.Mert.D <small>{val.blog_date}</small></h6>
                            <p>{val.blogText}</p>
                            
                        </div>
                    </div>
                    )})}

                </div>
      </div>
    </div>
  )
}
