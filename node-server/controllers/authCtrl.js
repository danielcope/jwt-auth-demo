const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, email } = req.body;

    const [existingUser] = await db.auth.get_user_by_username(username);

    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const [newUser] = await db.auth.register(username, hash, email);
    delete newUser.hash;

    req.session.user = newUser;

    await res.status(200).send(req.session.user);
  },
};
