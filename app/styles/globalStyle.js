import { injectGlobal } from 'styled-components';

import Colors from '../consts/colors';

injectGlobal`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Open Sans';
      color: ${Colors.darkGray};
    }
`;
