import React from 'react';
import GadgetList from './GadgetList';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

function App() {
  return (
    <main>
      <WidgetForm />
      <WidgetList />
      <hr />
      <GadgetList />
    </main>
  );
}

export default App;
