import uuidv4 from "uuid/v4";

export const extraCategories = (categories) => {
  let res = categories.filter(c => c.is_parent);
  res = res.map(catP => {
    let children = categories
      .filter(c => !c.is_parent && c.parent_id === catP.id);
    return {
      ...catP,
      children,
    }
  })
  return res;
}

export const generateNameFromTime = () => {
  return Date.now().toString() + uuidv4();
}

export const generateName = (file) => {
  const oldName = file.name;
  return Date.now().toString() + "-" + oldName;
}

export const cleanRequestBody = (body) => {
  Object.keys(body).map(key => {
    if (body[key] === null || body[key] === undefined) {
      delete body[key];
    }
    return key;
  })
  return body;
}

export const buildCategoriesTree2Level = (cats) => {
  let newCat = cats.filter(c => c.level === 1);
  newCat = newCat.map(c => {
    const children = cats.filter(ch => ch.level === 2 && ch.parent_id === c.id);
    return {
      ...c,
      children
    }
  });
  return newCat;
}