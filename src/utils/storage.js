import Vue from 'vue'

Vue.prototype.setLocal = function setlocal(key, value, isjson = true) {
    if (isjson) {
        window.localStorage.setItem(key, JSON.stringify(value));
    } else {
        window.localStorage.setItem(key, value);
    }
}
Vue.prototype.getLocal = function getlocal(key, isjson = true) {
    if (isjson) {
        return JSON.parse(window.localStorage.getItem(key));
    }
    return window.localStorage.getItem(key);
}
Vue.prototype.removeLocal = function removelocal(key) {
    window.localStorage.removeItem(key);
}
Vue.prototype.setSession = function setsession(key, value, isjson = true) {
    if (isjson) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    } else {
        window.sessionStorage.setItem(key, value);
    }
}
Vue.prototype.getSession = function getsession(key, isjson = true) {
    if (isjson) {
        return JSON.parse(window.sessionStorage.getItem(key));
    }
    return window.sessionStorage.getItem(key);
}
Vue.prototype.removeSession = function removesession(key) {
    window.sessionStorage.removeItem(key);
}