import { Country } from '../models/country';

export default defineEventHandler(async (event) => {
  try {
    const countries = await Country.find();
    return countries;
  } catch (err) {
    console.error(err); 
  }
});