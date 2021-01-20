import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import styles from './our-partner.less';
import Layout from '../../components/layout';
import NavBar from '../../components/navbar';
import '../../public/styles/font.less';
import ReactPlayer from 'react-player';
// import '../public/styles/global.less';
export const Index = () => {

  const [textData, setTextData] = useState({
    textTitle1: 'พันธมิตรของเรา มีอยู่ทั่วโลก และเปี่ยมด้วยคุณภาพ'
  })
  const langChange = (lan) => {
    switch (lan) {
      case "TH" : {
        setTextData({
          textTitle1: 'พันธมิตรของเรา มีอยู่ทั่วโลก และเปี่ยมด้วยคุณภาพ'
        })
        break;
      }
      case "EN" : {
        setTextData({
          textTitle1: 'Our partner all over the world'
        })
        break;
      }
    }
  }
  useEffect(()=>{
    const localStorageOut = localStorage.getItem('languageSecue') || "TH";
    langChange(localStorageOut);
  },[])

  const partnerImage = [
    {
      imagePath: '/images/partner/logo001.png',
    },
    {
      imagePath: '/images/partner/logo002.png',
    },
    {
      imagePath: '/images/partner/logo003.png',
    },
    {
      imagePath: '/images/partner/logo004.png',
    },
    {
      imagePath: '/images/partner/logo005.png',
    },
    {
      imagePath: '/images/partner/logo006.png',
    },
    {
      imagePath: '/images/partner/logo007.png',
    },
    {
      imagePath: '/images/partner/logo008.png',
    },
    {
      imagePath: '/images/partner/logo009.png',
    },
    {
      imagePath: '/images/partner/logo010.png',
    },
    {
      imagePath: '/images/partner/logo011.png',
    },
    {
      imagePath: '/images/partner/logo012.png',
    },
    {
      imagePath: '/images/partner/logo013.png',
    },
    {
      imagePath: '/images/partner/logo014.png',
    },
    {
      imagePath: '/images/partner/logo015.png',
    },
    {
      imagePath: '/images/partner/logo016.png',
    },
    {
      imagePath: '/images/partner/logo017.png',
    },
    {
      imagePath: '/images/partner/logo018.png',
    },
    {
      imagePath: '/images/partner/logo019.png',
    },
    {
      imagePath: '/images/partner/logo020.png',
    },
    {
      imagePath: '/images/partner/logo021.png',
    },
    {
      imagePath: '/images/partner/logo022.png',
    },
    {
      imagePath: '/images/partner/logo023.png',
    },
    {
      imagePath: '/images/partner/logo024.png',
    },
    {
      imagePath: '/images/partner/logo025.png',
    },
    {
      imagePath: '/images/partner/logo026.png',
    },
    {
      imagePath: '/images/partner/logo027.png',
    },
    {
      imagePath: '/images/partner/logo028.jpg',
    },
    {
      imagePath: '/images/partner/logo029.jpg',
    },
    {
      imagePath: '/images/partner/logo030.jpg',
    },
    {
      imagePath: '/images/partner/logo031.jpg',
    },
    {
      imagePath: '/images/partner/logo032.jpg',
    },
    {
      imagePath: '/images/partner/logo033.jpg',
    },
    {
      imagePath: '/images/partner/logo034.jpg',
    },
    {
      imagePath: '/images/partner/logo035.jpg',
    },
    {
      imagePath: '/images/partner/logo036.jpg',
    },
    {
      imagePath: '/images/partner/logo037.jpg',
    },
    {
      imagePath: '/images/partner/logo038.jpg',
    },
    {
      imagePath: '/images/partner/logo039.jpg',
    },
    {
      imagePath: '/images/partner/logo040.jpg',
    },
    {
      imagePath: '/images/partner/logo041.jpg',
    },
    {
      imagePath: '/images/partner/logo042.jpg',
    },
    {
      imagePath: '/images/partner/logo043.jpg',
    },
    {
      imagePath: '/images/partner/logo044.jpg',
    },
    {
      imagePath: '/images/partner/logo045.jpg',
    },
    {
      imagePath: '/images/partner/logo046.jpg',
    },
    {
      imagePath: '/images/partner/logo047.jpg',
    },
    {
      imagePath: '/images/partner/logo048.jpg',
    },
    {
      imagePath: '/images/partner/logo49.jpg',
    },
  ];

  return (
    <>
      <NavBar changeLanguage={langChange} />
      <div className={styles.percentClass}>
      <div className={styles.bannerConainer}></div>
        <div className={styles.MainContainer}>
          <div className={styles.flexVedio}>
              <ReactPlayer className={styles.marginToo} url="https://www.youtube.com/watch?v=kH7Jsu4GBNs"  width='48%' height='400px'/> 
              <Image
            loading={'eager'} className={styles.centerImage}
            src="/images/partner/326710-removebg-preview.png"
            alt="secue-logo2"
            width={500}
            height={500}
          />
         
          </div>
        
          <div className={styles.historyTextContainer}>
            <div className={styles.titleHistory}>Our Partner</div>
            <div className={styles.descriptHistory}>{textData.textTitle1}</div>
            <div className={styles.ImageContainer}>
              {partnerImage.map((data, index) => (
                <div key={index} className={styles.bannerImage}>
                  <Image
loading={'eager'}
                    src={data.imagePath}
                    alt={'logo' + index}
                    width={160}
                    height={160}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Index;
