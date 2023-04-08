import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { urlDentists } from '../Routes/Home'
import Form from '../Components/Form'

beforeEach(() => {
    render(<Form />);    
    inputEmail = screen.getByLabelText("email");    
  });

test("Testing Form", async () => {
    fireEvent.change(inputEmail, {
      target: { value: "laura@correo.com" },
    });
   
});

