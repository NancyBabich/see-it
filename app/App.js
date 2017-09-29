import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import IndividualImageContainer from './containers/IndividualImageContainer';
import ImagesContainer from './containers/ImageListContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={ImagesContainer} />
        <Route path="/photos/:imageId" component={IndividualImageContainer} />
      </div>
    </Router>
  );
};

export default App;
