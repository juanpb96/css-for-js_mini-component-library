import React, { useState } from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: var(--color);
  font-size: 1rem;
  line-height: 1.17;
  outline: 1px solid transparent;

  &:focus-within {
    outline-color: ${COLORS.focus};
  }
`;

const DefaultSelect = styled.select`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  border-radius: inherit;
`;

const Select = ({ label, value, onChange, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper
      style={{"--color": isHovered ? COLORS.black : COLORS.gray700}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <VisuallyHidden id="select-label">{label}</VisuallyHidden>
      <p>{displayedValue}</p>
      <Icon id="chevron-down" strokeWidth={isHovered ? 2 : 1} />
      <DefaultSelect aria-labelledby="select-label" value={value} onChange={onChange}>
        {children}
      </DefaultSelect>
    </Wrapper>
  );
};

export default Select;
