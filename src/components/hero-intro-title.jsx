import clsx from "clsx"
import { animate, inView, stagger } from "motion"
import { useEffect, useRef } from "react"
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, textVariant2 } from '../../utils/motion'
import { TypeAnimation } from 'react-type-animation';

export default function HeroIntroTitle({darkMode}) {

    return (
        <section className={`h-screen flex justify-center items-center `}>
            <div

                className={`flex flex-col `}
            >
                <div className="lg:w-[500px] md:w-[400px] sm:w-[300px] w-[200px]">
                    <h1 className="lg:text-[40px] md:text-[30px] sm:text-[25px] text-[22px] lg:leading-[60px] md:leading-[55px] sm:leading-[37px] leading-[32px] uppercase text-verge-black',">
                        Hi, I'm Zeno. A                     
                    </h1>



                    <h1 className={`font-bold lg:text-[80px] md:text-[60px] sm:text-[40px] text-[24px] lg:leading-[100.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase ${darkMode ? "text-coffee" : "text-verge-black"} lg:w-[800px] md:w-[600px] sm:w-[400px] w-[200px]`}>
                        <TypeAnimation
                            className="typeAnimation w-full"
                            sequence={[
                                'Entrepreneur',
                                1000,
                                'Front-end dev',
                                1000,
                                'UX-designer',
                                1000,
                                'Product owner',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            style={{
                                display: "inline-block",
                                // width: "800px"
                            }}
                            repeat={Infinity}
                        />
                    </h1>

                  
                    {/* <h1 className="lg:text-[40px] md:text-[50px] sm:text-[30px] text-[22px] lg:leading-[80px] md:leading-[55px] sm:leading-[37px] leading-[32px] uppercase text-verge-black',">
                    that is passionate about finding creative solutions to challenging problems                   
                    </h1> */}

                </div>

            </div>
        </section>
    )
}



// DIT IS DE LAATSTE VARIANT


// import clsx from "clsx"
// import { animate, inView, stagger } from "motion"
// import { useEffect, useRef } from "react"
// import { motion } from 'framer-motion';
// import { slideIn, staggerContainer, textVariant, textVariant2 } from '../../utils/motion'
// import { TypeAnimation } from 'react-type-animation';

// export default function HeroIntroTitle({darkMode}) {

//     return (
//         <section className={`h-screen flex justify-center items-center `}>
//             <div

//                 className={`flex flex-col `}
//             >
//                 <div className="w-[600px] ">
//                     <h1 className="lg:text-[40px] md:text-[30px] sm:text-[25px] text-[22px] lg:leading-[60px] md:leading-[55px] sm:leading-[37px] leading-[32px] uppercase text-verge-black',">
//                         Hi, I'm Zeno. A                     
//                     </h1>



//                     <h1 className={`font-bold lg:text-[80px] md:text-[60px] sm:text-[40px] text-[24px] lg:leading-[100.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase ${darkMode ? "text-coffee" : "text-verge-black"}`}>
//                         <TypeAnimation
//                             className="typeAnimation w-full"
//                             sequence={[
//                                 'Entrepreneur',
//                                 1000,
//                                 'Front-end dev',
//                                 1000,
//                                 'UX-designer',
//                                 1000,
//                                 'Product owner',
//                                 1000
//                             ]}
//                             wrapper="span"
//                             speed={10}
//                             style={{
//                                 display: "inline-block",
//                                 width: "800px"
//                             }}
//                             repeat={Infinity}
//                         />
//                     </h1>

                  
//                     {/* <h1 className="lg:text-[40px] md:text-[50px] sm:text-[30px] text-[22px] lg:leading-[80px] md:leading-[55px] sm:leading-[37px] leading-[32px] uppercase text-verge-black',">
//                     that is passionate about finding creative solutions to challenging problems                   
//                     </h1> */}

//                 </div>

//             </div>
//         </section>
//     )
// }

//  dit is de nieuwere met zwarte background en witte text 
// import clsx from "clsx"
// import { animate, inView, stagger } from "motion"
// import { useEffect, useRef } from "react"
// import { motion } from 'framer-motion';
// import { slideIn, staggerContainer, textVariant, textVariant2 } from '../../utils/motion'
// import { TypeAnimation } from 'react-type-animation';

// const styles = {
//     innerWidth: '2xl:max-w-[1280px] w-full',
//     interWidth: 'lg:w-[80%] w-[100%]',

//     paddings: 'sm:p-16 xs:p-8 px-6 py-12',
//     yPaddings: 'sm:py-16 xs:py-8 py-12',
//     xPaddings: 'sm:px-16 px-6',
//     topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
//     bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

//     flexCenter: 'flex justify-center items-center',
//     flexStart: 'flex justify-start items-start',
//     flexEnd: 'flex justify-end',
//     navPadding: 'pt-[98px]',

//     // hero section
//     heroHeading:
//         'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-verge-black',
//     heroDText:
//         'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
// };


// export default function HeroIntroTitle() {

//     return (
//         <section className={`h-screen flex justify-center items-center `}>
//             <div

//                 className={`flex flex-col `}
//             >
//                 <div className="max-w-screen-xl">
//                     <h1 className="-ml-40 font-bold lg:text-[200px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-verge-black',">
//                         CREATIVE
//                     </h1>



//                     <h1

//                         className='font-bold lg:text-[200px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-verge-black'
//                     >
//                         <TypeAnimation
//                             className="typeAnimation max-w-screen-xl"
//                             sequence={[
//                                 'Entrepreneur',
//                                 1000,
//                                 'Front-end dev',
//                                 1000,
//                                 'UX-designer',
//                                 1000,
//                                 'Product owner',
//                                 1000
//                             ]}
//                             wrapper="span"
//                             speed={10}
//                             style={{ display: 'inline-block', color: 'white', minWidth: '100wh', backgroundColor: "black" }}
//                             repeat={Infinity}
//                         />
//                     </h1>
//                 </div>

//             </div>
//         </section>
//     )
// }




// dit is de hele oude zonder type effect 

// import clsx from "clsx"
// import { animate, inView, stagger } from "motion"
// import { useEffect, useRef } from "react"
// import { motion } from 'framer-motion';
// import { slideIn, staggerContainer, textVariant,  textVariant2} from '../../utils/motion'

// const styles = {
//     innerWidth: '2xl:max-w-[1280px] w-full',
//     interWidth: 'lg:w-[80%] w-[100%]',
  
//     paddings: 'sm:p-16 xs:p-8 px-6 py-12',
//     yPaddings: 'sm:py-16 xs:py-8 py-12',
//     xPaddings: 'sm:px-16 px-6',
//     topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
//     bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',
  
//     flexCenter: 'flex justify-center items-center',
//     flexStart: 'flex justify-start items-start',
//     flexEnd: 'flex justify-end',
//     navPadding: 'pt-[98px]',
  
//     // hero section
//     heroHeading:
//         'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-verge-black',
//     heroDText:
//         'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
//   };
  

// export default function HeroIntroTitle(){

//     return (
//         <section className={`h-screen flex justify-center items-center `}>
//         <motion.div
//           variants={staggerContainer}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.5 }}
//           className={`flex flex-col `}
//         >
//           <div className="">
//             <motion.h1      variants={slideIn('right', 'tween', 0.2, 1.5)}   className={styles.heroHeading}>
//              CREATIVE
//             </motion.h1>
            
            
            
//             <motion.h1
//                 variants={slideIn('left', 'tweem', 0.2, 1.5)}
//              className={styles.heroHeading}
//             >
//             DEVELOPER</motion.h1>
            
//           </div>
   
//      </motion.div>
//       </section>
//     )
// }