import React from 'react';
import styles from './about-us.less';
import NavBar from '../../components/navbar';
import ImageSwitch from '../../components/image-switch';
import Image from 'next/image';
export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.MainBackground}>
          <div className={styles.flexContainerTop}>
            <div className={styles.title}>
              เกี่ยวกับเรา
            </div>
            <div className={styles.textNormal1}>
              <div>บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)</div>
              <div>ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม)</div>
            </div>
            <div className={styles.textNormal2}>
              บริษัทของเรามีประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์ การดูแลบุคคลสำคัญ มากกว่า "700" คน ทั่วโลก อาทิ นักการเมือง ,นักธุรกิจ ,ดาราศิลปิน ,จนถึงนักกีฬาอาชีพขอบคุณที่ไว้วางใจเราดูแลท่าน เมื่อท่านใช้บริการของเรา "เราปกป้องท่านด้วยชีวิต"
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
              <div className={styles.titleText}>ประวัติของ ของ Bodyguard mr.chanthawat Pornnasaree</div>
              <div className={styles.Text1}>&nbsp;&nbsp;&nbsp;&nbsp;1994-1995 ได้เรียนหลักสูตรบอดี้การ์ดเต็มขั้นเป็นระยะเวลา 1 ปีเต็ม ในสถาบันและองค์กรความลับของอเมริกา และได้จบมาทำงานบอดี้การ์ดมาทั้งสิ้น 26 ปี</div>
              <div className={styles.Text2}>&nbsp;&nbsp;&nbsp;&nbsp;จนปัจจุบันได้ดูแล VIP ทั้งดาราฮอลลี่วู้ดมาแล้วทั้งสิ้น 6 คน มี Clint Eastwood, Bruce Willis, Angelina Jolie, Chris Tucker, Michelle Yeoh, Michelle Yim และเอเย่นหานักฟุตบอลและดาราดังอีกหลายท่าน นักธุรกิจ ดูแลเจ้าของนาฬิกาโรเล็กซ์ และนักธุรกิจชื่อดังอีกหลายท่าน อีกทั้งเคยดูแลเลขา IMF ด้วย นักธุรกิจชาวเลบานอน นักธุรกิจชาวการ์ต้า นักกีฬา </div>
              <div className={styles.Text3}>&nbsp;&nbsp;&nbsp;&nbsp;เคยร่วมงานกับทีมบอดี้การ์ดของรัฐบาลดูแลทีมฟุตบอลมา 3 ทีม อาธิ Chelsea F.C., FC Barcelona, Manchester United F.C. บุคคลระหว่างประเทศ เคยดูแลท่านทูตญี่ปุ่น อาธิ ท่านทูตอาเจนติน่า ท่านทูตออสเตเรีย และรัฐมนตรีอเมริกา รองประธานาธิปบดีอเมริกา บุคคลทั่วไปนับไม่ถ้วนกับงาน Secret service อีกมากมายหลายคนในรอบ 26 ปีเดินทางไปมาแล้วหลายประเทศทั่วโลก</div>
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
          <div className={styles.imagePicTCU}>
              <Image
loading={'eager'}
                  alt={'Image about TCU1'}
                  src={'/images/about-us/326700.jpg'}
                  width={904}
                  height={1204}
                />
            </div>
            <div className={styles.imagePicTCU}>
              <Image
loading={'eager'}
                  alt={'Image about TCU2'}
                  src={'/images/about-us/326701.jpg'}
                  width={904}
                  height={1204}
                />
            </div>
          </div>
          <div className={styles.flexImageContainer}>
            <div className={styles.imagePic}>
              <Image
loading={'eager'}
                  alt={'Image about 1'}
                  src={'/images/about-us/298019.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 2'}
                  src={'/images/about-us/298020.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 3'}
                  src={'/images/about-us/298022.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 4'}
                  src={'/images/about-us/298024.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 5'}
                  src={'/images/about-us/298023.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 6'}
                  src={'/images/about-us/298021.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 7'}
                  src={'/images/about-us/327753.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePic}>
            <Image
loading={'eager'}
                  alt={'Image about 8'}
                  src={'/images/about-us/327754.jpg'}
                  width={1078}
                  height={756}
                />
            </div>
            <div className={styles.imagePicL}>
            <Image
loading={'eager'}
                  alt={'Image about 9'}
                  src={'/images/about-us/326698.jpg'}
                  width={980}
                  height={1270}
                />
            </div>
            <div className={styles.imagePicL}>
            <Image
loading={'eager'}
                  alt={'Image about 9'}
                  src={'/images/about-us/326699.jpg'}
                  width={980}
                  height={1270}
                />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
