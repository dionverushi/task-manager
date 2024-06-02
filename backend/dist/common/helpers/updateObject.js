"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObject = void 0;
function updateObject(obj, path, value) {
    const keys = path.split(/\[|\]/).filter(Boolean);
    let target = obj;
    for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        const nextKey = keys[i + 1];
        if (/\d+/.test(nextKey)) {
            if (!Array.isArray(target[key])) {
                target[key] = [];
            }
        }
        else {
            if (!target[key]) {
                target[key] = {};
            }
        }
        target = target[key];
    }
    const lastKey = keys[keys.length - 1];
    target[lastKey] = value;
}
exports.updateObject = updateObject;
//# sourceMappingURL=updateObject.js.map