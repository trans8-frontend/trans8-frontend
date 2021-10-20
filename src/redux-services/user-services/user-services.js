import { message } from 'antd'
import axios from 'axios'
import { get_quote, login, signup } from '../../Api/api'


// user login
export const user_login=(values)=>{
    axios.post(login , values )
    .then(response=>{
        if(response.data.data){
            message.success(response.data.message)
            sessionStorage.setItem("userToken", response.data.data.token)
        }
        else{
            message.error(response.data.message)
        }
    })
    .catch(err=>{
        message.error(err.response.data.message)
    })
}

// user registration
export const user_registration=(values)=>{
    axios.post(signup , values)
    .then(response=>{
        if(response.data.data){
            message.success(response.data.message)
        }
        console.log(response)
    })
    .catch(err=>{
       message.error(err.response.data.message)
    })
}

// get qoute
export const create_quote=(values)=>{
    axios.post(get_quote , values)
    .then(response=>{
        console.log(response)
        message.success(response.data.message)
    })
    .catch(err=>{
        console.log(err.response)
        message.error(err.response.data.message)
    })
}
