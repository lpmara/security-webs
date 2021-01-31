import React, {useState, useEffect} from 'react';
import styles from './about-us.less';
import NavBar from '../../components/navbar';
import ImageSwitch from '../../components/image-switch';
import Image from 'next/image';
import '../../public/styles/font.less';
import ModalImage from "react-modal-image";
import Gallery from "react-photo-gallery";
import {photos} from './photo';

export const Index = () => {

  const [textData, setTextData] = useState({
    textTitle1: 'เกี่ยวกับเรา',
    textTitle2: 'บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)',
    textTitle3: 'ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม)',
    textTitle4: 'บริษัทของเรามีประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์ การดูแลบุคคลสำคัญ มากกว่า "700" คน ทั่วโลก อาทิ นักการเมือง ,นักธุรกิจ ,ดาราศิลปิน ,จนถึงนักกีฬาอาชีพขอบคุณที่ไว้วางใจเราดูแลท่าน เมื่อท่านใช้บริการของเรา "เราปกป้องท่านด้วยชีวิต"',
    textTitle5: 'ประวัติของ ของ Bodyguard mr.chanthawat Pornnasaree',
    textTitle6: '1994-1995 ได้เรียนหลักสูตรบอดี้การ์ดเต็มขั้นเป็นระยะเวลา 1 ปีเต็ม ในสถาบันและองค์กรความลับของอเมริกา และได้จบมาทำงานบอดี้การ์ดมาทั้งสิ้น 26 ปี',
    textTitle7: 'จนปัจจุบันได้ดูแล VIP ทั้งดาราฮอลลี่วู้ดมาแล้วทั้งสิ้น 6 คน มี Clint Eastwood, Bruce Willis, Angelina Jolie, Chris Tucker, Michelle Yeoh, Michelle Yim และเอเย่นหานักฟุตบอลและดาราดังอีกหลายท่าน นักธุรกิจ ดูแลเจ้าของนาฬิกาโรเล็กซ์ และนักธุรกิจชื่อดังอีกหลายท่าน อีกทั้งเคยดูแลเลขา IMF ด้วย นักธุรกิจชาวเลบานอน นักธุรกิจชาวการ์ต้า นักกีฬา',
    textTitle8: 'เคยร่วมงานกับทีมบอดี้การ์ดของรัฐบาลดูแลทีมฟุตบอลมา 3 ทีม อาธิ Chelsea F.C., FC Barcelona, Manchester United F.C. บุคคลระหว่างประเทศ เคยดูแลท่านทูตญี่ปุ่น อาธิ ท่านทูตอาเจนติน่า ท่านทูตออสเตเรีย และรัฐมนตรีอเมริกา รองประธานาธิปบดีอเมริกา บุคคลทั่วไปนับไม่ถ้วนกับงาน Secret service อีกมากมายหลายคนในรอบ 26 ปีเดินทางไปมาแล้วหลายประเทศทั่วโลก',
  })
  const langChange = (lan) => {
    switch (lan) {
      case "TH" : {
        setTextData({
          textTitle1: 'เกี่ยวกับเรา',
          textTitle2: 'บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)',
          textTitle3: 'ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม)',
          textTitle4: 'บริษัทของเรามีประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์ การดูแลบุคคลสำคัญ มากกว่า "700" คน ทั่วโลก อาทิ นักการเมือง ,นักธุรกิจ ,ดาราศิลปิน ,จนถึงนักกีฬาอาชีพขอบคุณที่ไว้วางใจเราดูแลท่าน เมื่อท่านใช้บริการของเรา "เราปกป้องท่านด้วยชีวิต"',
          textTitle5: 'ประวัติของ ของ Bodyguard mr.chanthawat Pornnasaree',
          textTitle6: '1994-1995 ได้เรียนหลักสูตรบอดี้การ์ดเต็มขั้นเป็นระยะเวลา 1 ปีเต็ม ในสถาบันและองค์กรความลับของอเมริกา และได้จบมาทำงานบอดี้การ์ดมาทั้งสิ้น 26 ปี',
          textTitle7: 'จนปัจจุบันได้ดูแล VIP ทั้งดาราฮอลลี่วู้ดมาแล้วทั้งสิ้น 6 คน มี Clint Eastwood, Bruce Willis, Angelina Jolie, Chris Tucker, Michelle Yeoh, Michelle Yim และเอเย่นหานักฟุตบอลและดาราดังอีกหลายท่าน นักธุรกิจ ดูแลเจ้าของนาฬิกาโรเล็กซ์ และนักธุรกิจชื่อดังอีกหลายท่าน อีกทั้งเคยดูแลเลขา IMF ด้วย นักธุรกิจชาวเลบานอน นักธุรกิจชาวการ์ต้า นักกีฬา',
          textTitle8: 'เคยร่วมงานกับทีมบอดี้การ์ดของรัฐบาลดูแลทีมฟุตบอลมา 3 ทีม อาธิ Chelsea F.C., FC Barcelona, Manchester United F.C. บุคคลระหว่างประเทศ เคยดูแลท่านทูตญี่ปุ่น อาธิ ท่านทูตอาเจนติน่า ท่านทูตออสเตเรีย และรัฐมนตรีอเมริกา รองประธานาธิปบดีอเมริกา บุคคลทั่วไปนับไม่ถ้วนกับงาน Secret service อีกมากมายหลายคนในรอบ 26 ปีเดินทางไปมาแล้วหลายประเทศทั่วโลก',
        })
        break;
      }
      case "EN" : {
        setTextData({
          textTitle1: 'About us',
          textTitle2: 'Our company offers a service for personal care and escort (Vip).',
          textTitle3: 'The level of care from the basics to the highest level (24 hrs.)',
          textTitle4: 'Our company has over 26 years of experience in custody of key personnel with extensive security training experience. According to international standards And experienced Caring for more than 700 important people around the world such as politicians, businessmen, celebrities, artists, and professional athletes. Thank you for trusting us. When you use our services "We protect you with life"',
          textTitle5: 'History of Bodyguard mr.chanthawat Pornnasaree',
          textTitle6: '1994-1995 You have completed one full year of the Bodyguard course in a secret American institution and organization. And graduated from work in bodyguard for a total of 26 years',
          textTitle7: 'Until now, he has taken care of VIPs for all six hollywood stars, including Clint Eastwood, Bruce Willis, Angelina Jolie, Chris Tucker, Michelle Yeoh, Michelle Yim and many more famous footballers and celebrities. Rolex watch owner care business And many other famous businessmen He also oversees the IMF secretary as well, a Lebanese businessman. Qatar businessman athlete',
          textTitle8: 'He has worked with government bodyguards to run three football teams: Chelsea F.C., FC Barcelona, ​​Manchester United F.C. Used to supervise the Japanese ambassador Athi, the Ambassador of Argentina Ambassador of Australia And the American minister Vice President of America Countless people and many other Secret service events. Many people over the past 26 years have traveled to many countries around the world.',
        })
        break;
      }
    }
  }
  useEffect(()=>{
    const localStorageOut = localStorage.getItem('languageSecue') || "TH";
    langChange(localStorageOut);
  },[])
  return (
    <>
      <NavBar changeLanguage={langChange}  />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.MainBackground}>
          <div className={styles.flexContainerTop}>
            <div className={styles.title}>
              {textData.textTitle1}
            </div>
            <div className={styles.textNormal1}>
              <div>{textData.textTitle2}</div>
              <div>{textData.textTitle3}</div>
            </div>
            <div className={styles.textNormal2}>
              {textData.textTitle4}
            </div>
            <div className={styles.titleImage}>
            <Image
loading={'eager'}
                alt={'about us image 0'}
                src={'/images/about-us/232028.jpg'}
                width={1878}
                height={872}
              />
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.leftContent}>
            <Image
loading={'eager'}
                alt={'about us image 1'}
                src={'/images/about-us/301130.jpg'}
                width={1126}
                height={1444}
              />
            </div>
            <div className={styles.rightContent}>
              <div className={styles.titleText}>{textData.textTitle5}</div>
              <div className={styles.Text1}>&nbsp;&nbsp;&nbsp;&nbsp;{textData.textTitle6}</div>
              <div className={styles.Text2}>&nbsp;&nbsp;&nbsp;&nbsp;{textData.textTitle7}</div>
              <div className={styles.Text3}>&nbsp;&nbsp;&nbsp;&nbsp;{textData.textTitle8}</div>
            </div>
          </div>
          <div className={styles.imagePicTCUFirst}>
              <Image
                  loading={'eager'}
                  alt={'Image about TCU2'}
                  src={'/images/about-us/326702.jpg'}
                  width={988}
                  height={752}
                />
            </div>
          <div className={styles.flexTCU}>
          <Gallery photos={photos} margin={5} columns={3} direction={"column"} />
          </div>
          </div>
      </div>
    </>
  );
};

export default Index;
