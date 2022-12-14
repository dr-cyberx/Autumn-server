interface IauthPaths {
  [key: string]: string;
}

const authPaths: IauthPaths = {
  login: "/login",
  signup: "/signup",
  forgot_password: "/forgot-password",
  is_valid_user: "/is-valid-user",
  verify_phone_number: "/verify_phone_number",
  verify_email: "/verify_email",
};

export default authPaths;
