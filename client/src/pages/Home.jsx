import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio';

import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'

import { CustomButton } from '../components';

import state from '../store';

const Home = () => {
    const snap = useSnapshot(state);

  return (
    <AnimatePresence>
          {snap.intro && (
              <motion.div className='home' {...slideAnimation('left')}>
                  <motion.header {...slideAnimation('down')}>
                      <img src="./threejs.png" alt="logo" className='w-8 h-8 object-contain'/>
                  </motion.header>

                  <motion.div className="home-content" {...headContainerAnimation}>
                      <motion.div className="" {...headTextAnimation}>
                          <h1 className='head-text'>
                              LET'S <br  className='xl:block hidden'/> DO IT.
                          </h1>
                          <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                              <p className='max-w-md font-normal text-gray-600 text-base'>
                              Create your shirt with 3d customization tool.
                              <strong>Unleash imagination.</strong>
                              and define your own style
                              </p>

                              <CustomButton
                                  type="filled"
                                  title="Customize it"
                                  handleClick={() => state.intro = false}
                                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                              />
                          </motion.div>
                      </motion.div>
                  </motion.div>
            </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Home
