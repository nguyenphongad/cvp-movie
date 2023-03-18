import { BrowserRouter } from 'react-router-dom';

import RenderFooter from '../components/Footer/RenderFooter';
import RenderHeader from '../components/Header/RenderHeader';
import RouterBody from '../router/Routes/RouterBody';

import '../style/styleMain.scss';
import ScrollToTopRouter from './ScrollToTopRouter';

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../components/error/RenderErrorBounDary';
import RenderMaintenance from './RenderMaintenance';
import RouterAuth from '../router/Routes/RouterAuth';

function App() {

  const MAINTENANCEPAGE = false;
  const AUTH_LOGIN = false;

  return (

    <>
      <BrowserRouter>
        <div className="App">
          {
            MAINTENANCEPAGE ?
              <RenderMaintenance />
              :
              AUTH_LOGIN ?
                <>
                  <RouterAuth />
                </>
                :
                <>
                  <RenderHeader />
                  <RouterBody />
                  <ScrollToTopRouter />
                  <RenderFooter />
                </>
          }
        </div>
      </BrowserRouter>
      {/* <RenderLoadingStart /> */}
    </>

  )
}

export default withErrorBoundary(App, {
  FallbackComponent: RenderErrorBounDary
});