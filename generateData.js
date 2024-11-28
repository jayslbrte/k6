import { faker } from "https://esm.sh/@faker-js/faker@v9.2.0";

export const generateData = () => ({
  id: faker.number.int({ min: 100, max: 999 }),
  category: {
    id: faker.number.int({ min: 100, max: 999 }),
    name: faker.animal.type(),
  },
  name: faker.animal.type(),
  photoUrls: ["string"],
  tags: [
    {
      id: faker.number.int({ min: 100, max: 999 }),
      name: faker.location.city(),
    },
  ],
  status: "available",
});
