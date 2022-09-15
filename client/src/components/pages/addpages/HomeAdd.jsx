import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

export const HomeAdd = () => {

  const [homeImage, setHomeImage] = useState("");
  const [homeTitle, setHomeTitle] = useState("");
  const [homeText, setHomeText] = useState("");
  const [homeDownText, setHomeDownText] = useState("");

  const addHome = () => {
    Axios.post('http://localhost:3010/createhome',

      {
        homeImage: homeImage,
        homeTitle: homeTitle,
        homeText: homeText,
        homeDownText: homeDownText

      }).then(() => {
        alert("başarıyla eklendi");
        console.log("success");
      })
  };


  return (
    <div className='main'>
      <div className='content'>


        <div className='home-add-c'>
          <h2 className='home-h2'>Ana Sayfa İçerik Ekle</h2>

          <div className="home-add">
            <div className="input-group-prepend">
              <span className="home-add-tittle" id="inputGroup-sizing-default">Başlık</span>
            </div>
            <input
              onChange={(e) => { setHomeTitle(e.target.value) }}
              type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>


          <div className="input-group">
            <div className="input-group-prepend">
              <span className="home-add-i">Açıklaması</span>
            </div>
            <textarea
              onChange={(e) => { setHomeText(e.target.value) }}
              className="form-control" aria-label="With textarea"></textarea>
          </div>
          <br></br>
          <div className="home-add-text">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Alt metin</span>
            </div>
            <input
              onChange={(e) => { setHomeDownText(e.target.value) }}
              type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">


            <div className="home-custom-file">
              <input
                onChange={(e) => { setHomeImage(e.target.value) }}
                type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
            </div>
          </div>

          <button className='btn btn-info' onClick={addHome}>Ana Sayfa İçerik Ekle</button>

        </div>



      </div>
    </div>



  )
}
