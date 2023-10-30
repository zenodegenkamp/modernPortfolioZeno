import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant, textVariant2, footerVariants, fadeIn } from '../../utils/motion'


export default function Services({ darkMode }) {

    return (
        <section className={`h-screen flex flex-col items-center justify-center ${darkMode ? "text-coffee" : "text-verge-black"}`}>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 1 }}
                className={""}
            >

                <motion.h4 className="text-left sm:px-16 px-6 lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase max-w-screen-xl" variants={textVariant2}>MY SKILLSET</motion.h4>

                <motion.h4 className="sm:px-16 px-6 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase" variants={textVariant2}>master, entrepreneurship. 2021.</motion.h4>
                <motion.h4 className="sm:px-16 px-6 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase" variants={textVariant2}>bachelor, international business administration. 2020.</motion.h4>
                <motion.h4 className="sm:px-16 px-6 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase" variants={textVariant2}>minor, programming. 2020.</motion.h4>
                <motion.h4 className="sm:px-16 px-6 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase" variants={textVariant2}>frontend career path, scrimba 2023.</motion.h4>
                <motion.h4 className="sm:px-16 px-6 font-bold lg:text-[32px] md:text-[24px] sm:text-[18px] text-[12px] uppercase" variants={textVariant2}>ux design, growth tribe 2023.</motion.h4>

            </motion.div>
        </section>

    )
}