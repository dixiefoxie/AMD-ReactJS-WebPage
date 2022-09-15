import React from 'react'
import './pages.css'
import { Link } from "react-router-dom";

export const Edit = () => {
  return (
    <div className='main'>
      <div className='content'>


        <table className="edit-Table">
          <thead>
            <tr>
              <th scope="col">Sayfa Adı</th>
              <th scope="col">Sayfa Kaydet</th>
              <th scope="col">Sayfa düzenle</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th scope="row">Ana Sayfa</th>
              <td><Link to="/homeAdd"><button className='btn btn-light'>Kaydet</button></Link></td>
              <td><Link to="/homeEdit"><button className='btn btn-light'>Düzenle</button></Link></td>
            </tr>
            <tr>
              <th scope="row">Hakkımda</th>
              <td><Link to="/aboutAdd"><button className='btn btn-light'>Kaydet</button></Link></td>
              <td><Link to="/aboutEdit"><button className='btn btn-light'>Düzenle</button></Link></td>
            </tr>
            <tr>
              <th scope="row">Projelerim</th>
              <td> <Link to="/projectAdd"> <button className='btn btn-light'>Kaydet</button></Link></td>
              <td><Link to="/projectEdit"> <button className='btn btn-light'>Düzenle</button></Link></td>
            </tr>
            <tr>
              <th scope="row">Blog</th>
              <td> <Link to="/BlogWrite"> <button className='btn btn-light'>Yaz</button></Link></td>
              <td> <Link to="/BlogDelete"> <button className='btn btn-light'>Sil</button></Link></td>
              <td></td>
            </tr>
          </tbody>
        </table>



      </div>
    </div>
  )
}
