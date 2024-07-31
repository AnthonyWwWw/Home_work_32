import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../ui/components/Layout/index';
import { routes } from '../engine/config/routes/routes';
import { Provider } from 'react-redux';
import { store } from '../engine/init/store';
import { WrapperContent as Container } from './components'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Routes>
            <Route path="/" element={<Layout />}>
              {Object.keys(routes).map(item => (
                <Route element={routes[item].element} path={routes[item].path} key={item} />
              ))}
            </Route>
          </Routes>
        </Container>
      </React.Fragment>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
