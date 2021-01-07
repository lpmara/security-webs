import React from 'react';
import styles from './join-us.less';
import NavBar from '../../components/navbar';
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
              ร่วมงานกับเรา
            </div>
            <div className={styles.textNormal1}>
              <div>มาร่วมเป็นส่วนหนึ่งของงาน บอดี้การ์ด รักษาความปลอดภัยให้กับบุคลสำคัญ</div>
              <div style={{paddingTop: '30px', textDecoration: 'underline'}}>ติดต่อ Mr.ken (+66) 99 496 xxxx</div>
            </div>
            <div className={styles.textExample}>
                ตัวอย่าง บัตรประจำตัวบอดี้การ์ดของเรา
            </div>
            <div className={styles.imageCorp}>
            <Image
                    src={'/images/join-us/308633_censored.jpg'}
                    alt={'image 0000'}
                    width={650}
                    height={1063}
                  />
                   <Image
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
                    src={'/images/join-us/309696.jpg'}
                    alt={'bodyguard register form'}
                    width={925}
                    height={1246}
                  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
