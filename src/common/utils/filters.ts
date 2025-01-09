import { parseDecimals } from "./ParseDecimals";
import { parseDate } from "./Time";

export const filters = {
  parseDecimals,
  parseJSON: (value: string | undefined) => (value ? JSON.parse(value) : []),
  timeAgo: (value: number | string | undefined) => parseDate(value).timeAgo,
  toGwei: (value: number | undefined) => (value !== undefined ? (value / 1e9).toFixed(2) + " Gwei" : "N/A"),

  toGigahashes: (value: number | undefined) => (value !== undefined ? value.toFixed(2) + " GH" : "N/A"),

  toExahashes: (value: number | undefined) => (value !== undefined ? value.toFixed(2) + " EH" : "N/A"),

  defaultValue: (value: unknown, defaultVal: string = "N/A") => (value !== undefined && value !== null ? value : defaultVal),
};