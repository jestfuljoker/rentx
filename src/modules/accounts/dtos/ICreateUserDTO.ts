export interface ICreateUserDTO {
  name: string;
  driverLicense: string;
  email: string;
  password: string;
  id?: string;
  avatar?: string;
}
