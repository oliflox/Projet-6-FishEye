const BASE_URL = "../data/photographers.json"; 

export const getData = async () => {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return response.json();
};
