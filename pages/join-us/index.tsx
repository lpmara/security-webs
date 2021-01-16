import React from 'react';
import styles from './join-us.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
import ReactPlayer from 'react-player';
export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.MainBackground}>
          <div className={styles.flexContainerTop}>
            <div className={styles.title}>
              ร่วมงานกับเรา
            </div>
            <div className={styles.textNormal1}>
              <div>มาร่วมเป็นส่วนหนึ่งของงาน บอดี้การ์ด รักษาความปลอดภัยให้กับบุคลสำคัญ</div>
              <div style={{paddingTop: '30px', textDecoration: 'underline'}}>ติดต่อ Mr.ken (+66) 89 496 2596</div>
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
                ตัวอย่าง บัตรประจำตัวบอดี้การ์ดของเรา
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
                ฟอร์มสมัครสมาชิก
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
