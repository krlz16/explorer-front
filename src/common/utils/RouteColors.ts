import { ROUTER } from '@/common/constants';

const routeStyles = {
  [ROUTER.HOME]: {
    background: 'bg-brand-orange',
    text: 'text-brand-orange',
  },
  [ROUTER.BLOCKS.INDEX]: {
    background: 'bg-brand-green',
    text: 'text-brand-green',
  },
  [ROUTER.TXS.INDEX]: {
    background: 'bg-brand-purple',
    text: 'text-brand-purple',
  },
  [ROUTER.ITXS.INDEX]: {
    background: 'bg-brand-purple',
    text: 'text-brand-purple',
  },
  [ROUTER.ADDRESSES.INDEX]: {
    background: 'bg-brand-pink',
    text: 'text-brand-pink',
  },
  [ROUTER.TOKENS.INDEX]: {
    background: 'bg-brand-cyan',
    text: 'text-brand-cyan',
  },
  [ROUTER.EVENTS.INDEX]: {
    background: 'bg-brand-purple',
    text: 'text-brand-purple',
  },
};

// Valores predeterminados
const defaultStyles = {
  background: 'bg-gray-200',
  text: 'text-gray-500',
};

export function getRouteStyles(pathname: string) {
  const orderedRoutes = Object.keys(routeStyles).sort(
    (a, b) => b.length - a.length,
  );
  const matchedRoute = orderedRoutes.find((route) =>
    pathname.startsWith(route),
  );

  return matchedRoute ? routeStyles[matchedRoute] : defaultStyles;
}
