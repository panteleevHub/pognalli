import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  age: Number,
  avatarUrl: String,
  countries: [{type: Schema.Types.ObjectId, ref: 'Country'}],
  tags: [String],
  transport: [String],
  level: Number,
  likes: [Number],
  purpose: String,
  music: [String],
}, {versionKey: false});

export const User = model('User', UserSchema);