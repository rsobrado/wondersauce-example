import React from 'react';
import Container from '@material-ui/core/Container';

import Items from './Items';

function App() {


  return (
    <Container maxWidth="lg">
      <section>
        <Items />
      </section>
    </Container>
  );
}

export default App;
