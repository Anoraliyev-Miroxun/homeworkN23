export const globalErrorHandle=(err,req,res,next)=>{
    console.log(err,"kkkkkkkkkkkkkkkkkkkkkkkkkkk")
    const statusCode=err.statusCode || 500;
    const message =err.message || "interval server error";
    return res.status(statusCode).json({
        statusCode,
        message
    })
}






// git init && git remote add origin <remote-repo-url> && git remote -v && git add . && git commit -m 'matn' && git checkout -b 'branch-nomi' && git push -u origin 'branch-nomi'



// import { Schema, model } from "mongoose";
// import { Roles } from "../const/index.js";
// import crypto from "../utils/Crypto.js";
// import tokenService from "../utils/Token.js";

// const AdminSchema = new Schema(
//   {
//     username: { type: String, unique: true, required: true },
//     email: { type: String, unique: true, required: true },
//     hashedPassword: { type: String, required: true },
//     isActive: { type: Boolean, default: true },
//     role: {
//       type: String,
//       enum: [Roles.SUPERADMIN, Roles.ADMIN],
//       default: Roles.ADMIN,
//     },
//   },
//   { timestamps: true, versionKey: false }
// );

// /* ========== 🛡 Middleware ========== */
// AdminSchema.pre("save", async function (next) {
//   if (!this.isMatched("password")) {
//     return next();
//   }
//   this.hashedPassword = await crypto.encrypt(this.hashedPassword);
// });

// /* ========== Method ========== */
// AdminSchema.methods.generateToken = function () {
//   console.log("bu this", this);
//   const payload = {
//     id: this._id,
//     isActive: this.isActive,
//     role: this.role,
//   };
//   const accessToken = tokenService.generateAccessToken(payload);
//   const refreshToken = tokenService.generateRefreshToken(payload);

//   return { accessToken, refreshToken };
// };

// const Admin = model("Admin", AdminSchema);
// export default Admin;
