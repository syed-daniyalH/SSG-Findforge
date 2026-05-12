/**
 * Truncate text by word limit
 * @param text - input string
 * @param limit - max number of words
 * @returns truncated string with "..." if exceeded
 */
export function truncateText(text: string = "", limit: number = 0): string {
  if (!text || typeof text !== "string") return "";

  // Clean extra spaces
  const words = text.trim().split(/\s+/);

  // If limit is invalid or text is within limit
  if (limit <= 0 || words.length <= limit) {
    return words.join(" ");
  }

  // Truncate and append ellipsis
  return words.slice(0, limit).join(" ") + "...";
}

