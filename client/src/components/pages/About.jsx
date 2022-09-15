import React from 'react'
import './pages.css'
import AboutPhoto from '../../Images/mert-zag.jpg';
import dev from '../../Images/dev.jpg'

export const About = () => {
  return (
    <div className='main'>
      <div className='content'>
        
        <div className='about-tt'>
          <div className='about-card-header'>
          <img src={AboutPhoto} className='about-img' alt='...' /></div>
          <div className='about-card-body'>
          <h2>Ahmet Mert Demirer Kimdir?</h2>
            <h5 className='about-card-title'>9 şubat 2000’de Denizli’nin Pamukkale ilçesinde doğup büyüdü. 2016’dan beri yazılım alanında öğrenip, kendini geliştirip, her zaman bir adım ilerletmek için eylemlerde bulunuyor. Sorumluluk bilincine, hızlı öğrenme becerilerine ve sosyal olarak aktifliğe sahip çalışkan birisidir. Her zaman yazılıma ilgi duymuş ve sürekli yeni yazılım dilleri öğrenmeye kendini adamıştır. Özellikle web alanında ilerlemekten zevk almakla birlikte diğer alanlardan geri kalmak istemediği için boş zamanlarını Linux ve Unity ile vakit geçiriyor.</h5>
          </div>
        </div>

        <div className='about-tt'>
          <div className='about-card-header'>
          <img src={dev} className='about-img' alt='...' /></div>
          <div className='about-card-body'>
          <h2>Mesleki Becerileri Neler?</h2>
            <h5 className='about-card-title'>Web & mobil geliştirici. Pamukkale üniversitesi Yönetim Bilişim Sistemleri bölümü öğrencisi. PHP, React, SqL(MYSql), Java (JPA, Hibernate), Xamarin, C, C++, C# ve Python dillerinde projeler geliştirdi. Blockchain ve NFT üzerine çalışmalar yaptı. Yabancı dil olarak İngilizce B2 seviyesindedir. Stajını Denizli Ratesk tekstil fabrikasında yaptı. Boş zamanlarında oyun geliştirme, 3D modelleme ve illüstrasyon yapıyor.</h5>
          </div>
        </div>


      </div>
    </div>
  )
}
