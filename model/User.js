import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id:{ type:String, required:true},
  name: { type:String, required:true},
  email: { type:String, required:true,unique:true},
  imageUrl: { type:String, required:true},
  cartItems: {type:Object, default: {}}, // Items stored in user table?
}, { minimize:false })

const User = mongoose.models.user || mongoose.model('user', userSchema) // if model is available use, ifnot create user model

export default User