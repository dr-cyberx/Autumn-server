import mongoose, { model, Schema } from "mongoose";

const userSchema: mongoose.Schema = new Schema(
  {
    profileImage: {
      type: String,
      required: false,
    },
    name: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    isPhoneVerified: {
      type: Boolean,
      required: true,
    },
    isEmailVerified: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
