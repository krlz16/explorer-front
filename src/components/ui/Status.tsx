import React from 'react';
import Badge from './Badge';
import { StatusType } from '@/common/interfaces/Txs';

const STATUS_MAP: Record<
  StatusType,
  { text: string; type: 'success' | 'fail' | 'pending' }
> = {
  SUCCESS: { text: 'Success', type: 'success' },
  PENDING: { text: 'Pending', type: 'pending' },
  FAIL: { text: 'Fail', type: 'fail' },
  REMOVED: { text: 'Removed', type: 'fail' },
};

function Status({ type }: { type: StatusType }) {
  const status = STATUS_MAP[type];
  return status ? <Badge text={status.text} type={status.type} /> : null;
}

export default Status;
