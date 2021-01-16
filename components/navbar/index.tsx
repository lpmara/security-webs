import React, {useState} from 'react';
import Image from 'next/image';
import styles from './navbar.less';
import Link from 'next/link';
export const Index = () => {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

  const mobileNav = <div className={styles.mobileContainer}>
    <div className={styles.navbarTitle}>
      <div className={styles.flexTopContainer}>
            <div className={styles.emailText}>
              bodyguard.5559@gmail.com
            </div>
            <div className={styles.telNumber1}>(+66) 89 496 2596</div>
            <div className={styles.telNumber2}>(+66) 82 283 9789</div>
          </div>
      </div>
    <div className={styles.navbarDetail}>
      <div className={styles.flexNavDetail}>
        <div className={styles.imageLogo}>
                <Image
                  loading={'eager'}
                  className={styles.leftLogo}
                  src="/images/logo001-removebg-preview.png"
                  alt="secue-logo2"
                  width={56}
                  height={52}
                />
                 <Image
                  loading={'eager'}
                  className={styles.leftLogo}
                  src="/images/301122-removebg-preview.png"
                  alt="secue-logo2"
                  width={95}
                  height={52}
                />
                              <Image
                  loading={'eager'}
                  className={styles.leftLogo}
                  src="/images/logo1.png"
                  alt="secue-logo2"
                  width={56}
                  height={52}
                />
        </div>
        <div
              id="MenuMobile"
              className={styles.MenuListMobile}
              onClick={() => setToggleMenuMobile(!toggleMenuMobile)}
            >
              <div className={styles.MenuIcon}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

      </div>
    </div>
  </div>

  const mobileMenu =           
  <div className={styles.mobileNavContainer}>
  <ul className={styles.ulContainer}>
    <li>
      <Link href="/">
        <label>หน้าแรก</label>
      </Link>
    </li>
    <li>
      <Link href="/our-partner">
        <label>พาร์ทเนอร์</label>
      </Link>
    </li>
    <li>
      <Link href="/our-service">
        <label>บริการของเรา</label>
      </Link>
    </li>
    <li>
      <Link href="/security-training">
        <label>หลักสูตร</label>
      </Link>
    </li>
    <li>
      <Link href="/contact-us">
        <label>ติดต่อเรา</label>
      </Link>
    </li>
    <li>
      <Link href="/about-us">
        <label>เกี่ยวกับเรา</label>
      </Link>
    </li>
    <li>
      <Link href="/join-us">
        <label>ร่วมงานกับเรา</label>
      </Link>
    </li>
  </ul>
</div>


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
loading={'eager'}
              className={styles.leftLogo}
              src="/images/logo001-removebg-preview.png"
              alt="secue-logo2"
              width={86}
              height={82}
            />
            <Image
                  loading={'eager'}
                  className={styles.leftLogo}
                  src="/images/301122-removebg-preview.png"
                  alt="secue-logo2"
                  width={156}
                  height={82}
                />
                              <Image
                  loading={'eager'}
                  className={styles.leftLogo}
                  src="/images/logo1.png"
                  alt="secue-logo2"
                  width={86}
                  height={82}
                />
          </div>
          <div className={styles.centerLink}>
            <Link href="/">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleHome}>หน้าแรก</div>
              </span>
            </Link>
            <Link href="/our-partner">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleWork}>พาร์ทเนอร์</div>
              </span>
            </Link>
            <Link href="/our-service">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleWork}>บริการของเรา</div>
              </span>
            </Link>
            <Link href="/security-training">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleContact}>หลักสูตร</div>
              </span>
            </Link>
            <Link href="/contact-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleContact}>ติดต่อเรา</div>
              </span>
            </Link>
            <Link href="/about-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleAbout}>เกี่ยวกับเรา</div>
              </span>
            </Link>
            <Link href="/join-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleJoin}>ร่วมงานกับเรา</div>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {mobileNav}
      {toggleMenuMobile && mobileMenu}
    </div>
  );
};

export default Index;
