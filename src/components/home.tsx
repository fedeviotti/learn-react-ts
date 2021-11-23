import * as React from 'react';
import { Address } from './address';
import { useAppDispatch } from '../store/hooks';
import { toggle } from '../store/slices/sidebar-slice';
import LifeDetails from './life-details';
import { ensure } from '../utils/ensure';

const Home: React.FC<{ title: string }> = ({ title }) => {
  const dispatch = useAppDispatch();
  const person: { fullName?: string | null } = { fullName: 'Federico' };
  window.console.log('[Rerender Home]');

  React.useEffect(() => {
    window.console.log('Home did mount');
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <LifeDetails fullName={ensure(person.fullName)} />
      <button type="button" onClick={() => dispatch(toggle())}>
        Toggle
      </button>
      {/*<Photos />*/}
      <Address />
    </div>
  );
};

export { Home };
