// blockDataConfig.ts
export const blockEntity = {
  totalDifficulty: {
    label: "Total Difficulty",
    type: "difficulty",
    filters: ["toEH"],
  },
  gasLimit: {
    label: "Gas Limit",
    type: "gas",
    default: 0,
    filters: ["parseDecimals"],
  },
  gasUsed: {
    label: "Gas Used",
    type: "gas",
    default: 0,
    filters: ["parseDecimals"],
  },
  uncles: {
    label: "Uncles",
    type: "list",
  },
  timestamp: {
    label: "Timestamp",
    type: "time",
    filters: ["timeAgo"],
  },
  date: {
    label: 'Date',
    type: "time",
    filters: ["timeAgo"],
  }
};
  