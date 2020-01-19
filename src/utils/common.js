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