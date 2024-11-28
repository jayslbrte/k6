import faker from "https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js";

export const generateData = () => ({
  id: faker.string.uuid(),
  category: {
    id: faker.string.uuid(),
    name: faker.animal.type(),
  },
  name: faker.animal.type(),
  photoUrls: ["string"],
  tags: [
    {
      id: faker.string.uuid(),
      name: faker.address.city(),
    },
  ],
  status: "available",
});
