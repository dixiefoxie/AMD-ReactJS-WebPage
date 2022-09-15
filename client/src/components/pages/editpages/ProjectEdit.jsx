import React from 'react'
import { useState } from 'react'
import Axios from 'axios';

export const ProjectEdit = () => {


  const [projectTitle, setProjectTitle] = useState();
  const [projectLanguage, setProjectLanguage] = useState();
  const [projectPlatform, setProjectPlatform] = useState();
  const [projectYear, setProjectYear] = useState();

  const updateProject = (project_id) => {
    Axios.put('http://localhost:3010/UpdateProject ',
      {
        project_id: project_id,
        projectTitle: projectTitle,
        projectLanguage: projectLanguage,
        projectPlatform: projectPlatform,
        projectYear: projectYear

      }).then(() => {
        alert("Update Başarılı");
        console.log("success");
      });
  }





  const [projeList, setProjeList] = useState ([]);

  const getProjelist = () => {
    Axios.get("http://localhost:3010/projectList").then((response) => {
        
        setProjeList(response.data);
    });
};

const deleteProject = (project_id) =>{

  Axios.delete(`http://localhost:3010/delete/${project_id}`).then((response)=>{
    setProjeList(projeList.filter((val)=>{
      
      return val.project_id === project_id;

    }
    ))
  })
}



  window.onload = getProjelist;
  window.onclick = getProjelist;

  return (
    <div className='main'>
      <div className='content'>


      <table className="project-table">
        <thead>
          <tr>
            <th scope="col">Başlık</th>
            <th scope="col">Kullanılan dil</th>
            <th scope='col'>platform</th>
            <th scope='col'>Year</th>
            <th scope="col">-</th>

            <th scope="col">Başlık</th>
            <th scope="col">Kullanılan dil</th>
            <th scope='col'>platform</th>
            <th scope='col'>Year</th>
            <th scope="col">kaydet</th>
            <th scope="col">kaldır</th>

          </tr>
        </thead>

        <tbody>

          {projeList.map((val, key) => {
            return (
              <tr>
                <td>{val.projectTitle}</td>
                <td>{val.projectLanguage}</td>
                <td>{val.projectPlatform}</td>
                <td>{val.projectYear}</td>



                <td></td>


                <td>

                  <input placeholder={val.projectTitle}
                    onChange={(e) => {
                      setProjectTitle(e.target.value);
                    }}
                    defaultValue={val.projectTitle} />

                </td>



                <td>

                  <input placeholder={val.projectLanguage}
                    onChange={(e) => {
                      setProjectLanguage(e.target.value);
                    }}
                    defaultValue={val.projectLanguage} />

                </td>


                <td>

                  <input placeholder={val.projectPlatform}
                    onChange={(e) => {
                      setProjectPlatform(e.target.value);
                    }}
                    defaultValue={val.projectPlatform} />

                </td>



                <td>

                  <input placeholder={val.projectYear}
                    onChange={(e) => {
                      setProjectYear(e.target.value);
                    }}
                    defaultValue={val.projectYear} />

                </td>



                <td><button className='btn btn-warning' onClick={() => { updateProject(val.project_id) }}>update</button></td>
                <td><button className='btn btn-warning' onClick={()=>{deleteProject(val.project_id)}}>Kaldır</button></td>

              </tr>

            )
          })}
        </tbody>
      </table>



      </div>
    </div>
  )
}
