const user = {
    '': 1,
    ' ': 1,
    123: 1,
    '12345n': 2,
    true: 1,
    id: 2,
    name: 'Hong',
    [Symbol()]: 'Hong',
    [`${new Date()}`]: 365,
    'my-friends': ['Han', 'Kim'],
    getInfo: () => `${this.id}-${this.name}`,
    getInfo() {
      return `${this.id}-${this.name}`;
    },
  };

  function myEntries(obj) {
    const rets = [];
    for (let k in obj) {
      console.log(k);
      rets.push([k, obj[k]]);
    }
    return rets;
  }
  
  console.log('myEntries>>', myEntries(user));
  