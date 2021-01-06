import React from 'react';
import Image from 'next/image';
import styles from './layout.less';
import '../../public/styles/global.less';
export const Index = () => {
  return (
    <div className={styles.MainContainer}>
      {/* <img src={'/images/logo1.png'} alt="secue-logo2" /> */}
      {/* <img src={'/images/logo2.png'} alt="secue-logo2" /> */}
      <div className={styles.centerContainer}>
        <Image
          className={styles.leftLogo}
          src="/images/logo1.png"
          alt="secue-logo2"
          width={240}
          height={240}
        />
        <Image
          className={styles.rightLogo}
          src="/images/logo2.png"
          alt="secue-logo2"
          width={240}
          height={240}
        />
      </div>
      
    </div>
  );
};

export default Index;