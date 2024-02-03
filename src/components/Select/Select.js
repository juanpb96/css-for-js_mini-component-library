import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
`;

const DefaultSelect = styled.select`
  display: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <p>{displayedValue}</p>
      <Icon id="chevron-down" />
      <DefaultSelect value={value} onChange={onChange}>
        {children}
      </DefaultSelect>
    </Wrapper>
  );
};

export default Select;
