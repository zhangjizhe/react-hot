import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';
const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root'),
    )
}
render(App)

if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
}