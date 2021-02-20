import React, {useState, useEffect} from 'react';
import styles from './contact-us.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
export const Index = () => {

  const [textData, setTextData] = useState({
    textTitle1: 'Our company offers a service for personal care and escort (Vip).',
    textTitle2: 'The level of care from the basics to the highest level (24 hrs.)'
  })
  const langChange = (lan) => {
    switch (lan) {
      case "TH" : {
        setTextData({
          textTitle1: 'บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)',
          textTitle2: 'ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม)'
        })
        break;
      }
      case "EN" : {
        setTextData({
          textTitle1: 'Our company offers a service for personal care and escort (Vip).',
          textTitle2: 'The level of care from the basics to the highest level (24 hrs.)'
        })
        break;
      }
    }
  }
  useEffect(()=>{
    const localStorageOut = localStorage.getItem('languageSecue') || "EN";
    langChange(localStorageOut);
  },[])
  return (
    <>
      <NavBar changeLanguage={langChange} />
      <div className={styles.MainContainer}>
        <div className={styles.topImage}>
          <div className={styles.headerBannerContactUs}>
            <div className={styles.contactUsTitle}>Contact</div>
            <div className={styles.subTitle}>
            {textData.textTitle1}

            </div>
            <div className={styles.subTitle}>
            {textData.textTitle2}{' '}
              <span className={styles.callCenter}>
                
              </span>
            </div>
          </div>
        </div>
        <div className={styles.positionContactForm}>
          <div className={styles.formContactUsContainer}>
            <div className={styles.groupform}>
              <div className={styles.leftForm}>
                <div className={styles.formLeftcontainer}>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      <div>(+66) 89 496 2596 (Mr.ken)</div>
                      <div>(+66) 82 283 9789 (Mr.ken)</div>
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>Line: TeamKen.111</div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      We chat: wxid_y00q2dynw9zg22
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      Email: bodyguard.5559@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
