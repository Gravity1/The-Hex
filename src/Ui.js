import * as React from 'react';
import './Ui.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

// const StyledButton = styled('Button')({});

export default function Ui(buttonProp) {
  return <div class="button"><Button variant="contained">{buttonProp.title}</Button></div>;
  // return <StyledButton variant="contained">{buttonProp.title}</StyledButton>;
}
