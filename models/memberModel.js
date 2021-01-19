// ANCHOR -- Require Modiles --
const mongoose = require("mongoose");
const validator = require("validator");

// ANCHOR -- Create Schema --
const memberSchema = new mongoose.Schema(
  // Schema Fields
  {
    name: {
      type: String,
      required: [true, "A member must  have a name"],
      trim: true,
      maxLength: [40, "Member name is too long"],
    },
    email: {
      type: String,
      required: [true, "Member must have an email"],
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ["member", "trainer", "employee", "admin"],
      default: "member",
    },
    password: {
      type: String,
      required: [true, "you must have a password"],
      minLength: 8,
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "you must confirm your password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords do not match!",
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    // Schema Options
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// SECTION == Create Indexes ==
// !SECTION

// SECTION == Virtual Populate ==
// !SECTION

// SECTION == Document Middle-Ware ==
// !SECTION

// SECTION == Query Middle-Ware ==
// !SECTION

// SECTION == Aggregation Middle-Ware ==
// !SECTION

// ANCHOR -- Create Tour Model --
const Member = mongoose.model("Member", memberSchema);

// ANCHOR -- Export Model --
module.exports = Member;
