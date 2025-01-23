import React from 'react'
import { useTxsDataContext } from '@/context/TxsContext'
import ToolTip from '@/components/ui/ToolTip';
import Code from '@/components/ui/Code';

function LogsContainer() {
  const { tx } = useTxsDataContext();
  return (
    <div className='bg-secondary p-4 rounded-xl'>
      {
        tx?.receipt.logs?.map((log, i) => (
          <div className={`flex p-4 gap-6 w-full ${tx?.receipt?.logs.length - 1 === i ? '' : 'border-b border-line'}`} key={i}>
            <div className='w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center text-sm'>
              {i}
            </div>
            <div className='flex-1'>
              <div className='flex items-center gap-8'>
                <div className='w-1/12 text-end'>Address</div>
                <div className='flex-1'>
                  <ToolTip text={log.address} trim={0} />
                </div>
              </div>
              <div className="flex w-full mt-5 gap-8">
                <div className="w-1/12 text-white-400 text-end">Topic</div>
                <div className="flex-1">
                  {
                    log.topics.map((t, i) => (
                      <div key={i} className='flex gap-2'>
                        <div className='bg-gray-600 border border-gray-700 rounded-md w-4 px-1 h-5 flex items-center justify-center text-sm font-thin'>
                          {i}
                        </div>
                        <div>{t}</div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className='flex items-center gap-8 mt-5'>
                <div className='w-1/12 text-end text-white-400'>Data</div>
                <div className='flex-1'>
                  <Code code={log.data} />
                </div>
              </div>
            </div>
          </div>
        ))
      }

      {
        tx?.receipt?.logs.length === 0 && (
          <div className='text-center'>The Transaction Does Not Contain Logs</div>
        )
      }

    </div>
  )
}

export default LogsContainer
