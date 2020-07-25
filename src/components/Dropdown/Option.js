import * as React from 'react';

export function DropDownOption({ name, content: Content }){ //nome da opção, conteudo
  return(
    <button className="dropdown-option">{name}</button>
  );
}