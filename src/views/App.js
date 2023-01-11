import { BrowserRouter } from 'react-router-dom';

import RenderFooter from '../components/Footer/RenderFooter';
import RenderHeader from '../components/Header/RenderHeader';
import RouterBody from '../router/Routes/RouterBody';

import '../style/styleMain.scss';
import ScrollToTopRouter from './ScrollToTopRouter';

import { withErrorBoundary } from 'react-error-boundary';
import RenderErrorBounDary from '../components/Error/RenderErrorBounDary';
import { useEffect, useState } from 'react';
import RenderLoadingStart from './RenderLoadingStart';
import RenderMaintenance from './RenderMaintenance';
import RenderModalDetailHistoryTickets from '../components/pages/BookTickets/ModalDetailHistoryTickets/RenderModalDetailHistoryTickets';

function App() {

  // const [postLoading, setPostLoading] = useState(null);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts/1")
  //     .then(response => response.json())
  //     .then(response => {
  //       const { body } = response
  //       setPostLoading(body)
  //     })
  // }, []);

  const MAINTENANCEPAGE = true;

  return (

    <>
      {/* {postLoading ? */}
        <BrowserRouter>
          <div className="App">
            {
              MAINTENANCEPAGE ?
                <RenderMaintenance />
                : <>
                  <RenderHeader />
                  {/* <RenderModalDetailHistoryTickets/> */}
                  <RouterBody />
                  <ScrollToTopRouter />
                  <RenderFooter />
                </>
            }

          </div>
        </BrowserRouter> 
        {/* : <RenderLoadingStart />} */}
      {/* <RenderLoadingStart /> */}
    </>

  )
}

export default withErrorBoundary(App, {
  FallbackComponent: RenderErrorBounDary
});