import React from 'react';
import styles from './about-us.less';
import NavBar from '../../components/navbar';
import ImageSwitch from '../../components/image-switch';
import Image from 'next/image';
import '../../public/styles/font.less';
import ModalImage from "react-modal-image";
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
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246668.jpg'}
                medium={'/images/about-us/246668.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246669.jpg'}
                medium={'/images/about-us/246669.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246670.jpg'}
                medium={'/images/about-us/246670.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246671.jpg'}
                medium={'/images/about-us/246671.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246676.jpg'}
                medium={'/images/about-us/246676.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246672.jpg'}
                medium={'/images/about-us/246672.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246673.jpg'}
                medium={'/images/about-us/246673.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246674.jpg'}
                medium={'/images/about-us/246674.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246675.jpg'}
                medium={'/images/about-us/246675.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246687.jpg'}
                medium={'/images/about-us/246687.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246678.jpg'}
                medium={'/images/about-us/246678.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246684.jpg'}
                medium={'/images/about-us/246684.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246685.jpg'}
                medium={'/images/about-us/246685.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246692.jpg'}
                medium={'/images/about-us/246692.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246688.jpg'}
                medium={'/images/about-us/246688.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246689.jpg'}
                medium={'/images/about-us/246689.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246686.jpg'}
                medium={'/images/about-us/246686.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246693.jpg'}
                medium={'/images/about-us/246693.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246694.jpg'}
                medium={'/images/about-us/246694.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246695.jpg'}
                medium={'/images/about-us/246695.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246697.jpg'}
                medium={'/images/about-us/246697.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246698.jpg'}
                medium={'/images/about-us/246698.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246699.jpg'}
                medium={'/images/about-us/246699.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246700.jpg'}
                medium={'/images/about-us/246700.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246701.jpg'}
                medium={'/images/about-us/246701.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246702.jpg'}
                medium={'/images/about-us/246702.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246703.jpg'}
                medium={'/images/about-us/246703.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246707.jpg'}
                medium={'/images/about-us/246707.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246708.jpg'}
                medium={'/images/about-us/246708.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246709.jpg'}
                medium={'/images/about-us/246709.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246710.jpg'}
                medium={'/images/about-us/246710.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246711.jpg'}
                medium={'/images/about-us/246711.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246712.jpg'}
                medium={'/images/about-us/246712.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246713.jpg'}
                medium={'/images/about-us/246713.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246714.jpg'}
                medium={'/images/about-us/246714.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246715.jpg'}
                medium={'/images/about-us/246715.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246716.jpg'}
                medium={'/images/about-us/246716.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246737.jpg'}
                medium={'/images/about-us/246737.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246738.jpg'}
                medium={'/images/about-us/246738.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246739.jpg'}
                medium={'/images/about-us/246739.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246756.jpg'}
                medium={'/images/about-us/246756.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246757.jpg'}
                medium={'/images/about-us/246757.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246758.jpg'}
                medium={'/images/about-us/246758.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246759.jpg'}
                medium={'/images/about-us/246759.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246760.jpg'}
                medium={'/images/about-us/246760.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246761.jpg'}
                medium={'/images/about-us/246761.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246762.jpg'}
                medium={'/images/about-us/246762.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246763.jpg'}
                medium={'/images/about-us/246763.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246764.jpg'}
                medium={'/images/about-us/246764.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246765.jpg'}
                medium={'/images/about-us/246765.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246766.jpg'}
                medium={'/images/about-us/246766.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246767.jpg'}
                medium={'/images/about-us/246767.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246768.jpg'}
                medium={'/images/about-us/246768.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246769.jpg'}
                medium={'/images/about-us/246769.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246770.jpg'}
                medium={'/images/about-us/246770.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246771.jpg'}
                medium={'/images/about-us/246771.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246774.jpg'}
                medium={'/images/about-us/246774.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246775.jpg'}
                medium={'/images/about-us/246775.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246780.jpg'}
                medium={'/images/about-us/246780.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246784.jpg'}
                medium={'/images/about-us/246784.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246799.jpg'}
                medium={'/images/about-us/246799.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246809.jpg'}
                medium={'/images/about-us/246809.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246810.jpg'}
                medium={'/images/about-us/246810.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246811.jpg'}
                medium={'/images/about-us/246811.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/258944.jpg'}
                medium={'/images/about-us/258944.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/258945.jpg'}
                medium={'/images/about-us/258945.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/258946.jpg'}
                medium={'/images/about-us/258946.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298019.jpg'}
                medium={'/images/about-us/298019.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298020.jpg'}
                medium={'/images/about-us/298020.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298021.jpg'}
                medium={'/images/about-us/298021.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298022.jpg'}
                medium={'/images/about-us/298022.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298023.jpg'}
                medium={'/images/about-us/298023.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298024.jpg'}
                medium={'/images/about-us/298024.jpg'}
                alt="im0001"
              />
            </div>

            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/298025.jpg'}
                medium={'/images/about-us/298025.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/326698.jpg'}
                medium={'/images/about-us/326698.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/326699.jpg'}
                medium={'/images/about-us/326699.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/326700.jpg'}
                medium={'/images/about-us/326700.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/326701.jpg'}
                medium={'/images/about-us/326701.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/327753.jpg'}
                medium={'/images/about-us/327753.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/327754.jpg'}
                medium={'/images/about-us/327754.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246664.jpg'}
                medium={'/images/about-us/246664.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246665.jpg'}
                medium={'/images/about-us/246665.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246667.jpg'}
                medium={'/images/about-us/246667.jpg'}
                alt="im0001"
              />
            </div>
            <div className={styles.imageBorder}>
              <ModalImage
                small={'/images/about-us/246718.jpg'}
                medium={'/images/about-us/246718.jpg'}
                alt="im0001"
              />
            </div>
          </div>
          </div>
      </div>
    </>
  );
};

export default Index;
