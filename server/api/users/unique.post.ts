import { User } from '@/server/models/user';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = await User.find({email: body.email});
    return user.length !== 0 ? {email: user[0].email} : {email: ''};
  } catch (err) {
    console.error(err); 
  }
});