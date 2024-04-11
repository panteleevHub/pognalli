import { faker } from '@faker-js/faker';

export const getDeepObjectCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const generateCountriesIds = () => Array.from({length: 237}, () => faker.database.mongodbObjectId());

export const generateUsers = (userCount, countriesIds) => {
  const purpose = ['vacation', 'work', 'study'];
  const avatars = [
    'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    'https://i.postimg.cc/sXKQ5n5y/dmitry-rodionov-unsplash.jpg',
  ];

  const getRandomTransport = () => {
    const transport = ['plane', 'auto', 'bike', 'walk'];

    const start = faker.number.int({min: 0, max: 3});
    const end = faker.number.int({min: start + 1, max: 4});

    return transport.slice(start, end);
  };

  const generateUser = () => {
    return {
      _id: faker.database.mongodbObjectId(),
      name: faker.person.fullName(),
      age: faker.number.int({ min: 16, max: 100 }),
      avatarUrl: avatars[faker.number.int({min: 0, max: 2})],
      countries: Array.from({length: faker.number.int({min: 1, max: 4})}, () => countriesIds[faker.number.int({min: 0, max: 236})]),
      tags: Array.from({length: faker.number.int({min: 1, max: 7})}, () => `#${faker.lorem.word()}`),
      transport: getRandomTransport(),
      level: faker.number.int({min: 1, max: 100}),
      likes: Array.from({length: faker.number.int({min: 0, max: 100})}, () => faker.number.int({min: 1, max: 100})),
      purpose: purpose[faker.number.int({min: 0, max: 2})],
      music: Array.from({length: faker.number.int({min: 1, max: 4})}, () => faker.music.genre().toLocaleLowerCase()),
      authData: {
        email: faker.internet.email(),
        password: faker.internet.password({length: 8}),
      }
    }
  };

  return Array.from({length: userCount}, () => generateUser());
};

export const generateCountries = (users, countriesIds) => {
  const countries = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bangladesh', 'Barbados', 'Bahamas', 'Bahrain', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Territory', 'British Virgin Islands', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'China', 'Christmas Island', 'Cocos (Keeling) Islands', 'Colombia', 'Comoros', 'Congo-Brazzaville', 'Congo-Kinshasa', 'Cook Islands', 'Costa Rica', 'Croatia', 'Cura?ao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'El Salvador', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Federated States of Micronesia', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Lands', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Heard and McDonald Islands', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Islands', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'R?union', 'Romania', 'Russia', 'Rwanda', 'Saint Barth?lemy', 'Saint Helena', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin', 'Saint Pierre and Miquelon', 'Saint Vincent', 'Samoa', 'San Marino', 'S?o Tom? and Pr?ncipe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Georgia', 'South Korea', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Svalbard and Jan Mayen', 'Sweden', 'Swaziland', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks and Caicos Islands', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Vietnam', 'Venezuela', 'Wallis and Futuna', 'Western Sahara', 'Yemen', 'Zambia', 'Zimbabwe'];
  const flags = [
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/BE.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/CO.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg',
  ];

  return countries.map((el, inx) => ({
    _id: countriesIds[inx],
    name: el,
    flag: {
      src: flags[faker.number.int({min: 0, max: 6})],
      alt: `Flag of ${el}`,
    },
    users: users.filter((user) => user.countries.includes(countriesIds[inx])),
  }));
};