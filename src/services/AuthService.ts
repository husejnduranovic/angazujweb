
import { IUserLogin } from "../pages/LoginPage";
import { IUserRegister } from "../pages/RegisterPage";
import HttpService from "../utils/HttpService";

const PATH = 'http://localhost:5000/api/auth/';

class AuthService {

    registerUser(user: IUserRegister){
        const url = PATH + 'register';
        return HttpService.axiosPost(url, user);
    }

    loginUser(userLogin: IUserLogin){
        const url = PATH + 'login';
        return HttpService.axiosPost(url, userLogin);
    }

    setToken(token: string){
        localStorage.setItem('token', token);
    }
};

export default new AuthService();