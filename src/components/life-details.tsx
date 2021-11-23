import React from 'react';
import { SomeStateProvider } from './some-state-provider';

interface LifeDetailsProps {
  fullName: string;
}

const LifeDetails: React.FC<LifeDetailsProps> = ({ fullName }) => {
  return (
    <SomeStateProvider>
      {(someState) => (
        <>
          <h2>{fullName.toUpperCase()}</h2>
          <div>{`The state is ${someState.toString().toUpperCase()}`}</div>
        </>
      )}
    </SomeStateProvider>
  );
};

export default LifeDetails;
