import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

export const ProjectAdd = () => {

  const [projectTitle, setProjectTitle] = useState("");
  const [projectLanguage, setProjectLanguage] = useState("");
  const [projectPlatform, setProjectPlatform] = useState("");
  const [projectYear, setProjectYear] = useState("");
  const [projectDownloadLink, setProjectDownloadLink] = useState("");

  const addProject = () => {
    Axios.post('http://localhost:3010/createProject',

      {
        projectTitle: projectTitle,
        projectLanguage: projectLanguage,
        projectPlatform: projectPlatform,
        projectYear: projectYear,
        projectDownloadLink: projectDownloadLink

      }).then(() => {
        alert("başarıyla eklendi");
        console.log("success");
      })
  };


  return (
    <div className='main'>
      <div className='content'>


        <div className='project-add'>
          <h2>Proje Ekle</h2>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Proje adı</span>
            </div>
            <input
              onChange={(e) => { setProjectTitle(e.target.value) }}
              type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Kullanılan dil</span>
            </div>
            <input
              onChange={(e) => { setProjectLanguage(e.target.value) }}
              type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Hangi platform için hazırlandı</span>
            </div>
            <input
              onChange={(e) => { setProjectPlatform(e.target.value) }}
              type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>


          <div className="input-group">
            <h5>Projeye başladığın yıl: </h5>
            <select
              onChange={(e) => { setProjectYear(e.target.value) }}
              className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
              <option selected select disabled>Yıl seç</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>

          </div>

          <br></br>



          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">Proje link</span>
            </div>
            <input
              onChange={(e) => { setProjectDownloadLink(e.target.value) }}
              type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
          </div>

          <button className='btn btn-info' onClick={addProject}>Proje ekle</button>


        </div>
      </div>
    </div>
  )
}
