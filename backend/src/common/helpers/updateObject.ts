export function updateObject(obj, path, value) {
  // Split the path string by '[' and ']'
  const keys = path.split(/\[|\]/).filter(Boolean);
  let target = obj;

  // Traverse the object using keys
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];

    if (/\d+/.test(nextKey)) {
      // If the next key is a number, initialize as an array if necessary
      if (!Array.isArray(target[key])) {
        target[key] = [];
      }
    } else {
      // If the next key is not a number, initialize as an object if necessary
      if (!target[key]) {
        target[key] = {};
      }
    }

    // Move to the next level
    target = target[key];
  }

  // Set the value at the target path
  const lastKey = keys[keys.length - 1];
  target[lastKey] = value;
}
