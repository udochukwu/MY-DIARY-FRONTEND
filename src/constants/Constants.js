// const BASE_URL = 'https://nelson-diary.herokuapp.com';
const BASE_URL = 'http://localhost:8000';
export const signupConstant = {
  SIGNUP_URL: `${BASE_URL}/api/v1/auth/signup`,
  LOGIN_URL: `${BASE_URL}/api/v1/auth/login`
};

export const entriesConstant = {
  ENTRIES_URL: `${BASE_URL}/api/v1/entries`,
};
