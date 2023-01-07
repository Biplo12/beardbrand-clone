export default interface IUserReducerInterface {
  status: {
    loading: boolean;
    success: boolean;
    error: boolean;
  };
  cart: {
    products: any[];
  };
  menu: boolean;
}
