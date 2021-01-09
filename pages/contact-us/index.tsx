import React from 'react';
import styles from './contact-us.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.topImage}>
          <div className={styles.headerBannerContactUs}>
            <div className={styles.contactUsTitle}>Contact</div>
            <div className={styles.subTitle}>
            บริษัทของเรา ขอนำเสนอบริการดูแลและคุ้มกันบุคคลสำคัญ(Vip)

            </div>
            <div className={styles.subTitle}>
            ระดับการดูแลตั้งแต่พื้นฐานจนถึงระดับสูงสุด(24 ช.ม){' '}
              <span className={styles.callCenter}>
                
              </span>
            </div>
          </div>
        </div>
        <div className={styles.positionContactForm}>
          <div className={styles.formContactUsContainer}>
            <div className={styles.groupform}>
              <div className={styles.leftForm}>
                <div className={styles.formLeftcontainer}>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      <div>(+66) 89 496 2596 (Mr.ken)</div>
                      <div>(+66) 82 283 9789 (Mr.ken)</div>
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>Line: TeamKen.111</div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      We chat: wxid_y00q2dynw9zg22
                    </div>
                  </div>
                  <div className={styles.gruopListContact}>
                    <div className={styles.contactText}>
                      Email: bodyguard.5559@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
