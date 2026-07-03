export function parseContent(content: string) {
  try {
    return JSON.parse(content);
  } catch {
    return content;
  }
}