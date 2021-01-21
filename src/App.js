import React from 'react';

import Headline from './component/headline';
import Header from './component/header';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button yo render posts!" />
      </section>
    </div>
  );
}

export default App;
