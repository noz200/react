import React from 'react';
import logo from './logo.svg';
import './App.css';
import a from './users'

const lists=[1,2,3]
  class List extends React.Component{
      constructor(props){
          super(props);
          this.state={
              name:'',
              image:'',
              content:this.props.come.content,
              give:'',
              take:'',
          }
      }
    render()
    {

      return (
      <div>
        {89}
      </div>
      );
    }
  }



export default List;