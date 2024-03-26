import { User } from '../../models/user';

export default defineEventHandler(async (event) => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err); 
  }
});