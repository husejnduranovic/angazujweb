import axios from 'axios';

class HttpService {

    //GET
    axiosGet(url: any){
        return axios.get(url)
                    .catch((error:any) => console.log(error))
    }

    //POST
    axiosPost(url: any, object: any){
        return axios.post(url, object)
                    .catch((error) => console.log(error))
    }

    //DELETE
    axiosDelete(url: any, deleteId: any){
        return axios.delete(url, deleteId)
                    .catch((error) => console.log(error))
    }
}

export default new HttpService()