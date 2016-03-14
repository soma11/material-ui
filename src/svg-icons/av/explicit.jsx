import React from 'react';
import pure from 'recompose/pure';
import SvgIcon from '../../svg-icon';

let AvExplicit = (props) => (
  <SvgIcon {...props}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 6h-4v2h4v2h-4v2h4v2H9V7h6v2z"/>
  </SvgIcon>
);
AvExplicit = pure(AvExplicit)
AvExplicit.displayName = 'AvExplicit';

export default AvExplicit;