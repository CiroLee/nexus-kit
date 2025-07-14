export function removeLastEmptyLine(str: string) {
  const lines = str.split(/\r?\n/);

  if (lines.length > 0 && /^\s*$/.test(lines[lines.length - 1])) {
    lines.pop();
  }

  return lines.join('\n');
}

export function isWindows() {
  if (typeof window === 'undefined') {
    return false;
  }
  return /Windows/i.test(window.navigator.userAgent);
}
