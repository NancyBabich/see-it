import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { configure } from './store/configureStore';
import IndividualImageContainer from './containers/IndividualImageContainer';
import ImagesContainer from './containers/ImageListContainer';
import LandingContainer from './containers/LandingContainer';

const App = () => {
  const store = configure();

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={ImagesContainer} />
          <Route path="/photos/:imageId" component={IndividualImageContainer} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
