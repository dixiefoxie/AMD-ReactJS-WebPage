import React from 'react'
import './pages.css'
import ContactPic from '../../Images/contact-us.jpg'

export const Contact = () => {
  return (
    <div className='main'>
      <div className='content'>


        <div className='contact-main'>

          <div className='contact-pic'>
            <img src={ContactPic} alt="contact me" />
          </div>


          <div className='contact-text-group'>
            <div className='contact-info'>
              <div className='contact-i'>
                <h1>Meet Me</h1>
                <div className='phone-g'>
                  <h3><i className="fa-solid fa-phone" id='phone'></i></h3>
                  <p id='phone-num'> +90 555 555 5555</p>
                </div>
                <div className='mail-g'>
                  <h3><i className="fa-solid fa-envelope" id='mail'>{' '}</i></h3>

                  <p id='mail-adr'> {' '} mertdemirer88@gmail.com</p>
                </div>
                <div className='location-g'>
                  <h3><i className="fa-solid fa-location-dot" id='location'></i></h3>
                  <p id='location-f'>Denizli</p>
                </div>
              </div>
            </div>


            <div className='contact-info-t'>
              <div className='contact-i'>
                <h1>Soicial Media</h1>
                <div className='instagram-g'>
                  <h3><i className="fa-brands fa-instagram"></i></h3>
                  <p id='insta'> @zag_mert</p>
                </div>
                <div className='twitter-g'>
                  <h3><i className="fa-brands fa-twitter"></i></h3>

                  <p id='twit'> {' '} @zagrecusy</p>
                </div>
                <div className='bionluk-g'>
                  <h3><i className="fa-solid fa-circle-question"></i></h3>
                  <p id='bion'>bionluk.com/mertdemirer</p>
                </div>
              </div>
            </div>

          </div>

        </div>


      </div>
    </div>
  )
}
