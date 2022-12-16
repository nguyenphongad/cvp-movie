import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import RenderFullScreen from './views/RenderFullScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RenderFullScreen>
        <App />
    </RenderFullScreen>
);
