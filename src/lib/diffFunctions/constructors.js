const determineKeyStatus = (obj1, obj2, key) => {
  if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) return 'added';
  if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) return 'removed';
  if (obj1[key] === obj2[key]) return 'unchanged';
  return 'changed';
};

export const makeTerminal = (obj1, obj2, key) => ({
  key,
  type: 'terminal',
  status: determineKeyStatus(obj1, obj2, key),
  oldValue: obj1[key],
  newValue: obj2[key],
});

export const makeNode = (key, children) => ({
  key,
  type: 'node',
  children,
});
