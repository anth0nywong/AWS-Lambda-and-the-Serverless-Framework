module.exports.handler = async (event) => {
  const MULT = 7;
  let catAge = MULT * event.age;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: catAge,
        input: event,
      },
      null,
      2
    ),
  };
};
