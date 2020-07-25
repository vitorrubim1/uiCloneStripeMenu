import * as React from 'react';

import { Products, Developers, Company } from '../Content';
import { DropDownOption } from '../Dropdown';
import { Container, DropDownStyles } from './styles';

function Navbar() {
  return (
    <DropDownStyles>
      <Container>
        <ul>
          <li>
            <DropDownOption 
              name="Products"
              content={Products}
            />
          </li>
          <li>
            <DropDownOption 
              name="Developers"
              content={Developers}
            />
          </li>
          <li>
            <DropDownOption 
              name="Company"
              content={Company}
            />
          </li>
        </ul>
      </Container>
    </DropDownStyles>
  );
}

export default Navbar;