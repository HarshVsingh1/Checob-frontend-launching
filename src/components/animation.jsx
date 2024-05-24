import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './strip.css'
const TextVariants = {
    hidden: {
      y: '100%', 
    },
    visible: {
      y: 0, 
      transition: { duration: 0.3, ease: 'easeInOut' }, 
    },
    exit: {
      y: '-100%',
      transition: { duration: 0.3, ease: 'easeInOut' }, 
    },
  };

function AnimatedText() {
  const [currentText, setCurrentText] = useState('checob');
  const texts = ['checob', 'cash on delivery available', 'extension of your expression'];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (texts.indexOf(currentText) + 1) % texts.length;
      setCurrentText(texts[nextIndex]);
    }, 1500); 
    return () => clearInterval(intervalId); 
  }, [currentText, texts]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={TextVariants}
      className="animated-text"
    > <div className='currentText' >
      {currentText}
    </div>
    </motion.div>
  );
}

export default AnimatedText;
