import React from 'react';
import styles from './our-service.less';
import '../../public/styles/custom.less';
import '../../public/styles/font.less';
import NavBar from '../../components/navbar';
import ImageSwitch from '../../components/image-switch';
import Image from 'next/image';
import ImageGallery from 'react-image-gallery';
export const Index = () => {

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
      detail1:
        'ด้วยประสบการณ์การดูแลอารักขาบุคคลสำคัญเกินกว่า 26ปี โดยผู้มีประสบการณ์ที่ผ่านการฝึกอบรมการรักษาความปลอดภัยมาอย่างเข้มข้น ตามหลักมาตราฐานสากล และมีประสบการณ์',
      detail2:
        'เรามีความสามารถใช้เทคโนโลยีด้านการรักษาความปลอดภัย เพื่อส่งเสริมให้ท่านมีความปลอดภัยสูงสุด เราสัญญาว่าชีวิต และทรัพย์สินของท่านจะปลอดภัย ใช้บริการของเรา',
      side: 1,
    },
  ];
  return (
    <>
      <NavBar />
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
                  1. ดูแลความปลอดภัย ขั้นต่ำถึงสูงสุด มีบริการตั้งแต่ 10 ชั่วโมง - 24 ชั่วโมง
              </div>
              <div className={styles.divPadding}>
                <div>2. รับทำงานทั้งนอกเครื่องแบบ และ ในเครื่องแบบ</div>
                <div className={styles.hideDiv}>&nbsp;&nbsp;&nbsp;(สามารถปรับเปลี่ยนได้ตามสถานการณ์)</div>
                   
              </div>
              <div className={styles.divPadding}>
                  3. การทำงานแบบ มีอาวุธ และไม่มีอาวุธ (สามารถปรับเปลี่ยนได้ตามสถานการณ์)
              </div>
              <div className={styles.divPadding}>
                  4. รับงานในลักษณะของ Secret Service
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
                5. สามารถจัดหา รถลีมูซีน เรือยอช เฮลิคอปเตอร์ และเครื่องบินส่วนตัว
                </div>
                <div className={styles.divPadding}>
                6. มีบริการจัดหาที่พัก ตามความต้องการของลูกค้า
                </div>
                <div className={styles.divPadding}>
                7. สามารถจัดหา Butler (Butler Service)
                </div>
                <div className={styles.divPadding}>
                8. มีบริการบุคลากรที่ชำนาญการท่องเที่ยว และสถานที่ท่องเที่ยวต่าง
                </div>
                <div className={styles.divPadding}>
                  <div>9. รับบริการทั้งในและนอกประเทศ Agent ทุกคนมีตราประจำตัว</div>
                  <div className={styles.hideDiv}>&nbsp;&nbsp;&nbsp;เรามี Partner อยู่ทั่วโลกคอยบริการท่าน </div>
                </div>
                <div>
                <ImageGallery items={images} />
                {/* <Image
                  loading={'eager'}
                  alt={'Image1234'}
                  src={'/images/our-work/232106.jpg'}
                  width={1108}
                  height={1477}
                /> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;

