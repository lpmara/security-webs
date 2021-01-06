import React from 'react';
import styles from './absuluteImage2.less';
import Image from 'next/image';


export const Index = () => {
  return (
    <div className={styles.ContentTwoSize}>
      <div className={styles.mainBackgroundLayer}>
        <div className={styles.flexContainer}>
          <div className={styles.leftSideContent}> 
            <div className={styles.detailText}>Our Service</div>
            <div className={styles.detail1}>
                <div>บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)</div>
                <div>ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม)</div>
            </div>
            <div className={styles.detail2}>
                <div>บริษัทของเรามีประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์ การดูแลบุคคลสำคัญ มากกว่า "700" คน ทั่วโลก อาทิ นักการเมือง ,นักธุรกิจ ,ดาราศิลปิน ,จนถึงนักกีฬาอาชีพขอบคุณที่ไว้วางใจเราดูแลท่าน เมื่อท่านใช้บริการของเรา "เราปกป้องท่านด้วยชีวิต"</div>
            </div>
          </div>
          <div className={styles.rightSideContent}>
            <div className={styles.titleText}>
                {/* <div>Bodyguard VIP And Security Protection</div>  */}
                {/* <div style={{paddingLeft: '15px'}}></div> */}
            </div>
              <div className={styles.detailText}>
                <div className={styles.textDetail}>
                <Image
                alt={'Professional center image'}
                src={'/images/beer001_preview_rev_1.png'}
                width={561}
                height={445}
              />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
