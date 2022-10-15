const router = require("express").Router();
const STRIPE_SECRET_KEY =
  "sk_test_51LadlKDZGO6oz7V6nnyfo6IHWcqQxQpD3tURrhptgIxASGpSd19feLWyso6i9u9Foq6SLJEvLpUUzQEdts4gT75m00gnu63CHT";
const stripe = require("stripe")(STRIPE_SECRET_KEY);

router.post("/payment", async (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
