import { faker } from '@faker-js/faker';

export const getDeepObjectCopy = (obj) => JSON.parse(JSON.stringify(obj));

export const generateUsers = (userCount) => {
  const purpose = ['vacation', 'work', 'study'];
  const avatars = [
    'https://i.postimg.cc/8PgtmdNg/christopher-campbell-unsplash.jpg',
    'https://i.postimg.cc/FRhkdtdD/stefan-stefancik-unsplash.jpg',
    'https://i.postimg.cc/sXKQ5n5y/dmitry-rodionov-unsplash.jpg',
  ];
  const flags = [
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/BE.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/CH.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/CO.svg',
    'http://purecatamphetamine.github.io/country-flag-icons/3x2/CN.svg',
  ];

  const getRandomTransport = () => {
    const transport = ['plane', 'auto', 'bike', 'walk'];

    const start = faker.number.int({min: 0, max: 3});
    const end = faker.number.int({min: start + 1, max: 4});

    return transport.slice(start, end);
  };

  const generateUser = () => {
    return {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 16, max: 100 }),
      avatarUrl: avatars[faker.number.int({min: 0, max: 2})],
      countries: Array.from({length: faker.number.int({min: 1, max: 4})},
        () => ({
          name: faker.location.country(),
          src: flags[faker.number.int({min: 0, max: 6})],
          alt: 'Флаг',
        })),
      tags: Array.from({length: faker.number.int({min: 1, max: 7})}, () => `#${faker.lorem.word()}`),
      transport: getRandomTransport(),
      level: faker.number.int({min: 1, max: 100}),
      likes: Array.from({length: faker.number.int({min: 0, max: 100})}, () => faker.number.int({min: 1, max: 100})),
      purpose: purpose[faker.number.int({min: 0, max: 2})],
      music: Array.from({length: faker.number.int({min: 1, max: 4})}, () => faker.music.genre().toLocaleLowerCase()),
    }
  };

  return Array.from({length: userCount}, () => generateUser());
};