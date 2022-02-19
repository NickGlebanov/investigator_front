import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Header} from "./Header.tsx";

window.addEventListener('load', () => {
    ReactDOM.render(<Header/>, document.getElementById('root'));
});

