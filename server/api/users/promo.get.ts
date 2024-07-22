import { PromoUser } from '@/server/models/user/promo';

export default defineEventHandler(async (event) => {
  try {
    const users = await PromoUser.find();
    return users;
  } catch (err) {
    console.error(err); 
  }
});