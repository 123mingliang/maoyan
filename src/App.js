import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cinema from './foots/Cinema/Cinema'
import Movie from './foots/Movie/Movie'
import User from './foots/User/User'
import {Route,Link,Redirect} from 'react-router-dom'
import Login from './Login/Login'

function AuthLogin(Com){
	return class extends Com{
		if(sessionStorage.getItem('bai')){
			return super.render();
		}else{
			return <Redirect to='./login' />
		}
	}
}
function App() {
  return (
    <div className="App">
    <Link to='/Movie'>电影</Link>
    <Link to='/Cinema'>影院</Link>
    <Link to='/User'>我的</Link>
    
    <Route path='/Movie' component={Movie} />    
    <Route path='/Cinema' component={Cinema} />
    <Route path='/User' component={AuthLogin(User)} />
    <Route path='/login' component={AuthLogin(Login)} />
     
    </div>
  );
}

export default App;
