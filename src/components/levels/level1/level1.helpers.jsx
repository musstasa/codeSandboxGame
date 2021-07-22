const checkBurger = (burger, classNames) => {
  const classes = burger.className.split(" ");
  const filtered = classNames.filter(className => {
    return classes.includes(className);
  });

  return filtered.length === classNames.length;
};

export const checkBurgers = (burgers, classNames) => {
  return (
    burgers.length === 3 &&
    checkBurger(burgers[0], classNames[0]) &&
    checkBurger(burgers[1], classNames[1]) &&
    checkBurger(burgers[2], classNames[2])
  );
};

const checkIngredients = (burger, ingredientClasses) => {
  const ingredients = burger.querySelectorAll("div");

  if (ingredients.length === ingredientClasses.length) {
    const filtered = ingredientClasses.filter(ingredientClass => {
      let includes = false;

      ingredients.forEach(ingredient => {
        const classes = ingredient.className.split(" ");
        includes = classes.includes(ingredientClass) ? true : includes;
      });

      return includes;
    });

    return filtered.length === ingredientClasses.length;
  }

  return false;
};

export const checkAllIngredients = (burgers, classNames) => {
  return (
    burgers.length === 3 &&
    checkIngredients(burgers[0], classNames[0]) &&
    checkIngredients(burgers[1], classNames[1]) &&
    checkIngredients(burgers[2], classNames[2])
  );
};
