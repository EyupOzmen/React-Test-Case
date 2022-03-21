import React from 'react';
import {HomePage} from './pages/Home';
import {EventProvider} from './context/EventContext';

const App = () => (
  <>
    <EventProvider>
      <HomePage />
    </EventProvider>
  </>
);

export default App;
