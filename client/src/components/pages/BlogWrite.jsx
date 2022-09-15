import React from 'react'
import './pages.css'
import { useState } from 'react'
import Axios from 'axios';

export const BlogWrite = () => {


  const [blogText, setBlogText] = useState("");
  
  const addBlog = () => {
    Axios.post('http://localhost:3010/createblog',

      {
        blogText: blogText

      }).then(() => {
        alert("başarıyla eklendi");
        console.log("success");
      })
  };


  return (
    <div className='main'>
      <div className='content'>


        <div className='content-t'>

          <h3>Bloga yaz</h3>
          <div className="input-group">
            <div className="input-group-prepend">
              <span>Mesaj yaz</span>
            </div>
            <textarea
              onChange={(e) => { setBlogText(e.target.value) }}
              className="blog-text" aria-label="With textarea"></textarea>
          </div>
          <button className='btn btn-success' onClick={addBlog}>kaydet</button>
        </div>



      </div>
    </div>
  )
}
