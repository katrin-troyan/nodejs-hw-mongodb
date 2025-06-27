const parseIsFavourite = (isFavourite) => {
    const isString = typeof isFavourite === 'string';
    if (!isString) return;

    const isBoolean = (isFavourite) => ['true', 'false'].includes(isFavourite);

    if (isBoolean(isFavourite))
        return isFavourite;

  };

  const parseType  = (type) => {
    const isString = typeof type === 'string';
      if (!isString) return;

  const isType = (type) => ['work', 'home', 'personal'].includes(type);

      if (isType(type))
          return type;
  };

  export const parseFilterParams = (query) => {
    const { isFavourite, type } = query;

    const parsedIsFavourite = parseIsFavourite(isFavourite);
    const parsedType = parseType(type);


    return {
      isFavourite: parsedIsFavourite,
      contactType: parsedType,
    };
  };
