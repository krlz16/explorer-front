import { ClockIcon } from '@/common/icons';
import { parseDate } from '@/common/utils/Time';
import React from 'react';

function Date({ date }: { date: string | undefined }) {
  const { formattedDate, timeAgo } = parseDate(date);
  return (
    <span className="flex items-center gap-2">
      <ClockIcon /> {timeAgo} | {formattedDate}
    </span>
  );
}

export default Date;
