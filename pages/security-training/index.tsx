import React, {useState, useEffect} from 'react';
import styles from './security-training.less';
import NavBar from '../../components/navbar';
import Image from 'next/image';
import '../../public/styles/font.less';
import ReactPlayer from 'react-player';
import ModalImage from "react-modal-image";
import Gallery from "react-photo-gallery";
import {photos, photos2, photos3, photos4} from '../../components/imagesComponent/photoTraining';
export const Index = () => {

    const [textData, setTextData] = useState({
        textTitle1: 'ตัวอย่าง วีดีโอการ ฝึกซ้อมของเรา',
        textTitle2: '1. หน้าที่ของบอดี้การ์ด',
        textTitle3: '2. การรักษาความปลอดภัยในที่พัก',
        textTitle4: '3. การรักษาความปลอดภัยในอาคาร',
        textTitle5: '4. อุปกรณ์และเทคโนโลยีสำหรับงานอารักขา',
        textTitle6: '5. อาวุธประเภทต่างๆ สำหรับบอดี้การ์ด',
        textTitle7: '6. การตรวจค้นจับกุมและเทคนิคการใช้กุญแจมือ',
        textTitle8: '7. ประเภทของวัตถุระเบิด และการค้นหา',
        textTitle9: '8. เทคนิคและการทำงานเป็นทีม',
        textTitle10: '9. เทคนิคการขับรถอารักขา',
        textTitle11: 'การฝึกเกี่ยวกับอาวุธปืน',
        textTitle12: '1. ประเภทปืนและอุปกรณ์',
        textTitle13: '2. หลักเทคนิคการใช้ปืนพก',
        textTitle13_1: '3. หลักเทคนิคการใช้ปืนยาว',
        textTitle14: '4. การใช้ปืนพกระบบป้องกันตัว',
        textTitle15: '5. การใช้ปืนพกระบบต่อสู้',
        textTitle16: 'การฝึกเกี่ยวกับศิลปะป้องกันตัว',
        textTitle17: '1. ศิลปการป้องกันตัวมือเปล่า',
        textTitle18: '2. การป้องกันตัวโดยใช้สิ่งของใกล้ตัว',
        textTitle19: '3. การป้องกันตัวจากคนร้ายมีอาวุธ',
        textTitle20: '4. การป้องกันตัวด้วยอาวุธกระบอง/ดิ้ว',
        textTitle21: '5. การป้องกันตัวด้วยอาวุธมีด',
        textTitle22: 'คอร์สอื่นๆ',
        textTitle23: '1. เทคนิคกู้ภัยทางน้ำ',
        textTitle24: '2. กระโดดร่ม'
      })
      const langChange = (lan) => {
        switch (lan) {
          case "TH" : {
            setTextData({
                textTitle1: 'ตัวอย่าง วีดีโอการ ฝึกซ้อมของเรา',
                textTitle2: '1. หน้าที่ของบอดี้การ์ด',
                textTitle3: '2. การรักษาความปลอดภัยในที่พัก',
                textTitle4: '3. การรักษาความปลอดภัยในอาคาร',
                textTitle5: '4. อุปกรณ์และเทคโนโลยีสำหรับงานอารักขา',
                textTitle6: '5. อาวุธประเภทต่างๆ สำหรับบอดี้การ์ด',
                textTitle7: '6. การตรวจค้นจับกุมและเทคนิคการใช้กุญแจมือ',
                textTitle8: '7. ประเภทของวัตถุระเบิด และการค้นหา',
                textTitle9: '8. เทคนิคและการทำงานเป็นทีม',
                textTitle10: '9. เทคนิคการขับรถอารักขา',
                textTitle11: 'การฝึกเกี่ยวกับอาวุธปืน',
                textTitle12: '1. ประเภทปืนและอุปกรณ์',
                textTitle13: '2. หลักเทคนิคการใช้ปืนพก',
                textTitle13_1: '3. หลักเทคนิคการใช้ปืนยาว',
                textTitle14: '4. การใช้ปืนพกระบบป้องกันตัว',
                textTitle15: '5. การใช้ปืนพกระบบต่อสู้',
                textTitle16: 'การฝึกเกี่ยวกับศิลปะป้องกันตัว',
                textTitle17: '1. ศิลปการป้องกันตัวมือเปล่า',
                textTitle18: '2. การป้องกันตัวโดยใช้สิ่งของใกล้ตัว',
                textTitle19: '3. การป้องกันตัวจากคนร้ายมีอาวุธ',
                textTitle20: '4. การป้องกันตัวด้วยอาวุธกระบอง/ดิ้ว',
                textTitle21: '5. การป้องกันตัวด้วยอาวุธมีด',
                textTitle22: 'คอร์สอื่นๆ',
                textTitle23: '1. เทคนิคกู้ภัยทางน้ำ',
                textTitle24: '2. กระโดดร่ม'
            })
            break;
          }
          case "EN" : {
            setTextData({
                textTitle1: 'Example of our practice video',
                textTitle2: '1. Duties of the Bodyguard',
                textTitle3: '2. Security in accommodation',
                textTitle4: '3. Building security',
                textTitle5: '4. Equipment and technology for protection work',
                textTitle6: '5. Different types of weapons For bodyguards',
                textTitle7: '6. Findings, arrests and handcuffs techniques',
                textTitle8: '7. Explosives Type and Search',
                textTitle9: '8. Techniques and teamwork',
                textTitle10: '9. Guard driving techniques',
                textTitle11: 'Firearms training',
                textTitle12: '1. Types of guns and equipment',
                textTitle13: '2. Main techniques of using handguns',
                textTitle13_1: '3.Main Techniques for using a assult rifle',
                textTitle14: '4. Using a handgun, self defense system',
                textTitle15: '5. The use of pistols, combat systems',
                textTitle16: 'Practicing martial arts',
                textTitle17: '1. Free-handed martial arts',
                textTitle18: '2. Self defense by using something close to you',
                textTitle19: '3. Armed protection from gangsters',
                textTitle20: '4. Self defense with blackjack / dice weapons.',
                textTitle21: '5. Self defense with knife weapon',
                textTitle22: 'Other courses',
                textTitle23: '1. Water rescue techniques',
                textTitle24: '2. Parachute'
            })
            break;
          }
        }
      }
      useEffect(()=>{
        const localStorageOut = localStorage.getItem('languageSecue') || "TH";
        langChange(localStorageOut);
      },[])
  return (
    <>
      <NavBar changeLanguage={langChange} />
      <div className={styles.MainContainer}>
        <div className={styles.bannerConainer}></div>
        <div className={styles.MainBackground}>
          <div className={styles.flexContainerTop}>
            <div className={styles.title}>
              Professional Bodyguard Training Course
            </div>
            <div className={styles.vidExampleContainer}>
                <div className={styles.vidTitleExample}>
                    {textData.textTitle1}
                </div>
                <div className={styles.centerVideo}>
                  <ReactPlayer url="https://www.youtube.com/watch?v=vGGPhO0tHJs"  width='70%'
                  height='550px'/>
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>Bodyguard Service Training</div>
                <div className={styles.descriptCourse}>
                                            <div>{textData.textTitle2}</div>
                                            <div>{textData.textTitle3}</div>
                                            <div>{textData.textTitle4}</div>
                                            <div>{textData.textTitle5}</div>
                                            <div>{textData.textTitle6}</div>
                                            <div>{textData.textTitle7}</div>
                                            <div>{textData.textTitle8}</div>
                                            <div>{textData.textTitle9}</div>
                                            <div>{textData.textTitle10}</div> 
                </div>
                <div className={styles.imageCourse}>
                    <Gallery photos={photos} margin={5} columns={4} direction={"column"} />
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>{textData.textTitle11}</div>
                <div className={styles.descriptCourse}>
                                            <div>{textData.textTitle12}</div>
                                            <div>{textData.textTitle13}</div>
                                            <div>{textData.textTitle13_1}</div>
                                            <div>{textData.textTitle14}</div>
                                            <div>{textData.textTitle15}</div>
                </div>
                <div className={styles.imageCourse}>
                    <Gallery photos={photos2} margin={5} columns={4} direction={"column"} />
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>{textData.textTitle16}</div>
                <div className={styles.descriptCourse}>
                                            <div>{textData.textTitle17}</div>
                                            <div>{textData.textTitle18}</div>
                                            <div>{textData.textTitle19}</div>
                                            <div>{textData.textTitle20}</div>
                                            <div>{textData.textTitle21}</div>    
                </div>
                <div className={styles.imageCourse}>
                    <Gallery photos={photos3} margin={5} columns={4} direction={"column"} />
                </div>
            </div>
            <div className={styles.courseContainer}>
                <div className={styles.titleCourse}>{textData.textTitle22}</div>
                <div className={styles.descriptCourse}>
                                            <div>{textData.textTitle23}</div>
                                            <div>{textData.textTitle24}</div>
   
                </div>
                <div className={styles.imageCourse}>
                    <Gallery photos={photos4} margin={5} columns={4} direction={"column"} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
