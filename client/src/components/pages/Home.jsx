import React from 'react'
import './pages.css'
import ProfilePage from '../../Images/mert-zag.jpg'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import homeImage from '../../Images/image.png'

export const Home = () => {

  const [homeList, setHomeList] = useState([]);

  const getHomeList = () => {
    Axios.get("http://localhost:3010/homeList").then((response) => {
      console.log('işlem yapıldı')
      setHomeList(response.data);
    });
  };

  useEffect(()=>{
    getHomeList();
  }, [])




  return ( 
    
    <div className='main'>
      <div className='content'>

        <div className='profile'>
          <img src={ProfilePage} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>Ahmet Mert Demirer</h5>
            <p className='card-text'>Yazılım alanında öğrenip, kendini geliştirip, her zaman bir adım ilerletmek için eylemlerde bulunuyor. Sorumluluk bilincine, hızlı öğrenme becerilerine ve sosyal aktifliğe sahip çalışkan birisidir.</p>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Web Developer</li>
            <li className='list-group-item'>09.02.2000</li>
            <li className='list-group-item'>Pamukkale Üniversitesi</li>
            <li className='list-group-item'>Yönetim Bilişim Sistemleri</li>
          </ul>
        </div>

        <div className='home-card'>
          {homeList.map((val, key) => {
            return (
              <div className='cv-card'>
                <div className='card'>
                  <div className='card-body'>
                    <img src={homeImage} className="card-img" alt="..."/>
                    <h5 className='card-title'>{val.homeTitle}</h5>
                    <p className='card-text'>{val.homeText}</p>
                    <p className='card-text'><small className='text-muted'>{val.homeDownText}</small></p>
                  </div>
                </div>
              </div>
            )
          })}
         

        </div>

      </div>
    </div>
  )
}
