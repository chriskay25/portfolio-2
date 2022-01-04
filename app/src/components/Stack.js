import { useState } from 'react'
import { stackData } from '../assets/data.js'
import Card from './Card'
import { motion, AnimateSharedLayout } from 'framer-motion'

const Stack = () => {
  const [selected, setSelected] = useState(false)
  const handleSelected = (id) => {
    if (selected) {
      setSelected(false)
      return
    }
    setSelected(id)
  }

  return (
    <div className='stack'>
      <h3 className='section-subtitle'>LANGUAGES & FRAMEWORKS</h3>
      <AnimateSharedLayout type='crossfade'>
        <motion.ul layout>
          {stackData.map((item) => (
            <motion.li className='card-container' key={item.id} onClick={() => handleSelected(item.id)} animate={selected && selected !== item.id ? {opacity: 0} : {opacity: 1}}>
              <Card key={item.id} item={item} selected={selected === item.id} />
            </motion.li>
          ))}
        </motion.ul>
      </AnimateSharedLayout>
    </div>
  )
}

export default Stack