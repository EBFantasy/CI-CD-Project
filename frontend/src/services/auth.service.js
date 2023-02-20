import axios from "axios";
import { json } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/";


class AuthService {
  login(email, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({  email : email,
                              password : password, 
                          })
    };

    return fetch('http://localhost:8080/api/auth/signin', requestOptions)
     .then(response => response.json())
     .then(data => {
      console.log(data)
      localStorage.setItem("user", JSON.stringify(data))
      
     })
      
    //  axios
    //   .post(API_URL + "signin", {
    //     email,
    //     password
    //   })
    //   .then(response => {
    //     console.log(response)
    //     if (response.data.accessToken) {
    //       localStorage.setItem("user", JSON.stringify(response.data));
    //     }

    //     return response.data;
    //   });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(firstName, lastName, email, password) {
    return axios.post(API_URL + "signup", {
      firstName,
      lastName,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();