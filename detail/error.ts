interface Axios {
  get(): void;
}

class CustomError extends Error {
  response?: {
    data: any;
  };
}

declare const axios: Axios;
async () => {
  try {
    await axios.get();
  } catch (error: unknown) {
    // const CustomError = error as CustomError;
    // console.error((error as CustomError).response?.data);
    // error.response.data -> 1회성

    if (error instanceof CustomError) {
      console.error(error.response?.data);
      error.response?.data;
    }
  }
};
