// Exercise #4
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
// Start coding here

const getJohnProfileAsync = async () => {
  try {
    const john = await getJohnProfile();
    console.log(john);
  } catch (error) {
    console.log(error);
  }
};

getJohnProfileAsync();
