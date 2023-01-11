import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import RenderFullScreen from './views/RenderFullScreen';
import RenderListFilmSystem from './components/ListFilmSystem/RenderListFilmSystem';
import RenderGetWindowResize from './views/RenderGetWindowResize';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RenderListFilmSystem>
        <RenderFullScreen>
            <RenderGetWindowResize>
                <App />
            </RenderGetWindowResize>
        </RenderFullScreen>
    </RenderListFilmSystem>
);
