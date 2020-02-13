import faker from "faker";
import slugify from "slugify";
// faker.setLocale("vi");

export const generateBook = () => {
  const id = faker.random.number(1000);
  const name = faker.random.words(15);
  const price = faker.random.number(1000000);
  const res = {
    id,
    short_name: name,
    name,
    url: slugify(name),
    images: [1, 2, 3].map(() => `https://i.picsum.photos/id/${id}/200/300.jpg`),
    root_price: price,
    sale_price: faker.random.number(price)
  };
  return res;
};

export const generateListBook = (number = 10) => {
  const res = [...Array(number).keys()].map(() => {
    const item = generateBook();
    return item;
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ results: res });
    }, 1000);
  });
};

export const gennerateListBanner = (number = 3) => {
  const res = [...Array(number).keys()].map(() => {
    const id = faker.random.number(1000);
    const name = faker.random.words(15);
    const item = {
      id,
      name,
      url: slugify(name),
      images: [1, 2, 3].map(
        () => `https://i.picsum.photos/id/${id}/1000/400.jpg`
      ),
      type: ["product", "news"][faker.random.number() % 2]
    };
    return item;
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ results: res });
    }, 1000);
  });
};
