import React from 'react';
import {useAppSelector} from "../store/hooks";

interface WithSomeStateProps {
  someState: boolean;
}

const WithSomeState = (WrappedComponent: React.ComponentType<WithSomeStateProps>) => {
  // can't use useAppSelector inside a NON React functional component, insteas I can use render props patters (SomeStateProvider component)
  const someState = useAppSelector((state) => state.sidebar.active);
  const ReturnedComponent: React.FC = () => <WrappedComponent someState={someState}/>;
  return ReturnedComponent;
};

export {WithSomeState};
