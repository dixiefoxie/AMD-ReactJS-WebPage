import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export const Project = () => {

  const[projectList, setProjectList] = useState([]);

  const getProjectList = () =>{
    Axios.get("http://localhost:3010/projectList").then((response)=>{
      setProjectList(response.data);
    });
  };

  useEffect(()=>{
    getProjectList();
   },[])
  
  return (
    <div className='main'>
      <div className='content'>

        <div className='table-style'>
          <table id='project-table'>
            <thead className='project-thead'>
              <tr>
                <th>Yıl</th>
                <th>Adı</th>
                <th>Kullanılan Dil</th>
                <th>Platform</th>
                <th>incele</th>
              </tr>
            </thead>

            <tbody className='body-style'>
              {projectList.map((val, key) => {
                return(
                  <tr>
                  <td>{val.projectYear}</td>
                  <td>{val.projectTitle}</td>
                  <td>{val.projectLanguage}</td>
                  <td>{val.projectPlatform}</td>
                  <td><button className='p-button'>Tıkla</button></td>
                </tr>
                )
              })}
             
            </tbody>
          </table>
         
        </div>


      </div>
    </div>
  )
}
