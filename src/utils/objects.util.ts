import type { ObjectLiteral, IsJsonable } from '~/utils/types.util';

export const objects = {
  shallowCopy,
  deepCopyJson,
  shallowIsEqual,
};

function shallowCopy<T>(inObject: T): T {
  if (typeof inObject !== 'object' || inObject === null) {
    return inObject; // Return the value if inObject is not an object
  } else {
    // shallow copy via object spread
    return { ...inObject };
  }
}

function deepCopyJson<T>(inObj: IsJsonable<T>): IsJsonable<T> {
  return JSON.parse(JSON.stringify(inObj));
}

// https://stackoverflow.com/a/52323412/1700319
function shallowIsEqual(obj1: ObjectLiteral, objToCompareWith: ObjectLiteral) {
  return (
    Object.keys(obj1).length === Object.keys(objToCompareWith).length &&
    Object.keys(obj1).every(
      (key) =>
        Object.hasOwnProperty.call(objToCompareWith, key) && obj1[key] === objToCompareWith[key],
    )
  );
}
