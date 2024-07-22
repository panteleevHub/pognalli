import { Schema, model } from 'mongoose';

const CountrySchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  flag: {
    src: String,
    alt: String,
  },
  users: [{type: Schema.Types.ObjectId, ref: 'User'}],
}, {versionKey: false});

export const Country = model('Country', CountrySchema);