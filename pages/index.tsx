import React from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
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
      {/* <AbsoluteImage /> */}
      <div className={styles.flexContainer}>
      
        <div className={styles.Title}>Bodyguard VIP and Security Protection</div>https://youtu.be/mPOMqwfAodI
        <div className={styles.centerVideo}>
          <ReactPlayer url="https://youtu.be/A-mToYDNsbo"  width='95%'
          height='720px'/>
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
          </div>
          <div className={styles.rightContent}>
              <div className={styles.textContent}>
                <div>บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)</div>
                <div>ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม)</div>
              </div>
              <div className={styles.centerVideo}>
                <ReactPlayer url="https://youtu.be/kH7Jsu4GBNs"  width='95%' height='440px'/>
              </div>
              <div className={styles.imageOptimize1}>
              <Image
loading={'eager'}
                    src={'/images/301122-removebg-preview.png'}
                    alt={'image 0002'}
                    width={673}
                    height={370}
                  />
              </div>
              <div className={styles.textGarutee}>การันตีด้วยทีมงานที่มีประสบการณ์ การคุ้มกันบุคลสำคัญจำนวนมาก</div>
              <div className={styles.imageOptimize}>
              <Image
loading={'eager'}
                    src={'/images/232006.jpg'}
                    alt={'image 0003'}
                    width={1878}
                    height={872}
                  />
              </div>
          </div>
        </div>
      </div>
      <AbsoluteImage2 />
    </div>
    </>
  );
};

export default Index;
