import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import RenderFullScreen from './views/RenderFullScreen';
import RenderListFilmSystem from './components/ListFilmSystem/RenderListFilmSystem';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RenderListFilmSystem>
        <RenderFullScreen>
            <App />
        </RenderFullScreen>
    </RenderListFilmSystem>
);
