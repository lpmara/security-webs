import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import '../public/styles/font.less';
import styles from './index.module.less';
import Layout from '../components/layout';
import NavBar from '../components/navbar';
import AbsoluteImage from '../components/absoluteImage';
import AbsoluteImage2 from '../components/absoluteImage2';
import '../public/styles/global.less';

export const Index = () => {
  return (
    <>
    <NavBar />
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
                    src={'/images/301127.jpg'}
                    alt={'image 0000'}
                    width={1125}
                    height={1068}
                  /></div>
            <div>
              <Image
                    loading={'eager'}
                    src={'/images/301132.jpg'}
                    alt={'image 0001'}
                    width={1048}
                    height={1563}
                  /></div>
                  <div>
                   
                  </div>
          </div>
          <div className={styles.rightContent}>
              <div className={styles.textContent}>
                <div>บริษัทของเราสามารถนำเสนอ บริการคุ้มกันบุคคลสำคัญ </div>
                <div>ในระดับสูงสุด ในประเทศไทยและทั่วโลก</div>
              </div>
              <div className={styles.messageContent}>
                <p>
                บริษัทเรา มีบุคลากรไว้พร้อมรองรับงานด้านต่างๆ เกี่ยวกับเรื่องการรักษาความปลอดภัยที่ท่านจะใช้บริการทุกอย่าง ซึ่งทางเรามีบุคลากรพร้อม โดยผ่านการฝึกหลักสูตรบอดี้การ์ดด้านการรักษาความภัย และบุคลากรของเราได้ผ่านการฝึก ทั้งการต่อสู้ด้วยมือปล่าว และการต่อสู้ด้วยอาวุธ และทางเรามี Partner อยู่ทั่วโลกพร้อมที่จะทำงานได้ทุกประเทศที่ท่านต้องการ เรามีสิ่งต่างๆไว้บริการท่าน ทั้งรถ ทั้งเรือ ทั้งเครื่องบิน และการบริการหาที่พักต่างๆให้กับลูกค้าด้วย
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
              <div className={styles.textGarutee}>การันตีด้วยทีมงานที่มีประสบการณ์ การคุ้มกันบุคลสำคัญจำนวนมาก</div>
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
      </div>
    </div>
    </>
  );
};

export default Index;
