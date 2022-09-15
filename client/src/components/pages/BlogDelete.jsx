import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react';


export const BlogDelete = () => {



    const [blogList, setBlogList] = useState ([]);

    const getBloglist = () => {
      Axios.get("http://localhost:3010/blogList").then((response) => {
          console.log('liste konstrol')
          setBlogList(response.data);
      });
  };


    const deleteBlog = (blog_id) => {

        Axios.delete(`http://localhost:3010/deleteBlog/${blog_id}`).then((response) => {
            setBlogList(blogList.filter((val) => {

                alert('Yazı silindi')

                return val.blog_id === blog_id;

            }
            ))
        })
    }

    useEffect(() => {
        getBloglist();
    }, [blogList])



    return (
        <div className='main'>
            <div className='content'>





                <div className='edit-main'>

                    <table className="home-table">
                        <thead>
                            <tr>
                                <th scope="col">Tarih / Saat</th>
                                <th scope="col">İçerik</th>
                                <th scope='col'>Sil</th>
                            </tr>
                        </thead>

                        <tbody>

                            {blogList.map((val, key) => {
                                return (
                                    <tr>
                                        <td>{val.blog_date}</td>
                                        <td>{val.blogText}</td>
                                        <td><button className='btn btn-danger' onClick={() => { deleteBlog(val.blog_id) }}>kaldır</button></td>
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
