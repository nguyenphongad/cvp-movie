import { BrowserRouter } from 'react-router-dom';
import RenderHeader from '../components/Header/RenderHeader';
import RouterBody from '../router/Routes/RouterBody';

import '../style/styleMain.scss';
import ScrollToTop from './ScrollToTopRt';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RenderHeader />
        <RouterBody />
        <ScrollToTop/>
      </div>
    </BrowserRouter>
  );
}

export default App;
