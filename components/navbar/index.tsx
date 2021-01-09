import React from 'react';
import Image from 'next/image';
import styles from './navbar.less';
import Link from 'next/link';
export const Index = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.topMenu}>
        <div className={styles.flexTopContainer}>
          <div className={styles.emailText}>
            bodyguard.5559@gmail.com
          </div>
          <div className={styles.telNumber1}>(+66) 89 496 2596</div>
          <div className={styles.telNumber2}>(+66) 82 283 9789</div>
        </div>
      </div>
      <div className={styles.bottomMenu}>
        <div className={styles.flexBottomContainer}>
          <div className={styles.imageLogo}>
            <Image
              className={styles.leftLogo}
              src="/images/logo001-removebg-preview.png"
              alt="secue-logo2"
              width={86}
              height={82}
            />
            {/* <Image
              className={styles.rightLogo}
              src="/images/logo2.png"
              alt="secue-logo2"
              width={68}
              height={68}
            /> */}
          </div>
          <div className={styles.centerLink}>
            <Link href="/">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleHome}>Home</div>
              </span>
            </Link>
            <Link href="/our-partner">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleWork}>Our Partner</div>
              </span>
            </Link>
            <Link href="/our-service">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleWork}>Our Works</div>
              </span>
            </Link>
            <Link href="/contact-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleContact}>Contact Us</div>
              </span>
            </Link>
            <Link href="/about-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleAbout}>About Us</div>
              </span>
            </Link>
            <Link href="/join-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleJoin}>Join Us</div>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className={styles.MainContainer}>
        <div className={styles.flexContainer}>
          <Image
            className={styles.leftLogo}
            src="/images/logo001-removebg-preview.png"
            alt="secue-logo2"
            width={68}
            height={68}
          />
          <Link href="/">
            <span style={{ cursor: 'pointer' }}>
              <div className={styles.TitleHome}>Home</div>
            </span>
          </Link>
          <Link href="/our-partner">
            <span style={{ cursor: 'pointer' }}>
              <div className={styles.TitleWork}>Our Partner</div>
            </span>
          </Link>
          <Link href="/our-service">
            <span style={{ cursor: 'pointer' }}>
              <div className={styles.TitleWork}>Our Works</div>
            </span>
          </Link>
          <Link href="/contact-us">
            <span style={{ cursor: 'pointer' }}>
              <div className={styles.TitleContact}>Contact Us</div>
            </span>
          </Link>
          <Link href="/aboute-us">
            <span style={{ cursor: 'pointer' }}>
              <div className={styles.TitleAbout}>About Us</div>
            </span>
          </Link>

          <Image
            className={styles.rightLogo}
            src="/images/logo2.png"
            alt="secue-logo2"
            width={68}
            height={68}
          />
        </div>
      </div> */}
    </div>
  );
};

export default Index;
