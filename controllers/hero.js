const Hero = require("../models/hero");

exports.getAllHeroes = async (req, res, next) => {
  try {
    const heroes = await Hero.find();
    res.status(200).json(heroes);
  } catch (err) {
    console.error(err);
    next(err);
    // res
    //   .status(500)
    //   .json({ message: "An error occurred. Please try again later" });
  }
};

exports.getHero = async (req, res, next) => {
  try {
    const hero = await Hero.findById(req.params.id);

    if (!hero) {
      return res.status(404).json("No hero found");
    }

    res.status(200).json(hero);
  } catch (err) {
    next(err);
  }
};

exports.createHero = async (req, res, next) => {
  try {
    const hero = await Hero.create(req.body);

    if (!hero) {
      return res.status(404).json("Something went wrong");
    }

    res.status(200).json(hero);
  } catch (err) {
    next(err);
  }
};

exports.updateHero = async (req, res, next) => {
  try {
    const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!hero) {
      return res.status(404).json("No hero found");
    }

    res.status(200).json(hero);
  } catch (error) {
    next(err);
  }
};

exports.deleteHero = async (req, res, next) => {
  try {
    const hero = await Hero.findByIdAndDelete(req.params.id);

    if (!hero) {
      return res.status(404).json("No hero found");
    }

    res.status(200).json("Delete hero successfully");
  } catch (error) {
    next(err);
  }
};
