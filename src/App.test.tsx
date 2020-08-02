import React, {createElement} from 'react';
import ReactDOM from 'react-dom';
import {Chatter} from "./App";


test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Chatter/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
