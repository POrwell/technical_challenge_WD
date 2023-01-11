const router = require("express").Router();
const phoneData = require("../data/phones.json")

router.get("/", (req, res) => {
  res.json(phoneData);
});

router.get("/:id", (req, res)=> {
    const phoneId = req.params.id;
    const phone = phoneData.filter(
        (phone) => Number(phone.id) === Number(phoneId)) [0];
    res.json(phone)
})

module.exports = router;