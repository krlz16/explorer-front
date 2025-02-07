import React from 'react';
import { useTxsDataContext } from '@/context/TxsContext';
import Log from './Log';

function LogsContainer() {
  const { tx } = useTxsDataContext();
  return (
    <div className="bg-secondary p-4 rounded-xl">
      {tx?.receipt?.logs?.map((log, i) => (
        <Log
          key={i}
          className={`flex p-4 gap-6 w-full ${tx?.receipt?.logs.length - 1 === i ? '' : 'border-b border-line'}`}
          i={i}
          log={log}
        />
      ))}
      {!tx?.receipt?.logs && (
        <div className="text-center">The Transaction Does Not Contain Logs</div>
      )}
    </div>
  );
}

export default LogsContainer;
