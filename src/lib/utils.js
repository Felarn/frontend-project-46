const is = {
  object: (input) => typeof input === 'object' && input !== null,
  node: (obj) => obj.type === 'node',
};
export default is;
