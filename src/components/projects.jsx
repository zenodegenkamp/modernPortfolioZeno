



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
            <div ref={targetRef} className="lg:h-[700vh] h-[1500vh] ">
                {/* STICKY */}
                <div className="overflow-hidden sticky top-20 h-[100vh]">
                    {/* SCROLL SECTION */}
                    <motion.div style={{ x }} className="absolute height-[100%] top-10 lg:w-[700vw] w-[1500vw] will-change-transform justify-between flex align-center py-0 px-[5vw]">

                    
                    <h1 className={`text-[80px]  leading-[80.4px] min-w-[400px] uppercase -rotate-90 ${darkMode ? "text-coffee" : "text-verge-black"}`}>MY WORK</h1>
                    <a target="_blank" href="https://zeno-degenkamp.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]" src={portfolio} alt="Frame One" /></a>
                    <a target="_blank" href="https://marvelous-fenglisu-f6d29b.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]"  src={storygenerator} alt="Frame One" /></a>
                    <a target="_blank" href="https://zingy-cassata-2ad8ad.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]"  src={chatbot} alt="Frame One" /></a>
                      
                    <a target="_blank" href="https://codeconnect-react.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]"  src={codeconnect} alt="Frame One" /></a>
                    <a target="_blank" href="https://hidden-quiz-minigame.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]"  src={minigame} alt="Frame One" /></a>
                    <a target="_blank" href="https://travel-react-zeno.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]"  src={travel} alt="Frame One" /></a>
                    <a target="_blank" href="https://icon-ninja.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg lg:h-[40vw] h-[100vw]" src={iconninja} alt="Frame One" /></a>


                    </motion.div>
                </div>

            </div>

        </section>
    )
}




// hier was ik al beetje bezig style weggeheaald 





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
//             <div ref={targetRef} className="h-[700vh]  ">
//                 {/* STICKY */}
//                 <div className="overflow-hidden sticky top-20 h-[100vh]">
//                     {/* SCROLL SECTION */}
//                     <motion.div style={{ x }} className="absolute top-0 height-[100%] w-[700vw]   will-change-transform justify-between flex align-center py-0 px-[5vw]">

                    
//                     <h1 className={`font-bold lg:text-[100px] md:text-[80px] sm:text-[60px] text-[40px] uppercase -rotate-90 ${darkMode ? "text-coffee" : "text-verge-black"}`}>MY WORK</h1>
//                     <a target="_blank" href="https://zeno-degenkamp.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg w-[80%]" src={portfolio} alt="Frame One" /></a>
//                     <a target="_blank" href="https://marvelous-fenglisu-f6d29b.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg"  src={storygenerator} alt="Frame One" /></a>
//                     <a target="_blank" href="https://zingy-cassata-2ad8ad.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={chatbot} alt="Frame One" /></a>
                      
//                     <a target="_blank" href="https://codeconnect-react.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={codeconnect} alt="Frame One" /></a>
//                     <a target="_blank" href="https://hidden-quiz-minigame.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={minigame} alt="Frame One" /></a>
//                     <a target="_blank" href="https://travel-react-zeno.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={travel} alt="Frame One" /></a>
//                     <a target="_blank" href="https://icon-ninja.netlify.app/"><img className="object-cover object-center shadow-xl transform transition-transform hover:shadow-2xl hover:-translate-y-2 rounded-lg" style={{ width: '90vw', height: '100%' }} src={iconninja} alt="Frame One" /></a>


//                     </motion.div>
//                 </div>

//             </div>

//         </section>
//     )
// }
