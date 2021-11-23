import axios from "axios";
const baseUrl = 'https://localhost:44307/api'
export function GetWithAuth(url){

}
export function PostWithAuth(url, model){

}
export function PutWithAuth(url, model){

}
export function DeleteWithAuth(url){
    return axios.delete(baseUrl+url)
}
export function DoGet(url){
    return axios.get(url)
}
export function DoPost(url, model){
    axios.post(url , model)
    .then(res => {
        return res;
    })
    .catch(error => {
        return error;
    });

}