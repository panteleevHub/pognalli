import { User } from '@/server/models/user';

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const user = await User.findOne({email: body.email});
    return user ? {email: user.email} : {email: ''};
  } catch (err) {
    console.error(err); 
  }
});