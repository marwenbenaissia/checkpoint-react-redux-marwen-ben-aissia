import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './JS/store/index';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render
root.render(
    
<React.StrictMode>
    <Provider store={store}> {/* the component Provider needs a props store  */}
        <App />
    </Provider>
</React.StrictMode>
);


