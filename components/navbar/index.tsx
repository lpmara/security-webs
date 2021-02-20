import React, {useState, useContext, useEffect} from 'react';
import Image from 'next/image';
import styles from './navbar.less';
import Link from 'next/link';
// import RootContext from '../layout/RootContext';
interface changeLanguageInterface {
  changeLanguage?: Function;
}
export const Index = ({changeLanguage}:changeLanguageInterface) => {

  const [colorTh, setColorTh] = useState("red");
  const [colorEn, setColorEn] = useState("");
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);
  const [textData, setTextData] = useState({
    textDetail1: 'Home',
    textDetail2: 'Partner',
    textDetail3: 'Our Service',
    textDetail4: 'Training',
    textDetail5: 'Contact Us',
    textDetail6: 'About Us',
    textDetail7: 'Join Us',
  })

  
  const changeLang = (currentLang) =>{
    switch (currentLang) {
      case "TH" : {
        setTextData({
          textDetail1: 'หน้าแรก',
          textDetail2: 'พาร์ทเนอร์',
          textDetail3: 'บริการของเรา',
          textDetail4: 'หลักสูตร',
          textDetail5: 'ติดต่อเรา',
          textDetail6: 'เกี่ยวกับเรา',
          textDetail7: 'ร่วมงานกับเรา',
        })
        break;
      }
      case "EN" : {
        setTextData({
          textDetail1: 'Home',
          textDetail2: 'Partner',
          textDetail3: 'Our Service',
          textDetail4: 'Training',
          textDetail5: 'Contact Us',
          textDetail6: 'About Us',
          textDetail7: 'Join Us',
        })
        break;
      }
    }
  }
  const handleChangeLanguage = (lang) => {
    localStorage.setItem('languageSecue', lang);
    changeLanguage(lang)
    changeLang(lang);
    if(lang === 'TH'){
      setColorTh('red');
      setColorEn('');
    }else{
      setColorTh('');
      setColorEn('red');
    }
  }

  useEffect(()=>{
    const localStorageOut = localStorage.getItem('languageSecue') || "EN";
    changeLang(localStorageOut);
    if(localStorageOut === 'EN'){
      setColorTh('');
      setColorEn('red');
    }
    
    
  }, []) 


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
        <div onClick={()=>handleChangeLanguage("EN")} className={styles.flagLanguageEN} style={{color:colorEn}}>EN</div>
        <div onClick={()=>handleChangeLanguage("TH")} className={styles.flagLanguageTH} style={{color:colorTh}}>TH</div>
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
        <label>{textData.textDetail1}</label>
      </Link>
    </li>
    <li>
      <Link href="/our-partner">
        <label>{textData.textDetail2}</label>
      </Link>
    </li>
    <li>
      <Link href="/our-service">
        <label>{textData.textDetail3}</label>
      </Link>
    </li>
    <li>
      <Link href="/security-training">
        <label>{textData.textDetail4}</label>
      </Link>
    </li>
    <li>
      <Link href="/contact-us">
        <label>{textData.textDetail5}</label>
      </Link>
    </li>
    <li>
      <Link href="/about-us">
        <label>{textData.textDetail6}</label>
      </Link>
    </li>
    <li>
      <Link href="/join-us">
        <label>{textData.textDetail7}</label>
      </Link>
    </li>
  </ul>
</div>


  return (
    <div className={styles.centerContainer}>
      <div className={styles.topMenu}>
        <div className={styles.flexTopContainer}>
          <div className={styles.flexTwoSide}>
            <div className={styles.emailText}>
              bodyguard.5559@gmail.com
            </div>
            <div className={styles.telNumber1}>(+66) 89 496 2596</div>
            <div className={styles.telNumber2}>(+66) 82 283 9789</div>
          </div>
          <div className={styles.flexLangauge}>
            <div onClick={()=>handleChangeLanguage("EN")} className={styles.flagLanguageEN} style={{color:colorEn}}>EN</div>
            <div onClick={()=>handleChangeLanguage("TH")} className={styles.flagLanguageTH} style={{color:colorTh}}>TH</div>
          </div>
          
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
                <div className={styles.TitleHome}>{textData.textDetail1}</div>
              </span>
            </Link>
            <Link href="/our-partner" shallow={true}>
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleWork}>{textData.textDetail2}</div>
              </span>
            </Link>
            <Link href="/our-service">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleWork}>{textData.textDetail3}</div>
              </span>
            </Link>
            <Link href="/security-training">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleContact}>{textData.textDetail4}</div>
              </span>
            </Link>
            <Link href="/contact-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleContact}>{textData.textDetail5}</div>
              </span>
            </Link>
            <Link href="/about-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleAbout}>{textData.textDetail6}</div>
              </span>
            </Link>
            <Link href="/join-us">
              <span style={{ cursor: 'pointer' }}>
                <div className={styles.TitleJoin}>{textData.textDetail7}</div>
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
