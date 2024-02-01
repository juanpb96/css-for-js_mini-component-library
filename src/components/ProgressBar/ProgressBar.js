/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const BaseProgressBar = styled.div`
  width: 370px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
`;

const Small = styled(BaseProgressBar)`
  height: 8px;
`;

const Medium = styled(BaseProgressBar)`
  height: 12px;
`;

const Large = styled(BaseProgressBar)`
  height: 24px;
  border-radius: 8px;
`;

const SIZES = {
  small: Small,
  medium: Medium,
  large: Large
};

const ProgressBar = ({ value, size }) => {
  let Component;

  if (SIZES[size]) {
    Component = SIZES[size];
  } else {
    throw new Error(`There is no a ${size} size variant available`);
  }

  return (
    <Component
      role="meter"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <div aria-hidden></div>
    </Component>
  );
};

export default ProgressBar;
