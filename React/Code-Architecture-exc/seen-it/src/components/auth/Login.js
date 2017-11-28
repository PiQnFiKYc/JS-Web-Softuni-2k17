import React, {Component} from 'react'
import dataCollector from './../../utils/dataCollector'

let appKey = 'kid_HJdJcbPOW';
let appSecret = '5fe47b355efb48cb9f5b505f2a5993f6';

class Login extends Component {
    constructor(){
        super()
        
        

        this.dataCollector = (e)=>{
            this.setState(dataCollector(e))
        }

        this.Login = (e)=>{
            e.preventDefault()
            fetch(`https://baas.kinvey.com/user/${appKey}/login`,{
                method:'POST',
                headers:{
                    Authorization:'Basic'+ btoa('kid_HJdJcbPOW:5fe47b355efb48cb9f5b505f2a5993f6'),
                    'Content-Type':'application/json'
                    
                },
                body:JSON.stringify(this.state)
            }).then(res=>{
                return res.json()
            }).then(parsedJson =>{
                console.log(parsedJson);
            })
        }
    }

    render(){
        return (
            <form id="loginForm" onSubmit={(e)=>{this.Login(e)}}>
                {console.log(this.state)}
                <h2>Sign In</h2>
                <label>Username:</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="username" type="text"/>
                <label>Password:</label>
                <input onChange={(e)=>{this.dataCollector(e)}} name="password" type="password"/>
                <input id="btnLogin" value="Sign In" type="submit"/>
            </form>
        )
    }
}

export default Login