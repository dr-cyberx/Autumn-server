import mongoose, { model, Schema } from "mongoose";
import {
  appendMethodToUser,
  hashUserPassword,
} from "../../middlewares/userMethods";

const userSchema: mongoose.Schema = new Schema(
  {
    profileImage: {
      type: String,
      required: false,
    },
    name: {
      firstName: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
    },
    userName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      requried: true,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    isPhoneVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    isEmailVerified: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

hashUserPassword(userSchema);
appendMethodToUser(userSchema);

const User = model("User", userSchema);

export default User;
