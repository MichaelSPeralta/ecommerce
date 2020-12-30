import React from 'react'
import Input from '../input/input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e =>{
        e.preventDefault()

        this.state({email:'', password:''})
    }
    handleChange = e =>{
        const { value, name } = e.target

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sing in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='Email'
                    required/>
                    <Input 
                    name='password' 
                    type='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required/>

                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn