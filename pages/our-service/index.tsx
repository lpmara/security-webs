import React, {useState, useEffect} from 'react';
import styles from './our-service.less';
import '../../public/styles/custom.less';
import '../../public/styles/font.less';
import NavBar from '../../components/navbar';
import ImageSwitch from '../../components/image-switch';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
export const Index = () => {

  const [textData, setTextData] = useState({
    textdetail1: 'ด้วยประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์',
    textdetail2: 'เรามีความสามารถใช้เทคโนโลยีด้านการรักษาความปลอดภัย เพื่อส่งเสริมให้ท่านมีความปลอดภัยสูงสุด เราสัญญาว่าชีวิต และทรัพย์สินของท่านจะปลอดภัย ใช้บริการของเรา',
    textTitle1: '1. ดูแลความปลอดภัย ขั้นต่ำถึงสูงสุด มีบริการตั้งแต่ 10 ชั่วโมง - 24 ชั่วโมง',
    textTitle2: '2. รับทำงานทั้งนอกเครื่องแบบ และ ในเครื่องแบบ',
    textTitle3: '(สามารถปรับเปลี่ยนได้ตามสถานการณ์)',
    textTitle4: '3. การทำงานแบบ มีอาวุธ และไม่มีอาวุธ (สามารถปรับเปลี่ยนได้ตามสถานการณ์)',
    textTitle5: '4. รับงานในลักษณะของ Secret Service',
    textTitle6: '5. สามารถจัดหา รถลีมูซีน เรือยอช เฮลิคอปเตอร์ และเครื่องบินส่วนตัว',
    textTitle7: '6. มีบริการจัดหาที่พัก ตามความต้องการของลูกค้า',
    textTitle8: '7. สามารถจัดหา Butler (Butler Service)',
    textTitle9: '8. มีบริการบุคลากรที่ชำนาญการท่องเที่ยว และสถานที่ท่องเที่ยวต่าง',
    textTitle10: '9. รับบริการทั้งในและนอกประเทศ Agent ทุกคนมีตราประจำตัว',
    textTitle11: 'เรามี Partner อยู่ทั่วโลกคอยบริการท่าน',
  })
  const langChange = (lan) => {
    switch (lan) {
      case "TH" : {
        setTextData({
          textdetail1: 'ด้วยประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์',
          textdetail2: 'เรามีความสามารถใช้เทคโนโลยีด้านการรักษาความปลอดภัย เพื่อส่งเสริมให้ท่านมีความปลอดภัยสูงสุด เราสัญญาว่าชีวิต และทรัพย์สินของท่านจะปลอดภัย ใช้บริการของเรา',
          textTitle1: '1. ดูแลความปลอดภัย ขั้นต่ำถึงสูงสุด มีบริการตั้งแต่ 10 ชั่วโมง - 24 ชั่วโมง',
          textTitle2: '2. รับทำงานทั้งนอกเครื่องแบบ และ ในเครื่องแบบ',
          textTitle3: '(สามารถปรับเปลี่ยนได้ตามสถานการณ์)',
          textTitle4: '3. การทำงานแบบ มีอาวุธ และไม่มีอาวุธ (สามารถปรับเปลี่ยนได้ตามสถานการณ์)',
          textTitle5: '4. รับงานในลักษณะของ Secret Service',
          textTitle6: '5. สามารถจัดหา รถลีมูซีน เรือยอช เฮลิคอปเตอร์ และเครื่องบินส่วนตัว',
          textTitle7: '6. มีบริการจัดหาที่พัก ตามความต้องการของลูกค้า',
          textTitle8: '7. สามารถจัดหา Butler (Butler Service)',
          textTitle9: '8. มีบริการบุคลากรที่ชำนาญการท่องเที่ยว และสถานที่ท่องเที่ยวต่าง',
          textTitle10: '9. รับบริการทั้งในและนอกประเทศ Agent ทุกคนมีตราประจำตัว',
          textTitle11: 'เรามี Partner อยู่ทั่วโลกคอยบริการท่าน',
        })
        break;
      }
      case "EN" : {
        setTextData({
          textdetail1: 'With more than 26 years of experience in custody of important persons with extensive security training experience According to international standards And experienced',
          textdetail2: 'We have the ability to use security technology. To promote your safety We promise life And your assets will be safe Use our service',
          textTitle1: '1. Take care of safety Minimum to maximum Available from 10 hours to 24 hours.',
          textTitle2: '2. Accepting work both under uniform and in uniform',
          textTitle3: '(Can be adjusted according to the situation)',
          textTitle4: '3. Work with weapons and without weapons (Can be adjusted according to the situation)',
          textTitle5: '4. Get a job in the nature of Secret Service',
          textTitle6: '5. Can supply limousines, yachts, helicopters and private planes.',
          textTitle7: '6. Accommodation accommodation service available. According to customer requirements',
          textTitle8: '7. Can supply Butler (Butler Service)',
          textTitle9: '8. There is a service personnel specializing in tourism. And various tourist attractions',
          textTitle10: '9. Receive service both inside and outside the country. Every Agent has an identity badge.',
          textTitle11: 'We have partners all over the world to serve you.',
        })
        break;
      }
    }
  }
  useEffect(()=>{
    const localStorageOut = localStorage.getItem('languageSecue') || "TH";
    langChange(localStorageOut);
  },[])
  const images = [
    {
      original: '/images/our-work/231954.jpg',
      thumbnail: '/images/our-work/231954.jpg',
    },
    {
      original: '/images/our-work/231996.jpg',
      thumbnail: '/images/our-work/231996.jpg',
    },
    {
      original: '/images/our-work/withV1.png',
      thumbnail: '/images/our-work/withV1.png',
    },
    {
      original: '/images/our-work/232106.jpg',
      thumbnail: '/images/our-work/232106.jpg',
    },
  ];

  const ImageSwitchSide = [
    {
      imagePath: '/images/our-work/231958.jpg',
      title: 'Personal Security Service',
      titleColor: 'whitesmoke',
      detail1: textData.textdetail1,
      detail2: textData.textdetail2,
      side: 1,
    },
  ];
  return (
    <>
      <NavBar changeLanguage={langChange} />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.flexContainer}>
          <div className={styles.titleName}>Our Service</div>
          <div className={styles.MainNew1}>
          <Image
                loading={'eager'}
                alt={'Image123445'}
                src={'/images/our-work/231960.jpg'}
                width={1876}
                height={872}
              />
          </div>
          <ImageSwitch ImageSwitch={ImageSwitchSide[0]} />
          <div className={styles.firstContent}>
            <div className={styles.contentTextMain}>
              <div className={styles.divPadding}>
                  {textData.textTitle1}
              </div>
              <div className={styles.divPadding}>
                <div>{textData.textTitle2}</div>
                <div className={styles.hideDiv}>&nbsp;&nbsp;&nbsp;{textData.textTitle3}</div>
                   
              </div>
              <div className={styles.divPadding}>
              {textData.textTitle4}
              </div>
              <div className={styles.divPadding}>
              {textData.textTitle5}
              </div>
            </div>
            <div className={styles.contentImageMain}>
              <Image
                loading={'eager'}
                alt={'Image1234'}
                src={'/images/our-work/232111.jpg'}
                width={1876}
                height={872}
              />
            </div>
          </div>
          <div className={styles.secondContent}>
            <div className={styles.contentImageMain}>
            <Image
                loading={'eager'}
                alt={'Image1234'}
                src={'/images/our-work/elephen001.png'}
                width={460}
                height={621}
              />
            </div>
            <div className={styles.gapCenter}></div>
            <div className={styles.contentTextMain}>
              <div className={styles.divPadding}>
              {textData.textTitle6}
                </div>
                <div className={styles.divPadding}>
                {textData.textTitle7}
                </div>
                <div className={styles.divPadding}>
                {textData.textTitle8}
                </div>
                <div className={styles.divPadding}>
                {textData.textTitle9}
                </div>
                <div className={styles.divPadding}>
                  <div>{textData.textTitle10}</div>
                  <div className={styles.hideDiv}>&nbsp;&nbsp;&nbsp;{textData.textTitle11} </div>
                </div>
                <div>
                <ImageGallery items={images} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

