import { APIURL } from "./URL";
import { USERURL } from "./USERURL";
import axios from "axios";
function getCourse(){
  return axios.get(APIURL);
}
function addUser(data){
    return axios.post(USERURL, data)
}
function getUserDetails(){
    return axios.get(USERURL)
}

export {getCourse, addUser, getUserDetails}