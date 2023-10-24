import React from "react";
import { useRef, useEffect, useState } from "react";
import frameOne from '../assets/frameOne.png';
import portfolio from '../assets/portfolio.png'
import chatbot from '../assets/chatbot.png'
import codeconnect from '../assets/codeconnect.png'
import iconninja from '../assets/iconninja.png'
import minigame from '../assets/minigame.png'
import storygenerator from '../assets/storyGenerator.png'
import travel from '../assets/travel.png'

import { motion, useTransform, useScroll } from "framer-motion";


export default function Projects({darkMode}){


    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
  

    return (
        <section className="w-[100%]">
            {/* STICKY PARENT */}
            <div ref={targetRef} className="h-[700vh] ">
                {/* STICKY */}
                <div className="overflow-hidden sticky top-20 h-[100vh]">
                    {/* SCROLL SECTION */}
                    <motion.div style={{ x }} className="absolute top-0 height-[100%] w-[700vw] will-change-transform justify-between flex align-center py-0 px-[5vw]">

                    
                    <h1 className={`mt-20 font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase -rotate-90 ${darkMode ? "text-coffee" : "text-verge-black"}`}>MY WORK</h1>
                    <a target="_blank" href="https://zeno-degenkamp.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={portfolio} alt="Frame One" /></a>
                    <a target="_blank" href="https://marvelous-fenglisu-f6d29b.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={storygenerator} alt="Frame One" /></a>
                    <a target="_blank" href="https://zingy-cassata-2ad8ad.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={chatbot} alt="Frame One" /></a>
                      
                    <a target="_blank" href="https://codeconnect-react.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={codeconnect} alt="Frame One" /></a>
                    <a target="_blank" href="https://hidden-quiz-minigame.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={minigame} alt="Frame One" /></a>
                    <a target="_blank" href="https://travel-react-zeno.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={travel} alt="Frame One" /></a>
                    <a target="_blank" href="https://icon-ninja.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={iconninja} alt="Frame One" /></a>


                    </motion.div>
                </div>

            </div>

        </section>
    )
}


// import React from "react";
// import { useRef, useEffect, useState } from "react";
// import frameOne from '../assets/frameOne.png';
// import portfolio from '../assets/portfolio.png'
// import chatbot from '../assets/chatbot.png'
// import codeconnect from '../assets/codeconnect.png'
// import iconninja from '../assets/iconninja.png'
// import minigame from '../assets/minigame.png'
// import storygenerator from '../assets/storyGenerator.png'
// import travel from '../assets/travel.png'

// import { motion, useTransform, useScroll } from "framer-motion";


// export default function Projects({darkMode}){


//     const targetRef = useRef(null);
//     const { scrollYProgress } = useScroll({
//       target: targetRef,
//     });
  
//     const x = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
  

//     return (
//         <section className="w-[100%]">
//             {/* STICKY PARENT */}
//             <div ref={targetRef} className="h-[700vh] ">
//                 {/* STICKY */}
//                 <div className="overflow-hidden sticky top-20 h-[100vh]">
//                     {/* SCROLL SECTION */}
//                     <motion.div style={{ x }} className="absolute top-0 height-[100%] w-[700vw] will-change-transform justify-between flex align-center py-0 px-[5vw]">

                    
//                     <h1 className={`font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase -rotate-90 ${darkMode ? "text-coffee" : "text-verge-black"}`}>MY WORK</h1>
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '80%' }} src={portfolio} alt="Frame One" />
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={storygenerator} alt="Frame One" />
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={chatbot} alt="Frame One" />
                      
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={codeconnect} alt="Frame One" />
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={minigame} alt="Frame One" />
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={travel} alt="Frame One" />
//                     <img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={iconninja} alt="Frame One" />


//                     </motion.div>
//                 </div>

//             </div>

//         </section>
//     )
// }


