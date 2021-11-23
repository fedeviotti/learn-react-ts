const ensure = <T>(value: T | undefined | null):T => {
  if (value === undefined || value === null) {
    throw new TypeError('This value was promised to be here');
  }
  return value;
}

export { ensure };
