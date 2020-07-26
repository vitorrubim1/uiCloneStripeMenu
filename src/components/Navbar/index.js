import * as React from "react";

import { Products, Developers, Company } from "../Content";
import { DropDownProvider, DropDownOption, DropDownRoot } from "../Dropdown";
import { Container, DropDownStyles } from "./styles";

function Navbar() {
  return (
    <DropDownProvider>
      <DropDownStyles>
        <Container>
          <ul>
            <li>
              <DropDownOption 
                name="Products" 
                content={Products} 
                backgroundHeight={286} 
              />
            </li>
            <li>
              <DropDownOption 
                name="Developers" 
                content={Developers} 
                backgroundHeight={167} 
              />
            </li>
            <li>
              <DropDownOption 
                name="Company" 
                content={Company} 
                backgroundHeight={215} 
              />
            </li>
          </ul>
        </Container>
        <DropDownRoot />
      </DropDownStyles>
    </DropDownProvider>
  );
}

export default Navbar;
