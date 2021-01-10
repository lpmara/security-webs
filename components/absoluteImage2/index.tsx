import React from 'react';
import styles from './absuluteImage2.less';
import Image from 'next/image';


export const Index = () => {
  return (
    <div className={styles.ContentTwoSize}>
      <div className={styles.mainBackgroundLayer}>
        <div className={styles.flexContainer}>
          <div className={styles.leftSideContent}> 
            <div className={styles.detailText}>Services We Offer</div>
            <div className={styles.detail1}>
                <div>We offer a variety of high-quality Security, close protection services and training to ensure high-quality security for businesses            
companies, diplomats, people, and VIPs in a different range of environments. We providing the most professional	              
and cost-effective training and security services in Europe and the Middle East.</div>
            </div>
            <div className={styles.detail2}>
                <div>
Years ago, and after some investigating and intense planning, International VIP Bodyguard was born. Our number one goal is to provide high-quality Security, Close protection services and training.</div>
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
loading={'eager'}
                alt={'Professional center image'}
                src={'/images/koo1_preview_rev_1.png'}
                width={418}
                height={599}
              />
                </div>
                {/* <div className={styles.textDetail2}>

              <Image
loading={'eager'}
                alt={'Professional center image'}
                src={'/images/beer001_preview_rev_1.png'}
                width={561}
                height={445}
              />
                </div> */}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
