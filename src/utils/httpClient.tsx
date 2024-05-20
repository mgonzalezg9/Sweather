const stringifyFilters = (filters: Record<string, any>) => {
  let result = "";

  Object.keys(filters).forEach((key: string, index: number) => {
    if (index === 0) {
      result += `?${key}=${filters[key]}`;
    } else {
      result += `&${key}=${filters[key]}`;
    }
  });

  return result;
};

export const get = async (endpoint: string, filters: Record<string, any>) => {
  let url = endpoint + stringifyFilters(filters);

  // console.log(`Requesting ${url}`)
  const response = await fetch(url);

  const json = await response.json();
  // console.log(json)

  return json;
};
