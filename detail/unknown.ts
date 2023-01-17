try {
  //...
} catch (error) {
  // error.message -> unknown
  (error as Error).message;
}
