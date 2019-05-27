import React,{Component} from 'react'
class Login extends Component{
	Login=(e)=>{
		if(e.keyCode===13){
			sessionStorage.setItem('bai',e.target.value);
			this.props.history.push('/')
		}
	}
	render(){
		return <div>
		<div>
		<input type="text" onKeyUp={this.Login} placeholder="账户名/手机号/Email" />
		<hr />
		<input type="password" placeholder="请输入您的密码" />		
		</div>
		</div>
	}
}
export default Login