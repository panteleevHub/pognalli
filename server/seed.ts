import { generateCountries, generateUsers, generateCountriesIds } from '@/utils';
import { User } from './models/user';
import { Country } from './models/country';
import { PromoUser } from './models/user/promo';

export default async () => {
  try {
    const countriesIds = generateCountriesIds();
    const users = generateUsers(50, countriesIds);
    const countries = generateCountries(users, countriesIds);

    await User.deleteMany({fake: true});
    await PromoUser.deleteMany();
    await Country.deleteMany();

    await User.insertMany(users);
    await PromoUser.insertMany(users.slice(0, 2));
    await Country.insertMany(countries);

  } catch (err) {
    console.error(err);
  }
};