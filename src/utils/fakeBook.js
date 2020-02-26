import faker from "faker";
import slugify from "slugify";
// faker.setLocale("vi");

export const generateBook = () => {
  const id = faker.random.number(1000);
  const name = faker.random.words(5);
  const price = faker.random.number(1000000);
  const res = {
    id,
    short_name: name,
    description: faker.lorem.paragraphs(20),
    short_description: faker.lorem.paragraphs(),
    status: ["Còn hàng", "Sắp bán", "Hết hàng", "Ngừng bán"][faker.random.number() % 2],
    name,
    url: slugify(name),
    images: [1, 2, 3].map(() => ({ url: `https://i.picsum.photos/id/${id}/200/300.jpg` })),
    root_price: price,
    sale_price: faker.random.number(price)
  };
  return res;
};

export const getDetailBook = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ results: generateBook() });
    }, 500);
  });
}

export const generateListBook = (number = 10) => {
  const res = [...Array(number).keys()].map(() => {
    const item = generateBook();
    return item;
  });
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ results: res });
    }, 500);
  });
};

export const gennerateListBanner = (number = 3) => {
  const res = [...Array(number).keys()].map(() => {
    const id = faker.random.number(1000);
    const name = faker.random.words(5);
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
    }, 500);
  });
};
