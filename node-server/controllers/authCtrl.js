module.exports = {
  hit: (req, res) => {
    let result = "hit";

    console.log(result);

    res.send(result).status(200);
  },
};
