import _ from 'lodash';
import { makeNode, makeTerminal } from './constructors.js';

const makeDiff = (obj1, obj2) => {
  const allKeys = Object.keys({ ...obj1, ...obj2 });
  return _.sortBy(allKeys)
    .map((key) => {
      if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
        const childrensDiff = makeDiff(obj1[key], obj2[key]);
        return makeNode(key, childrensDiff);
      }

      return makeTerminal(obj1, obj2, key);
    });
};

export default makeDiff;
