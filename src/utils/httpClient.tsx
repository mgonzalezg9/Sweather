export const get = async (endpoint: string, filters: Record<string, any>) => {
  let url = endpoint;
  Object.keys(filters).forEach((key: string, index: number) => {
    if (index === 0) {
      url += `?${key}=${filters[key]}`;
    } else {
      url += `&${key}=${filters[key]}`;
    }
  });

  // console.log(`Requesting ${url}`)
  const response = await fetch(url);

  const json = await response.json();
  // console.log(json)

  return json
};
