import { getCookie, setCookie } from "./cookies";
import { setLocalStorage } from "./localStorage";
import { getLocalStorage } from "./localStorage";

export const setAuthentication = (token,user)=> {
    setCookie('token',token);
    setLocalStorage('user',user);
}

export const isAuthenticated = ()=>{
    if(getCookie('token')&& getLocalStorage('user')){
        return getLocalStorage('user');
    }else {
        return false;
    }
}