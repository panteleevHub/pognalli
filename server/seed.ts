import { generateCountries, generateUsers, generateCountriesIds } from '@/utils';
import { User } from './models/user';
import { Country } from './models/country';

export default async () => {
  try {
    const countriesIds = generateCountriesIds();
    const users = generateUsers(30, countriesIds);
    const countries = generateCountries(users, countriesIds);

    await User.deleteMany();
    await Country.deleteMany();

    await User.insertMany(users);
    await Country.insertMany(countries);

  } catch (err) {
    console.error(err);
  }
};