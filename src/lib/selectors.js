const get = {
  oldValue: (diff) => diff.oldValue,
  newValue: (diff) => diff.newValue,
  children: (diff) => diff.children,
  status: (diff) => diff.status,
};
export default get;
