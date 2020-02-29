const mongoose = require("mongoose");

const gigsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    },
    offer: {
      type: Number,
      require: true
    },
    negotiable: {
      type: Boolean,
      require: true
    },
    deadline: {
      type: mongoose.Schema.Types.Date,
      require: true
    },
    owner: {
      type: Object,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Gig = mongoose.model("Gig", gigsSchema);

module.exports = Gig;
