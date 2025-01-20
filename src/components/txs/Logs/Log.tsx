import { ILogs } from '@/common/interfaces/Txs'
import Accordion from '@/components/ui/Accordion'
import Card from '@/components/ui/Card'
import React from 'react'

function Log({ log }: { log: ILogs }) {
  return (
    <Card pd="p0" className="w-full border border-gray-500 my-3 text-white-400">
      <Accordion
        title={`${log.logIndex} ${log.address} ${log.event}`}
        styles={true}
        className='text-brand-purple'
        >
        <div className="flex shadow-line p-3 w-full">
          <div className="w-2/12">Log Index</div>
          <div className="w-10/12">{log.logIndex}</div>
        </div>
        <div className="flex shadow-line p-3 w-full">
          <div className="w-2/12">Address</div>
          <div className="w-10/12">{log.address}</div>
        </div>
        <div className="flex shadow-line p-3 w-full">
          <div className="w-2/12">Contract Name</div>
          <div className="w-10/12">no name</div>
        </div>
        <div className="flex shadow-line p-3 w-full">
          <div className="w-2/12">Event</div>
          <div className="w-10/12">
            <div className="w-full flex">
              <div>{log.event}{'('}</div>
                {
                  log.abi.inputs?.map((value, i) => (
                    <div key={i}>
                      <div className="flex gap-1">
                        <span className="text-brand-orange">{value.type}</span>
                        {value.indexed && (<span>indexed</span>)}
                        <span className={`text-white-100 ${ log.abi.inputs.length - 1 !== i && 'mr-2'}`}>
                          {value.name}
                          {
                            log.abi.inputs.length - 1 !== i && ','
                          }
                        </span>
                      </div>
                    </div>
                  ))
                }
              <div>{')'}</div>
            </div>
          </div>
        </div>
          {
            log?.args?.length && (
              <div className="flex shadow-line p-3 w-full">
              <div className="w-2/12">Argumetns</div>
              <div className="w-10/12">
                <div className="flex gap-1">
                  <span className="text-white-100">To:</span>
                  <span>{log.args[0]}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-white-100">BlockHash:</span>
                  <span>{log.args[1]}</span>
                </div>
                <div className="flex gap-1">
                  <span className="text-white-100">Value:</span>
                  <span>{log.args[2]}</span>
                </div>
              </div>
            </div>
            )
          }
        <div className="flex shadow-line p-3 w-full">
          <div className="w-2/12">Topic</div>
          <div className="w-10/12">
          {
            log.topics.map((t, i) => (
              <div key={i}>{t}</div>
            ))
          }
          </div>
        </div>
        <div className="flex shadow-line p-3 w-full">
          <div className="w-2/12">Data</div>
          <div className="w-10/12">{ log.data }</div>
        </div>
        <div className="flex p-3 w-full">
          <div className="w-2/12">Event Id</div>
          <div className="w-10/12">{log.eventId }</div>
        </div>
      </Accordion>
    </Card>
  )
}

export default Log
