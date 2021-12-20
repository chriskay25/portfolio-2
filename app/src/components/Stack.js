import React, { useState } from 'react'
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
  <div className='stack' style={{marginTop: '4rem'}}>
    <h3 style={{fontWeight: 400, fontSize: '1.8rem', color: 'grey'}}>MY LANGUAGES & FRAMEWORKS</h3>
    <AnimateSharedLayout type='crossfade'>
      <motion.ul layout style={{display: 'flex', justifyContent: 'space-around', position: 'relative', flexWrap: 'wrap', margin: '0 auto', width: '90%', maxWidth: '800px'}}>
        {stackData.map((item) => (
          <motion.li key={item.id} style={{width: '25%'}} onClick={() => handleSelected(item.id)} animate={selected && selected !== item.id ? {opacity: 0} : {opacity: 1}}>
            <Card key={item.id} item={item} selected={selected === item.id} />
          </motion.li>
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  </div>
)
}

export default Stack