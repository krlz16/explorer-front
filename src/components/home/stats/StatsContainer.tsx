import { fetchData } from '@/app/lib/data'
import { ROUTER } from '@/common/constants'
import React from 'react'
import Stat from './Stat'
import { HashrateIcon, RbtcIcon, UsersIcon } from '@/common/icons'
import { parseDecimals } from '@/common/utils/ParseDecimals'

interface IStats {
  activeAccounts: number,
  hashrate: number,
  circulatingSupply: number,
  totalSupply: number
}

export default async function StatsContainer() {
  const response = await fetchData<IStats>(ROUTER.STATS);
  const stats = response?.data;
  return (
    <div className="flex gap-3 mt-9 justify-between">
      <Stat
        title='EHs'
        value={parseDecimals(stats?.hashrate, 0)}
        description='Net Hashrate'
        icon={<HashrateIcon />}
      />
      <Stat
        title='RBTC'
        value={parseDecimals(stats?.circulatingSupply, 0)}
        description='BTC Locked In 2WP'
        icon={<RbtcIcon />}
      />
      <Stat
        title='BTC'
        value={parseDecimals(stats?.totalSupply, 0)}
        description='2WP Locking Cap'
        icon={<RbtcIcon />}
      />
      <Stat
        title=''
        value={parseDecimals(stats?.activeAccounts, 0)}
        description='Active Accounts'
        icon={<UsersIcon />}
      />
    </div>
  )
}
