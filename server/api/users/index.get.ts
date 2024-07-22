import { User } from '@/server/models/user';

export default defineEventHandler(async (event) => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.error(err); 
  }
});