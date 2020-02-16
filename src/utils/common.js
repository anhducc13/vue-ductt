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