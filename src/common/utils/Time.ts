
export const timeAgo = (input: Date | string) => {
  let date = new Date(input);
  if (typeof input === "string") {
    const match = input.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4}),?\s?(\d{1,2}:\d{2}:\d{2})?$/);
    if (match) {
        const day = parseInt(match[1], 10);
        const month = parseInt(match[2], 10) - 1;
        const year = parseInt(match[3], 10);
        const time = match[4] || "00:00:00";
        const [hours, minutes, seconds] = time.split(":").map((t) => parseInt(t, 10));
        date = new Date(year, month, day, hours || 0, minutes || 0, seconds || 0);
    } else {
      date = new Date(input);
    }
  } else {
    date = input;
  }
  if (isNaN(date.getTime())) {
      throw new Error("El formato de fecha proporcionado no es válido.");
  }
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) return `${seconds}s`;
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  if (days < 30) return `${days}d`;
  if (months < 12) return `${months}M`;
  return `${years}y`;
}
