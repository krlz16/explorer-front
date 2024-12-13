import CardInfo from './CardInfo';
import { HashrateIcon, RbtcIcon, UsersIcon } from '@/common/icons';

function CardContainer() {
  return (
    <div className="flex gap-3 mt-9 justify-between">
      <CardInfo
        title='EHs'
        value='91'
        description='Net Hashrate'
        icon={<HashrateIcon />}
      />
      <CardInfo
        title='RBTC'
        value='3,415'
        description='BTC Locked In 2WP'
        icon={<RbtcIcon />}
      />
      <CardInfo
        title='BTC'
        value='21,000,000'
        description='2WP Locking Cap'
        icon={<RbtcIcon />}
      />
      <CardInfo
        title='51,620'
        value=''
        description='Active Accounts'
        icon={<UsersIcon />}
      />
    </div>
  )
}

export default CardContainer
