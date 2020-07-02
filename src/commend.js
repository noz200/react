import React from 'react';
import './App.css';
import a from './users';
import logo from './figure_hakusyu.png'



var today = new Date();
var now=(today.getFullYear() + "/" +  (Number(today.getMonth()) + 1) + "/"+ today.getDate()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds());
  class Commend extends React.Component{
    constructor(props){
        super(props);
        this.state={
          name: a[0].name,
          image: a[0].image,
          give: a[0].give,
          take: a[0].take,
          content:'',
          today:now,
          Sub:false,
          clap:-1,
        }
       }
       change(event){
        this.setState({name:JSON.parse(event.target.value).name});
        this.setState({image:JSON.parse(event.target.value).image});
        this.setState({give:JSON.parse(event.target.value).give});
        this.setState({take:JSON.parse(event.target.value).take});
      }
      conchan(event){
          this.setState({content:event.target.value});
      }
      Subm(li){
        var id=String(li.length)
        li.reverse().push({usname:this.props.us.name,come:this.state.name,content:this.state.content,take:0,day:this.state.today,id:id});
        localStorage.setItem("li",JSON.stringify(li));
      };
      clap(li,l){
        l.take=l.take+1
        li.reverse()
        localStorage.setItem("li",JSON.stringify(li));
        this.setState({clap:this.state.clap});
      }
      claps(li,l,A){
        if(l.usname==this.props.us.name || l.come==this.props.us.name ){
          return 
        }
        a.map((userItem) => {
          A=userItem.id+l.id
          
          if (userItem.name==this.props.us.name){
            if(localStorage.getItem(A)>14||this.props.us.give<=0){
              return
            }
              localStorage.setItem(A,Number(localStorage.getItem(A))+1)
              userItem.give=userItem.give-2;
              localStorage.setItem("users",JSON.stringify(a));
              this.props.non(userItem.give);
              l.take=l.take+1;
              li.reverse();
              localStorage.setItem("li",JSON.stringify(li));
            }
          if(userItem.name==l.usname){
              userItem.take=userItem.take+1;
              localStorage.setItem("users",JSON.stringify(a));
            }
          if(userItem.name==l.come){
              userItem.take=userItem.take+1;
              localStorage.setItem("users",JSON.stringify(a));
            }
       })
       this.setState({clap:this.state.clap});
      }
      claptime(l,clapname,A){
        A=clapname.id+l.id
        if(localStorage.getItem(A) == null){
          localStorage.setItem(A,0);
        }
        return localStorage.getItem(A)
      }
      go(l){
        this.setState({clap:l.id})

      }
      off(){
        this.setState({clap:-1})
      }
      claname(a,l,A){
        if(this.state.clap == l.id ){
          return(
            <div className='ichiran'>
              <p>拍手一覧</p>
              {a.map((clapname) => {
                A=clapname.id+l.id
                if(localStorage.getItem(A)!=null){
                return (
                <div>
                  <span>{clapname.name}:{this.claptime(l,clapname,A)}回</span>
                </div>  
              )}
           })}
           </div>)
        }
      }
      
    render(){
        var A;
        var sousin;
        if(JSON.parse(localStorage.getItem("li")) == null){
            var li=[];
        }else{
            var li=JSON.parse(localStorage.getItem("li"));
        }
        
        if(this.state.content.length<5){
            sousin="送信";
        }else{
            sousin=<input type='submit' value='送信' />;
        }
    

      
      
      return (
      <div>
        <div className='user'>
          <form onSubmit={()=>{this.Subm(li)}}>
          　  <h2>投稿</h2>
              <img src={this.state.image}/>
              <select onChange={(event)=>this.change(event)}>
                  {a.map((userItem) => {
                      return (
                      <option value={JSON.stringify(userItem)}>{userItem.name}</option>
                
                      )
                })}
              </select>
              <textarea rows="14" cols="50" value={this.state.content} onChange={(event)=>{this.conchan(event)}}/>
              {sousin}
          </form>
        </div>
        <div className='clear'></div>
        <div >
          {li.reverse().map((l) => {
              return (
            <div className='content'>
              <span className="list">{l.usname}から{l.come}へ  <img src={logo}  onClick={()=>this.claps(li,l,A)}　onMouseOver={()=>this.go(l)} onMouseOut={()=>this.off()} />:{l.take}　　　投稿日{l.day} <br/>{l.content}<br/>----------------</span>
              {this.claname(a,l,A)}
            </div>  
             )
           })}
        </div>
        <h1>　　</h1>
      </div>
      
      );
    }
  }



export default Commend;
