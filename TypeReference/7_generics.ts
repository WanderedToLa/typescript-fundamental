function genericType<T>(param: T): T {
  console.log(param);
  return param;
}

genericType<string>("hi");
genericType<number>(999);
genericType<boolean>(false);
