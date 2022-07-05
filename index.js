function kal(weight, height, age, activity) {
  const withoutActivity = 10 * weight + 6.25 * height - 5 * age + 5;
  let activityLevels = {
    low: 1.2,
    medium: 1.375,
    high: 1.55,
    extra: 1.9,
  }
  let result = withoutActivity * activityLevels[activity];
  
  return result
};

let me = {
  weight: 76,
  height: 198,
  age: 15,
  activity: 'medium',
};

let sasha = {
  weight: 94,
  height: 193,
  age: 20,
  activity: 'low',
};

let zhenyasKallories = kal(me.weight, me.height, me.age, me.activity);
let sashasKallories = kal(sasha.weight, sasha.height, sasha.age, sasha.activity)

console.log(zhenyasKallories, sashasKallories)
