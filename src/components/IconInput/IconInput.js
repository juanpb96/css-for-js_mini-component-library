import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--border-bottom': '1px',
    '--font-size': 14 / 16 + 'rem',
    '--margin-left': 8 + 'px',
    '--padding-bottom': 4 - 1 + 'px',
  },
  large: {
    '--border-bottom': '2px',
    '--font-size': 18 / 16 + 'rem',
    '--margin-left': 12 + 'px',
    '--padding-bottom': 7 - 2 + 'px',
  }
};

const ICON_SIZES = {
  small: 16,
  large: 24,
};

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  width: ${({width}) => width + "px"};
  padding-bottom: var(--padding-bottom);
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  color: ${COLORS.gray700};
  outline: 1px solid transparent;
  outline-offset: 2px;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus-within {
    outline-color: ${COLORS.focus};
  }
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  margin-left: var(--margin-left);
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline: none;
  border: none;
`;

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const toggleHover = (isActive) => {
    setIsHovered(isActive);
  };  

  return (
    <Wrapper
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      width={width}
      style={SIZES[size]}
    >
      <VisuallyHidden>
        {label}
      </VisuallyHidden>
      <Icon id={icon} size={ICON_SIZES[size]} strokeWidth={isHovered ? 2 : 1} />
      <Input type='text' placeholder={placeholder} />
    </Wrapper>
  );
};

export default IconInput;
