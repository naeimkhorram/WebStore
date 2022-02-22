import axios from 'axios'

const Basic_Url = 'http://fakestoreapi.com'
//Basic url is the main Url that i am using to get anything from it anytime i want like => products ,
// Cart , Users ...

const Api = async () => {    
    const response = await axios.get(`${Basic_Url}/products`)
    return response.data
    //async and await is used because we can tell the response to wait for axios to get data from Api
    //and then after the data is received we can send it to => return
}

export default Api