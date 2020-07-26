import * as React from "react";

const getDimensions = (element) => element.getBoundingClientRect();
//getBoundingClientRect(): retorna o tamanho do elemento e sua posição relativa ao viewport

export function useDimensions(responsive = true) {
  const [dimensions, setDimensions] = React.useState(null);
  const [element, setElement] = React.useState(null);

  const hook = React.useCallback((e) => setElement(e), []); //receber e setar quando carregar a pag

  React.useLayoutEffect(() => {
    if (element) {
      const updateDimensions = () => {
        window.requestAnimationFrame(() => {
          setDimensions(getDimensions(element));
        }); //fazer o navegador executar uma animação
      };

      updateDimensions();

      if (responsive) {
        window.addEventListener("resize", updateDimensions); //caso a tela seja redimensionada, atualiza o estado de dimensao

        return () => {
          window.removeEventListener("resize", updateDimensions);
        };
      }
    }
  }, [element, hook, responsive]);

  return [hook, dimensions, element];
}
