import React,{Component} from 'react'

import validationFunc from './../../utils/formValidator'
import Input from './formFields/Input'

class logInForm extends Component { 
    constructor(){
        super()

        this.state = {
            email:'',
            password:''
        }
    }

    submitLogIn(e){
        e.preventDefault();
        let payload = {
            email:this.state.email,
            password:this.state.password
        }
        this.logIn(payload);
    }

    logIn(payload){
        fetch('http://localhost:5000/auth/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(payload)
        }).then(res =>{
            return res.json()
        }).then(d=>{
            this.props.authFunc(d)
        })
    }

    render(){
        let validPassword = this.state.password !==''
        let validEmail = this.state.email!==''

        let validObj = validationFunc(
            this.state.email,
            this.state.email,
            's',
            this.state.password,
            this.state.password
        )

        return (
            <form onSubmit={this.submitLogIn.bind(this)}>
                <fieldset className='App'>
                <div style={{display:'inline-grid'}}>
                <h2>Login</h2>
                <Input
                    type='text'
                    data='email'
                    name='Email'
                    func={e => {
                    this.setState({ email: e.target.value })
                    }}
                    valid={validObj.validMail}
                />
                <Input
                    type='password'
                    data='password'
                    name='password'
                    func={e => {
                    this.setState({ password: e.target.value })
                    }}
                    valid={validObj.validPassword}
                />
                <input
                    style={({ "display": (validObj.validMail&&validObj.validPassword) === true ? '' : 'none' })}
                    type='submit'
                    value='Login'
                />
                </div>
                </fieldset>
            </form>
        )
    }
}

export default logInForm;