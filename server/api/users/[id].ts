import { User } from '@/server/models/user';

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id');
    const user = await User.findById(id).exec();
    
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
      });
    }

    return {...user.toObject(), password: undefined};

  } catch (err) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
      });
  }
});