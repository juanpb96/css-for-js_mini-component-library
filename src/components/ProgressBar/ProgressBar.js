import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
import { getInnerBarRadius } from './ProgressBar.helpers';

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
  padding: 4px;
  border-radius: 8px;
`;

const SIZES = {
  small: Small,
  medium: Medium,
  large: Large
};

const InnerBar = styled.div`
  --border-radius: 4px;

  width: ${({width}) => width + '%'};
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: var(--border-radius) var(--right-radius) var(--right-radius) var(--border-radius);
`;

const ProgressBar = ({ value, size }) => {
  let Component;
  const innerBarRightRadius = getInnerBarRadius(value)

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
      aria-labelledby="title"
    >
      <VisuallyHidden id="title">Custom Progress Bar</VisuallyHidden>
      <InnerBar
        aria-hidden
        style={{ '--right-radius': innerBarRightRadius }}
        width={value}
      />
    </Component>
  );
};

export default ProgressBar;
