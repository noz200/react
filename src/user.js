import React from 'react';
import './App.css';
import a from './users';
import Commend from './commend';

  class User extends React.Component{
    constructor(props){
      super(props);
      this.state={
        name: a[0].name,
        image: a[0].image,
        give: a[0].give,
        take: a[0].take,
      }
     }
     change(event){
       this.setState({name:JSON.parse(event.target.value).name});
       this.setState({image:JSON.parse(event.target.value).image});
       this.setState({give:JSON.parse(event.target.value).give});
       this.setState({take:JSON.parse(event.target.value).take});
     }
     non(given){
       this.setState({give:given})
     }
    render()
    {
      
      
      return (
      <div>
        <div className='user'>
          <div className='haku'>
            <h2>プロフィール</h2>
            <img src={this.state.image}/>
            <select onChange={(event)=>this.change(event)}>
            {a.map((userItem) => {
                return (
                  <option value={JSON.stringify(userItem)}>{userItem.name}</option>
                  
              )
            })}
            </select> 
          </div>
          <div className='cler'></div>
          <div className='haku'>
            <p>拍手できる数:{this.state.give}</p>
            <p>拍手された数:{this.state.take}</p>
          </div>
          <div className='clear'></div>
        </div>
        <Commend us={this.state} non={(given) => { this.non(given)}}/>   
      </div>
      );
    }
  }



export default User;