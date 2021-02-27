import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import '../public/styles/font.less';
import styles from './index.module.less';
// import Layout from '../components/layout';
import NavBar from '../components/navbar';
import AbsoluteImage from '../components/absoluteImage';
import AbsoluteImage2 from '../components/absoluteImage2';
import '../public/styles/global.less';
// import RootContext from '../components/layout/RootContext';
export const Index = () => {
  // const [lang, setLang] = useState("TH");
  const [textData, setTextData] = useState({
    textTitle1: 'Our company can offer personal escort service',
    textTitle2: 'at the highest level in thailand and around the world',
    textTitle3: 'Our company has personnel ready to support various tasks. About security that you will use all services. In which we have personnel ready Through training in the bodyguard course in security And our personnel have been trained Both fighting with hands And fighting with weapons and we have Partner around the world ready to work in any country you want. We have various things to serve you, both car, boat, and airplane And accommodation services for customers as well',
    textTitle4: 'Guaranteed by an experienced team. The protection of many important people',
    textTitle5: 'Bodyguard service , Providing private transport',
    textTitle6: 'Complete course for professional bodyguards',
  })
  const langChange = (lan) => {
    switch (lan) {
      case "TH" : {
        setTextData({
          textTitle1: 'บริษัทของเราสามารถนำเสนอ บริการคุ้มกันบุคคลสำคัญ',
          textTitle2: 'ในระดับสูงสุด ในประเทศไทยและทั่วโลก',
          textTitle3: 'บริษัทเรา มีบุคลากรไว้พร้อมรองรับงานด้านต่างๆ เกี่ยวกับเรื่องการรักษาความปลอดภัยที่ท่านจะใช้บริการทุกอย่าง ซึ่งทางเรามีบุคลากรพร้อม โดยผ่านการฝึกหลักสูตรบอดี้การ์ดด้านการรักษาความภัย และบุคลากรของเราได้ผ่านการฝึก ทั้งการต่อสู้ด้วยมือปล่าว และการต่อสู้ด้วยอาวุธ และทางเรามี Partner อยู่ทั่วโลกพร้อมที่จะทำงานได้ทุกประเทศที่ท่านต้องการ เรามีสิ่งต่างๆไว้บริการท่าน ทั้งรถ ทั้งเรือ ทั้งเครื่องบิน และการบริการหาที่พักต่างๆให้กับลูกค้าด้วย',
          textTitle4: 'การันตีด้วยทีมงานที่มีประสบการณ์ การคุ้มกันบุคลสำคัญจำนวนมาก',
          textTitle5: 'บริการคุ้มกัน บริการจัดหาพาหนะส่วนตัว จัดหาที่พัก',
          textTitle6: 'หลักสูตรครบถ้วน สำหรับบอดี้การ์ดมืออาชีพ',
        })
        break;
      }
      case "EN" : {
        setTextData({
          textTitle1: 'Our company can offer personal escort service',
          textTitle2: 'at the highest level in thailand and around the world',
          textTitle3: 'Our company has personnel ready to support various tasks. About security that you will use all services. In which we have personnel ready Through training in the bodyguard course in security And our personnel have been trained Both fighting with hands And fighting with weapons and we have Partner around the world ready to work in any country you want. We have various things to serve you, both car, boat, and airplane And accommodation services for customers as well',
          textTitle4: 'Guaranteed by an experienced team. The protection of many important people',
          textTitle5: 'Bodyguard service , Providing private transport',
          textTitle6: 'Complete course for professional bodyguards',
        })
        break;
      }
    }
  }

  useEffect(()=>{
    const localStorageOut = localStorage.getItem('languageSecue') || "EN";
    langChange(localStorageOut);
  },[])

  const changLanguage = (lang) => {
    const localStorageWord = localStorage.getItem('languageSecue') || "EN";
    let langC = localStorageWord || lang;
    langChange(langC);
  }

  return (
    <>
    <NavBar changeLanguage={changLanguage} />
    <div className={styles.MainContainer}>
    <div className={styles.bannerConainer}></div>
      <div className={styles.flexContainer}>
      
        <div className={styles.Title}>Bodyguard VIP and Security Protection</div>
        {/* https://youtu.be/mPOMqwfAodI */}
        <div className={styles.centerVideo}>
          <ReactPlayer url="https://youtu.be/A-mToYDNsbo"  width='100%'
          height='600px'/>
        </div>
        <div className={styles.firstContent}>
          <div className={styles.leftContent}>
            <div className={styles.imagePaddTop}>
              <Image
                    loading={'eager'}
                    src={'/images/400690.jpg'}
                    alt={'image 0000'}
                    width={1125}
                    height={1563}
                  /></div>
            <div>
              <Image
                    loading={'eager'}
                    src={'/images/400685.jpg'}
                    alt={'image 0001'}
                    width={1048}
                    height={1563}
                  /></div>
                  <div>
                   
                  </div>
          </div>
          <div className={styles.rightContent}>
              <div className={styles.textContent}>
                <div>{textData.textTitle1}</div>
                <div>{textData.textTitle2}</div>
              </div>
              <div className={styles.messageContent}>
                <p>
                {textData.textTitle3}
                </p>
              </div>
              {/* <div className={styles.centerVideo}>
                <ReactPlayer url="https://youtu.be/kH7Jsu4GBNs"  width='95%' height='440px'/>
              </div> */}
              <div className={styles.imageOptimize1}>
                    <Image
                      loading={'eager'}
                      src={'/images/301122-removebg-preview.png'}
                      alt={'image 0002'}
                      width={673}
                      height={370}
                    />
              </div>
              <AbsoluteImage2 />

          </div>
        </div>

        <div className={styles.traniContainer}>
          <div className={styles.textTranier}>
                {textData.textTitle5}
              </div>
              <div className={styles.imageTranier}>
              <div className={styles.imageOptimiz}>
              <Image 
                    loading={'eager'}
                    src={'/images/our-work/231958.jpg'}
                    alt={'image 0003'}
                    width={872}
                    height={1878}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/231954.jpg'}
                    alt={'image 0003'}
                    width={872}
                    height={1878}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/elephen001.png'}
                    alt={'image 0003'}
                    width={872}
                    height={1878}
                  />
              </div>
              </div>
          </div>

        <div className={styles.traniContainer}>
          <div className={styles.textTranier}>
          {textData.textTitle6}
              </div>
              <div className={styles.imageTranier}>
              <div className={styles.imageOptimiz}>
              <Image 
                    loading={'eager'}
                    src={'/images/our-work/gun-training/231982.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/self-defend/231986.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/bodyguard-sevice/232016.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/water-sevice/232009.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/umbella-service/231965.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
              <div className={styles.imageOptimiz}>
              <Image
                    loading={'eager'}
                    src={'/images/our-work/bodyguard-sevice/244522.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div> 
              </div>
          </div>
          <div className={styles.textGarutee}>{textData.textTitle4}</div>
              <div className={styles.imageOptimize}>
              <Image
                    loading={'eager'}
                    src={'/images/231983.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
      </div>
    </div>
    </>
  );
};

export default Index;
