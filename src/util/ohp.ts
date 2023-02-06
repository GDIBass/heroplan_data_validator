const ohp = (obj: object, prop: string): boolean =>
  Object.prototype.hasOwnProperty.call(obj, prop);

export default ohp;
