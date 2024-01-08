const express = require("express");
const router = express.Router();

router.use(logger2);

router.get("/", (req, res) => {
  console.log(req.query.name);
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new", { firstName: "Test" });
  //res.send("User New Form");
});

router.post("/", (req, res) => {
  //res.send("Create User");
  const isValid = true;
  if (isValid) {
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    res.render("users/new", { firstName: req.body.firstName });
  }
  //console.log(req.body.firstName);
  //res.send('Hi');
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with id ${req.params.id}`);
  });

const users = [{ name: "Nehal" }, { name: "Kitty" }];

// middleware example
router.param("id", (req, res, next, id) => {
  req.user = users[id]; // for the given id user
  //console.log(id);
  next(); //goes to get
});

// router.get('/:id',(req,res) => {
//     res.send(`Get user with id ${req.params.id}`);
// });

// router.put('/:id',(req,res) => {
//     res.send(`Update user with id ${req.params.id}`);
// });

// router.delete('/:id',(req,res) => {
//     res.send(`Delete user with id ${req.params.id}`);
// });

function logger2(req, res, next) {
  console.log(req.originalUrl);
  next();
}

module.exports = router;
