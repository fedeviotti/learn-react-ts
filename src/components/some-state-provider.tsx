import React from 'react';
import {useAppSelector} from "../store/hooks";

const SomeStateProvider: React.FC<{children: (someState: boolean) => React.ReactElement}> = ({children}) => {
  const someState = useAppSelector((state) => state.sidebar.active);
  return children(someState);
}

export {SomeStateProvider};
