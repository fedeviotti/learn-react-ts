import * as React from 'react';
import { useAppSelector } from '../store/hooks';

const Address: React.FC = () => {
  const active = useAppSelector((state) => state.sidebar.active);
  const [count, setCount] = React.useState<number>(0);

  const calcMyValue = (num: number) => {
    // window.console.log('[calcMyValue]', count);
    setCount(count + num);
  };

  React.useEffect(() => {
    calcMyValue(5);
  }, [active]);

  return <div>Address component - {active ? 'On' : 'Off'}</div>;
};

export { Address };
