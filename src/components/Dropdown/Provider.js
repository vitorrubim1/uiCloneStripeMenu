import * as React from "react";

export const Context = React.createContext();

export function DropDownProvider({ children }) {
  const [options, setOptions] = React.useState([]); //arr, q conterá as options
  const [targetId, setTargetId] = React.useState(null); //qual é o alvo do container q estou usando
  const [cacheId, setCacheId] = React.useState(null); //memória, representa a ultima opção q passou o mouse

  const registerOption = React.useCallback(
    ({
      //registrando as info de uma option
      //desestruturação
      id,
      optionDimensions, //dimensão das opções
      optionCenterX, //centro da opção, para não alinhar ao começo
      WrappedContent, //item q aparecerá embaixo da opção
      backgroundHeight, //background cinza
    }) => {
      setOptions((items) => [
        //setando o estado de arr com os dados q provem do callback
        ...items,
        {
          id,
          optionDimensions,
          optionCenterX,
          WrappedContent,
          backgroundHeight,
        },
      ]);
    },
    [setOptions]
  );

  const updateOptionProps = React.useCallback(
    (optionId, props) => {
      //atualizar caso seja redimensionado
      setOptions((items) =>
        items.map((item) => {
          if (item.id === optionId) {
            item = { ...item, ...props };
          }

          return item;
        })
      );
    },
    [setOptions]
  );

  const getOptionById = React.useCallback(
    (id) => options.find((item) => item.id === id),
    [options]
  ); //options, pq iremos retornar algo dai de dentro e ñ setar

  const deleteOptionById = React.useCallback(
    (id) => {
      setOptions((items) => items.filter((item) => item.id !== id)); //todo id passa, menos o q é pegado pelo parametro
    },
    [setOptions]
  );

  React.useEffect(() => {
    if (targetId !== null) setCacheId(targetId);
  }, [targetId]);

  return (
    <Context.Provider
      value={{
        //informações que o provider passará aos filhos
        registerOption,
        updateOptionProps,
        getOptionById,
        deleteOptionById,
        options,
        targetId,
        setTargetId,
        cacheId,
        setCacheId,
      }}
    >
      {children}
    </Context.Provider>
  );
}
