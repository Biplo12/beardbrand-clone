export default interface IUserReducerInterface {
  status: {
    loading: boolean;
    success: boolean;
    error: boolean;
  };
  menu: boolean;
}
