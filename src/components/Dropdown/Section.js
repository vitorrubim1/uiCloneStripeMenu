import * as React from "react";

import { motion } from "framer-motion";

import { Context } from "./Provider";

export function DropDownSection({ option }){ //prop q o Root passa
  const { cacheId } = React.useContext(Context);
  
  const { 
    id, 
    contentDimensions, 
    optionCenterX 
  } = option; //informações da opção q é passada pelo paramêtro

  const contentWidth = contentDimensions?.width || 0;
  const x = optionCenterX - contentWidth / 2; 

  const isActive = cacheId === id;

  return (
    <motion.div 
      className="dropdown-section"
      initial={{
        x
      }} //para não animar da esquerda
      animate={{
        x,
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'unset' : 'none',
      }}
      transition={{
        ease: 'easeOut',
        opacity: { duration: 0.2 },  
      }}
    >
      <option.WrappedContent />
    </motion.div>
  );
} 