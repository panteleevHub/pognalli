import mongoose from 'mongoose';
import { generateUsers } from '../utils';
import { User } from './models/user';

const config = useRuntimeConfig();

export default async () => {
  try {
    await mongoose.connect(config.mongodbUrl);
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};