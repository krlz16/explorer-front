import { AddressIcon, BlockIcon, TokenIcon, TxIcon } from '@/common/icons';

const RenderIcon = ({ type }: { type: string }) => {
  if (type === 'Transaction') return <TxIcon fill="fill-brand-orange" />;
  if (type === 'Block') return <BlockIcon fill="fill-brand-orange" />;
  if (type === 'Address' || type === 'Rns')
    return <AddressIcon fill="fill-brand-orange" />;
  if (type === 'Tokens') return <TokenIcon fill="fill-brand-orange" />;
  return null;
};

export default RenderIcon;
