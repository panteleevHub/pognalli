import { User } from "@/server/models/user";
import bcrypt from 'bcrypt';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.firstName || !body.lastName || !body.password) {
   throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });
  }

  const user = await User.findOne({email: body.email});

  if (!user) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(body.password, salt);

  const newUser = await User.create({
    name: `${body.firstName} ${body.lastName}`,
    age: 0,
    avatarUrl: '',
    countries: [],
    tags: [],
    transport: [],
    level: 1,
    likes: [],
    purpose: '',
    music: [],
    email: body.email,
    password: hashedPassword,
  });

  return {...newUser.toObject(), password: undefined};
});