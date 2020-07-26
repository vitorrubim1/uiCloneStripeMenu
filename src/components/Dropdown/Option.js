import * as React from "react";
import { motion } from "framer-motion";

import { Context } from "./Provider";
import { useDimensions } from "./Dimensions";

let lastOptionId = 0;

export function DropDownOption({ name, content: Content, backgroundHeight }) {
  //nome da opção, conteudo e o background cinza da option

  const idRef = React.useRef(++lastOptionId);
  const id = idRef.current;

  const [optionHook, optionDimensions] = useDimensions();
  const [registered, setRegistered] = React.useState(false);

  const {
    registerOption,
    updateOptionProps,
    getOptionById,
    deleteOptionById,
    targetId,
    setTargetId,
  } = React.useContext(Context);

  React.useEffect(() => {
    if (!registered && optionDimensions) {
      const WrappedContent = () => {
        const contentRef = React.useRef();

        React.useEffect(() => {
          const contentDimensions = contentRef.current.getBoundingClientRect(); //vinculando a dimensão do conteúdo ao pai dele
          updateOptionProps(id, { contentDimensions });
        }, []);

        return (
          //encapsulando o conteúdo q vem da prop
          <div ref={contentRef}>
            <Content />
          </div>
        );
      };

      registerOption({
        id,
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2, //centro
        WrappedContent, //conteúdo encapsulado
        backgroundHeight,
      });

      setRegistered(true);
    } else if (registered && optionDimensions) {
      updateOptionProps(id, {
        optionDimensions,
        optionCenterX: optionDimensions.x + optionDimensions.width / 2, //centro
      });
    }
  }, [
    registerOption,
    id,
    registered,
    optionDimensions,
    updateOptionProps,
    deleteOptionById,
    backgroundHeight,
  ]);

  React.useEffect(() => deleteOptionById(id), [deleteOptionById, id]);

  const handleOpen = () => setTargetId(id);
  const handleClose = () => setTargetId(null);
  const handleTouch = () => window.isMobile(true);

  const handleClick = (e) => {
    e.preventDefault();

    return targetId === id ? handleClose() : handleOpen();
  };

  return (
    <motion.button
      className="dropdown-option"
      ref={optionHook}
      onMouseDown={handleClick}
      onHoverStart={() => !window.isMobile && handleOpen()}
      onHoverEnd={() => !window.isMobile && handleClose()}
      onTouchStart={handleTouch}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      {name}
    </motion.button>
  );
}
