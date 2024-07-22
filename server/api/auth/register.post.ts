import { User } from "@/server/models/user";
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.firstName || !body.lastName || !body.password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Missing required fields',
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  const user = await User.create({
    name: `${body.firstName} ${body.lastName}`,
    age: undefined,
    avatarUrl: undefined,
    countries: [],
    tags: [],
    transport: [],
    level: 1,
    likes: [],
    purpose: undefined,
    music: [],
    email: body.email,
    password: hashedPassword,
  });

  return {...user.toObject(), password: undefined};
});