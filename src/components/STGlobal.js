import { Children } from 'react';
import { injectGlobal } from 'styled-components';
import { normalize, fontFace } from 'polished';

const STGlobal = (props) => {

  injectGlobal`
  ${normalize()}

  fontFace({
    'fontFamily': 'Open Sans',
    'fontFilePath': '/fonts/OpenSans-Regular',
    fileFormats: ['ttf']
  }
  )}

  body {
      font-family: 'Open Sans';
      background: #fff;
    }
`;

  return Children.only(props.children);
};


export default STGlobal;