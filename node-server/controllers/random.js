module.exports = {
  hit: (req, res) => {
    let result = "hit";

    console.log(result);

    res.send(result).status(200);
  },

  something: async (req, res) => {
    const db = req.app.get("db");
    const username = "ferdner";
    const kids = await db.get_kids(username);

    res.status(200).send(kids);
  },
};
