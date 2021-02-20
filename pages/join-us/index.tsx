import React, {useState, useEffect} from 'react';
import styles from './join-us.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
import ReactPlayer from 'react-player';
export const Index = () => {

  const [textData, setTextData] = useState({
    textTitle1: 'Work with us',
    textTitle2: 'Become a part of the bodyguard event to keep important people safe.',
    textTitle3: 'Contact Mr.ken (+66) 89 496 2596',
    textTitle4: 'Example of our bodyguard card',
    textTitle5: 'Example of registration form',
  })
  const langChange = (lan) => {
    switch (lan) {
      case "TH" : {
        setTextData({
          textTitle1: 'ร่วมงานกับเรา',
          textTitle2: 'มาร่วมเป็นส่วนหนึ่งของงาน บอดี้การ์ด รักษาความปลอดภัยให้กับบุคลสำคัญ',
          textTitle3: 'ติดต่อ Mr.ken (+66) 89 496 2596',
          textTitle4: 'ตัวอย่าง บัตรประจำตัวบอดี้การ์ดของเรา',
          textTitle5: 'ฟอร์มสมัครสมาชิก',
        })
        break;
      }
      case "EN" : {
        setTextData({
          textTitle1: 'Work with us',
          textTitle2: 'Become a part of the bodyguard event to keep important people safe.',
          textTitle3: 'Contact Mr.ken (+66) 89 496 2596',
          textTitle4: 'Example of our bodyguard card',
          textTitle5: 'Example of registration form',
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
        <div className={styles.bannerConainer}></div>
        <div className={styles.MainBackground}>
          <div className={styles.flexContainerTop}>
            <div className={styles.title}>
              {textData.textTitle1}
            </div>
            <div className={styles.textNormal1}>
              <div>{textData.textTitle2}</div>
              <div style={{paddingTop: '30px', textDecoration: 'underline'}}>{textData.textTitle3}</div>
            </div>

            <div className={styles.joinContainer}>
            <Image
                    loading={'eager'}
                    src={'/images/join-us/330727.png'}
                    alt={'image 0000'}
                    width={434}
                    height={575}
                  />
            </div>

            <div className={styles.textExample}>
            {textData.textTitle4}
            </div>
            <div className={styles.imageCorp}>
            <Image
                    loading={'eager'}
                    src={'/images/join-us/308633_censored.jpg'}
                    alt={'image 0000'}
                    width={650}
                    height={1063}
                  />
                   <Image
                    loading={'eager'}
                    src={'/images/join-us/319855_censored.jpg'}
                    alt={'image 0000'}
                    width={650}
                    height={1063}
                  />
            </div>
            <div className={styles.textExample}>
            {textData.textTitle5}
            </div>
            <div className={styles.imageCorp}>
            <Image
                    loading={'eager'}
                    src={'/images/join-us/309696.jpg'}
                    alt={'bodyguard register form'}
                    width={600}
                    height={700}
                  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
