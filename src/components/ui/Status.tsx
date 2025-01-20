import React from 'react'
import Badge from './Badge'

function Status({ value }: { value: boolean | number }) {
  return (
    <>
      {
        value
        ? <Badge text="Success" type="success" />
        : <Badge text="Fail" type="fail" />
      }
    </>
  )
}

export default Status
