import React from 'react';
import GadgetForm from './GadgetForm';
import GadgetList from './GadgetList';
import WidgetForm from './WidgetForm';
import WidgetList from './WidgetList';

function App() {
  return (
    <main>
      <WidgetForm />
      <WidgetList />
      <hr />
      <GadgetForm />
      <GadgetList />
    </main>
  );
}

export default App;
