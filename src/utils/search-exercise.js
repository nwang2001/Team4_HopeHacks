require("dotenv").config();
const apiKey = process.env.API_KEY;

// search api by muscle (drop down?)
const search = (muscle, callback) => {
  const url = `https://api.api-ninjas.com/v1/exercises?muscle=${encodeURIComponent(
    muscle
  )}&x-api-key=${apiKey}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to the server.", undefined);
    } else if (body.length === 0) {
      callback("Unable to find exercises. Try another search.", undefined);
    } else {
      callback(undefined, {
        exercises: body,
      });
    }
  });
};

module.exports = search;
