import React from 'react';
import styles from './security-training.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
import '../../public/styles/font.less';
import ReactPlayer from 'react-player';
import ModalImage from "react-modal-image";
export const Index = () => {
  return (
    <>
      <NavBar />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.MainBackground}>
          <div className={styles.flexContainerTop}>
            <div className={styles.title}>
              Professional Bodyguard Training Course
            </div>
            <div className={styles.vidExampleContainer}>
                <div className={styles.vidTitleExample}>
                    ตัวอย่าง วีดีโอการ ฝึกซ้อมของเรา
                </div>
                <div className={styles.centerVideo}>
                  <ReactPlayer url="https://www.youtube.com/watch?v=vGGPhO0tHJs"  width='70%'
                  height='550px'/>
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>Bodyguard Service Training</div>
                <div className={styles.descriptCourse}>
                                            <div>1. หน้าที่ของบอดี้การ์ด</div>
                                            <div>2. การรักษาความปลอดภัยในที่พัก</div>
                                            <div>3. การรักษาความปลอดภัยในอาคาร</div>
                                            <div>4. อุปกรณ์และเทคโนโลยีสำหรับงานอารักขา</div>
                                            <div>5. อาวุธประเภทต่างๆ สำหรับบอดี้การ์ด</div>
                                            <div>6. การตรวจค้นจับกุมและเทคนิคการใช้กุญแจมือ</div>
                                            <div>7. ประเภทของวัตถุระเบิด และการค้นหา</div>
                                            <div>8. เทคนิคและการทำงานเป็นทีม</div>
                                            <div>9. เทคนิคการขับรถอารักขา </div> 
                </div>
                <div className={styles.imageCourse}>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232016.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232016.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232002.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232002.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232003.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232003.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232015.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232015.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/231973.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/231973.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/231975.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/231975.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232034.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232034.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/231977.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/231977.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/231976.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/231976.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232053.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232053.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232051.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232051.jpg'}
                        alt="im0001"
                        />
                    </div>
                    <div className={styles.imageBorder}>
                    <ModalImage
                        small={'/images/our-work/bodyguard-sevice/232055.jpg'}
                        medium={'/images/our-work/bodyguard-sevice/232055.jpg'}
                        alt="im0001"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>การฝึกเกี่ยวกับอาวุธปืน</div>
                <div className={styles.descriptCourse}>
                                            <div>1. ประเภทปืนและอุปกรณ์</div>
                                            <div>2. หลักเทคนิคการใช้ปืนพก</div>
                                            <div>3. การใช้ปืนพกระบบป้องกันตัว</div>
                                            <div>4. การใช้ปืนพกระบบต่อสู้</div>
                </div>
                <div className={styles.imageCourse}>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/231982.jpg'}
                            medium={'/images/our-work/gun-training/231982.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/232031.jpg'}
                            medium={'/images/our-work/gun-training/232031.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/231981.jpg'}
                            medium={'/images/our-work/gun-training/231981.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/232030.jpg'}
                            medium={'/images/our-work/gun-training/232030.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/232001.jpg'}
                            medium={'/images/our-work/gun-training/232001.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/232032.jpg'}
                            medium={'/images/our-work/gun-training/232032.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/330683.jpg'}
                            medium={'/images/our-work/gun-training/330683.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/330685.jpg'}
                            medium={'/images/our-work/gun-training/330685.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/gun-training/330686.jpg'}
                            medium={'/images/our-work/gun-training/330686.jpg'}
                            alt="im0001"
                            />
                    </div>
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>การฝึกเกี่ยวกับศิลปะป้องกันตัว</div>
                <div className={styles.descriptCourse}>
                                            <div>1. ศิลปการป้องกันตัวมือเปล่า</div>
                                            <div>2. การป้องกันตัวโดยใช้สิ่งของใกล้ตัว</div>
                                            <div>3. การป้องกันตัวจากคนร้ายมีอาวุธ</div>
                                            <div>4. การป้องกันตัวด้วยอาวุธกระบอง/ดิ้ว</div>
                                            <div>5. การป้องกันตัวด้วยอาวุธมีด</div>    
                </div>
                <div className={styles.imageCourse}>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/232005.jpg'}
                            medium={'/images/our-work/self-defend/232005.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/232004.jpg'}
                            medium={'/images/our-work/self-defend/232004.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/231986.jpg'}
                            medium={'/images/our-work/self-defend/231986.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/232033.jpg'}
                            medium={'/images/our-work/self-defend/232033.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/231989.jpg'}
                            medium={'/images/our-work/self-defend/231989.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/231990.jpg'}
                            medium={'/images/our-work/self-defend/231990.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/231991.jpg'}
                            medium={'/images/our-work/self-defend/231991.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/self-defend/232006.jpg'}
                            medium={'/images/our-work/self-defend/232006.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            className={styles.imgSS}
                            small={'/images/our-work/self-defend/231974.jpg'}
                            medium={'/images/our-work/self-defend/231974.jpg'}
                            alt="im0001"
                            />
                    </div>
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>คอร์สอื่นๆ</div>
                <div className={styles.descriptCourse}>
                                            <div>1. เทคนิคกู้ภัยทางน้ำ</div>
                                            <div>2. กระโดดร่ม</div>
   
                </div>
                <div className={styles.imageCourse}>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/232009.jpg'}
                            medium={'/images/our-work/water-sevice/232009.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/710.jpg'}
                            medium={'/images/our-work/water-sevice/710.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/711.jpg'}
                            medium={'/images/our-work/water-sevice/711.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder} style={{marginTop: '-377px'}}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/712.jpg'}
                            medium={'/images/our-work/water-sevice/712.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/713.jpg'}
                            medium={'/images/our-work/water-sevice/713.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/714.jpg'}
                            medium={'/images/our-work/water-sevice/714.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder} style={{marginTop: '-377px'}}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/715.jpg'}
                            medium={'/images/our-work/water-sevice/715.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder} style={{marginTop: '-253px'}}>
                        <ModalImage
                            small={'/images/our-work/water-sevice/231995.jpg'}
                            medium={'/images/our-work/water-sevice/231995.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/umbella-service/231965.jpg'}
                            medium={'/images/our-work/umbella-service/231965.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder} style={{marginTop: '-477px'}}>
                        <ModalImage
                            small={'/images/our-work/umbella-service/231963.jpg'}
                            medium={'/images/our-work/umbella-service/231963.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder}>
                        <ModalImage
                            small={'/images/our-work/umbella-service/231967.jpg'}
                            medium={'/images/our-work/umbella-service/231967.jpg'}
                            alt="im0001"
                            />
                    </div>
                    <div className={styles.imageBorder} style={{marginTop: '-477px'}}>
                        <ModalImage
                            small={'/images/our-work/umbella-service/231970.jpg'}
                            medium={'/images/our-work/umbella-service/231970.jpg'}
                            alt="im0001"
                            />
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
