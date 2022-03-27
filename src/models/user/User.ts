import Model from '../../utils/Model';

export interface TUser {
    id: string;
    firstName: string;
    lastName: string;
    contactEmail: string;
    password: string;
    contactPhone: number;
}

const User = Model((model: TUser) => {
    const _user = Object.assign({}, model);
  
    return {
      get id() {
        return _user.id;
      },
      get firstName() {
        return _user.firstName;
      },
      get password() {
          return _user.password
      },
      get lastName() {
        return _user.lastName;
      },
      get contactPhone() {
        return _user.contactPhone;
      },
      get contactEmail() {
        return _user.contactEmail;
      }
    };
  });
  
  export default User;