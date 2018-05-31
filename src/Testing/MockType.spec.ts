export function MockType(obj: any): any {
  let mockedObj = {},
    proto = obj.prototype;

  Object.getOwnPropertyNames(proto).forEach((key) => {
    if (proto[key] && typeof (proto[key]) === 'function') {
      mockedObj[key] = jasmine.createSpy(key);
    }
  });

  return mockedObj;
}
