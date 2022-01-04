import { motion, AnimatePresence } from 'framer-motion'

const Card = ({ item, selected }) => {
    return (
        <>
            <motion.div className='card' layoutId={item.id}>
                <motion.h1 layoutId={item.name} style={{fontWeight: 400, fontSize: '1.4rem', color: 'grey'}}>{item.name}</motion.h1>
                <motion.img layoutId={item.img} src={item.img} alt={item.alt} whileTap={{scale: 1, filter: 'contrast(1.4) brightness(1.4) drop-shadow(0px 2px .1rem rgba(0,0,0,.8)'}} whileHover={{scale: 1.15, filter: 'contrast(1.2) brightness(1.2) drop-shadow(0px 0px .2rem rgba(0,0,0,.6)'}} transition={{type: 'spring', damping: 12, stiffness: 60}} />
                
            </motion.div>
            <AnimatePresence>
                {selected && (
                    <motion.div className='selected-card' layoutId={item.id}>
                        <motion.img src={item.img} alt={item.alt} layoutId={item.img} style={{filter: 'contrast(1.4) brightness(1.4) drop-shadow(0px 2px .1rem rgba(0,0,0,.8)'}} />
                        <motion.h1 layoutId={item.name} style={{display: 'inline-block', fontSize: '2.5rem'}}>{item.name}</motion.h1>
                        <div>{item.description}</div>
                        <div className='experience-container'>
                            <div style={{padding: '5px', width: '49%'}}>
                                <h3 className='experience-label'>Experience</h3>
                                <div className='experience-stat'>{item.experienceLength} {item.experienceLength > 1 ? 'years' : 'year'}</div>
                            </div>
                            <div style={{padding: '0px', width: '49%'}}>
                                <h3 className='experience-label'>Skill Level</h3>
                                <div className='experience-stat'>{item.experienceLevel}</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Card