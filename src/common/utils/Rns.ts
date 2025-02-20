/* eslint-disable */
// @ts-nocheck
import Resolver from '@rsksmart/rns-resolver.js';
import { PUBLIC_DOMAIN } from '../constants';

export const getRnsAddress = async (address: string) => {
  let resolver;

  if (PUBLIC_DOMAIN?.includes('testnet'))
    resolver = new Resolver.forRskTestnet();
  else resolver = new Resolver.forRskMainnet();

  return resolver.addr(address);
};
