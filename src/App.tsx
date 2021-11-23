import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './components/home';
import './App.css';

function App() {
  const [title, setTitle] = React.useState<string>('Home');
  window.console.log('[Rerender App]');
  return (
    <Provider store={store}>
      <div className="App">
        <Home title={title} />
        <button onClick={() => setTitle('New Home')}>Change title</button>
      </div>
    </Provider>
  );
}

export default App;
