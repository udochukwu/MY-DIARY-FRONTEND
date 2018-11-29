export const HomeStore = {
  home: {
    loading: false,
    success: true,
    failure: false,
    text: 'nnaji_udochukwu@yahoo.com'
  },
  entries: {
    loading: false,
    success: false,
    failure: false,
    entries: [],
    entry: {},
    errors: {}
  },
  user: {
    isAuth: true,
    loading: false,
    success: true,
    failure: true,
    errors: {}
  }
};
