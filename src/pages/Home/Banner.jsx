import team1 from '../../assets/images/team1.jpg'
import team2 from '../../assets/images/team2.jpg'
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="flex-1">
                <motion.img
                animate={{y : [50, 0, 50]}}
                transition={{duration : 7, repeat: Infinity}}
                    src={team1}
                    className="max-w-64 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-purple-600 shadow-2xl" />
                <motion.img
                animate={{x : [150, 200, 150]}}
                transition={{duration : 7, repeat: Infinity}}
                    src={team2}
                    className="max-w-64 rounded-t-3xl rounded-br-3xl border-l-4 border-b-4 border-purple-600 shadow-2xl" />
                
                </div>
                <div className="flex-1">
                    <motion.h1
                    animate={{x: [30, 0, 30]}}
                    transition={{duration : 5, repeat : Infinity}}
                     className="text-5xl font-bold">Trending <motion.span 
                     animate ={{color : ['#f74620','#74f720', '#20b5f7','#2064f7','#a5f720 ']}}
                     transition={{duration : 1.5, repeat:Infinity}}
                     className='text-purple-600'>jobs</motion.span>  for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-blue-500 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;