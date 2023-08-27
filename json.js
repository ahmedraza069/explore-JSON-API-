const myObject = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    hobbies: ["reading", "hiking", "cooking"],
    isStudent: false
  };
  
  console.log(myObject);

  const stringifiedMyObj = JSON.stringify(myObject);
  console.log(stringifiedMyObj);

  const parseStringify = JSON.parse(stringifiedMyObj);
  console.log(parseStringify);