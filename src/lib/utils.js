const is = {
  object: (input) => typeof input === 'object' && input !== null,
  changed: (obj) => obj.status === 'changed',
  unchanged: (obj) => obj.status === 'unchanged',
  added: (obj) => obj.status === 'added',
  removed: (obj) => obj.status === 'removed',
  node: (obj) => obj.type === 'node',
};
export default is;
