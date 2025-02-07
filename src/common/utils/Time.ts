import { format, formatDistanceToNow } from 'date-fns';

interface Response {
  timeAgo: string;
  formattedDate: string;
}

export const parseDate = (timestamp: number | string | undefined): Response => {
  if (!timestamp) return { timeAgo: '', formattedDate: '' };
  const time = Number(timestamp);
  const formattedDate = format(new Date(time * 1000), 'dd/MM/yyyy');

  const timeAgo = formatDistanceToNow(new Date(time * 1000), {
    addSuffix: true,
  });

  return { timeAgo, formattedDate };
};
