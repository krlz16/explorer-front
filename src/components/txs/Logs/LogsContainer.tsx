import { ILogs } from '@/common/interfaces/Txs'
import React from 'react'
import Log from './Log'

type props = {
  logs: ILogs[] | undefined
}
function LogsContainer({ logs }: props) {
  return (
    <div>
      {
        logs?.map((log, i) => (
          <Log log={log} key={i} />
        ))
      }
    </div>
  )
}

export default LogsContainer
