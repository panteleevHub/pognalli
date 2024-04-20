import { Schema, model } from 'mongoose';

const PromoUserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  avatarUrl: String,
  countries: [{type: Schema.Types.ObjectId, ref: 'Country'}],
  tags: [String],
  transport: [String],
  level: Number,
}, {versionKey: false});

export const PromoUser = model('PromoUser', PromoUserSchema);