import {Meteor} from 'meteor/meteor';
import React from 'react';
import {render} from 'react-dom';
import App from '../imports/ui/App.js';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

Meteor.startup(() => {
    injectTapEventPlugin();
    render(
        <MuiThemeProvider>
            <App/>
        </MuiThemeProvider>, document.getElementById('App'));
});
