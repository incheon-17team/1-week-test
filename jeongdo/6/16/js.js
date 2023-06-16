// 비구조화할당

const test1 = {
  name: "jeongdo",
  target: {
    value: "hello !",
    adress: {
      test: {
        depth: "hello !!!!! depth",
      },
    },
  },
};

const {
  target: {
    adress: {
      test: { depth },
    },
  },
} = test1;

// console.log(depth);

// console.log(Object.entries(test1));

for (let key in test1) {
  console.log(test1[key]);
}
