import { compare, genSalt, hash } from "bcrypt";
import mongoose from "mongoose";

export const hashUserPassword = (
  schemaName: mongoose.Schema
): mongoose.Schema =>
  schemaName.pre("save", function (next) {
    console.log("This => ", this);
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    genSalt(10, (err: any, salt: any) => {
      if (err) {
        return next(err);
      }
      hash(user.password, salt, (err1: any, hash1: any) => {
        if (err1) {
          return next(err1);
        }
        console.log(hash1);
        user.password = hash1;
        next();
      });
    });
  });

export const appendMethodToUser = (schemaName: mongoose.Schema) =>
  (schemaName.methods.comparePassword = function (CandidatePassword: string | Buffer) {
    const user = this;
    return new Promise((resolve, reject) => {
      compare(CandidatePassword, user.password, (err, isMatch) => {
        if (err) {
          return reject(err);
        }

        if (!isMatch) {
          return reject(false);
        }

        resolve(true);
      });
    });
  });

