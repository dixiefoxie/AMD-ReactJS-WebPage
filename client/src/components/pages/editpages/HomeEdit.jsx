import React from 'react'
import { useState } from 'react'
import Axios from 'axios';
import { useEffect } from 'react';

export const HomeEdit = () => {

  
  const [homeTitle, setHomeTitle] = useState();
  const [homeText, setHomeText] = useState();
  const [homeDownText, setHomeDownText] = useState();

  const updateHome = (home_id) => {
    Axios.put('http://localhost:3010/UpdateHome', 
    {
      homeTitle: homeTitle,
      home_id: home_id,
      homeText: homeText,
      homeDownText: homeDownText

    }).then(() => {
      alert("Update Başarılı");
      console.log("success");
    });
  }


  const [homeList, setHomeList] = useState([]);

  const gethomeList = () => {
    Axios.get("http://localhost:3010/homeList").then((response) => {

      setHomeList(response.data);
    });
  };

  const deleteHome = (home_id) =>{

    Axios.delete(`http://localhost:3010/deleteHome/${home_id}`).then((response)=>{
      setHomeList(homeList.filter((val)=>{
        
        return val.home_id === home_id;
  
      }
      ))
    })
  }

  useEffect(()=>{ gethomeList();},[homeList]);


  return (
    <div className='main'>
      <div className='content'>



        <div className='edit-main'>

          <table className="home-table">
            <thead>
              <tr>
                <th scope="col">Başlık</th>
                <th scope="col">İçerik</th>
                <th scope="col">Not</th>
                <th scope="col">-</th>

                <th scope="col">Başlık</th>
                <th scope="col">İçerik</th>
                <th scope="col">Not</th>
                <th scope="col">kaydet</th>
                <th scope='col'>Sil</th>
              </tr>
            </thead>

            <tbody>

              {homeList.map((val, key) => {
                return (
                  <tr>
                    <td>{val.homeTitle}</td>
                    <td>{val.homeText}</td>
                    <td>{val.homeDownText}</td>
                    <td></td>

                    <td>
                      <input placeholder={val.homeTitle}
                        onChange={(e) => {
                          setHomeTitle(e.target.value);
                        }}
                        defaultValue={val.homeTitle} />
                    </td>



                    <td>
                      <textarea placeholder={val.homeText}
                        onChange={(e) => {
                          setHomeText(e.target.value);
                        }}
                        defaultValue={val.homeText} />
                    </td>


                    <td>
                      <textarea placeholder={val.homeDownText}
                        onChange={(e) => {
                          setHomeDownText(e.target.value);
                        }}
                        defaultValue={val.homeDownText} />
                    </td>


                    <td><button className='btn btn-warning' onClick={() => { updateHome(val.home_id) }}>update</button></td>
                    <td><button className='btn btn-danger' onClick={() => { deleteHome(val.home_id) }}>kaldır</button></td>
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
