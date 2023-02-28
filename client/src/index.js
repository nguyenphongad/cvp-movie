import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App';
import RenderFullScreen from './views/RenderFullScreen';
import RenderListFilmSystem from './components/ListFilmSystem/RenderListFilmSystem';
import RenderGetWindowResize from './views/RenderGetWindowResize';
import RenderBookTicketsPlaying from './components/pages/BookTickets/TabBookTickets/RenderBookTicketsPlaying';
import ContextTabBookTicketsPlaying from './components/pages/BookTickets/TabBookTickets/ContextTabBookTicketsPlaying';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextTabBookTicketsPlaying>
        <RenderListFilmSystem>
            <RenderFullScreen>
                <RenderGetWindowResize>
                    <App />
                </RenderGetWindowResize>
            </RenderFullScreen>
        </RenderListFilmSystem>
    </ContextTabBookTicketsPlaying>
);
