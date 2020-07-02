import logo0 from './hair_biyou_kirei_ojiisan.png'
import logo1 from './yaruki_moetsuki_businessman.png'
import logo2 from './pose_anshin_obasan.png'
import logo3 from './mizu_fuku_boy.png'
import logo4 from './smartphone_jidori_selfy_schoolgirl.png'
import logo5 from './gal.png'
import './App.css';
        
        var userList=JSON.parse(localStorage.getItem("users"));
        if(userList==null){
          userList=[
            {
              name: '太郎',
              image: logo0,
              give: 100,
              take: 0,
              id:0,
            },
            {
              name: '次郎',
              image: logo1,
              give: 100,
              take: 0,
              id:"1",
            },
            {
              name: '洋子',
              image: logo2,
              give: 100,
              take: 0,
              id:"2",
            },
            {
              name: '翔',
              image: logo3,
              give: 100,
              take: 0,
              id:"3",
            },
            {
              name: '三葉',
              image: logo4,
              give: 100,
              take: 0,
              id:"4",
            },
            {
              name: '美織',
              image: logo5,
              give: 100,
              take: 0,
              id:"5",
            }
          ];
        }
      
          localStorage.setItem("users",JSON.stringify(userList));
          var a=JSON.parse(localStorage.getItem("users"));
     



  export default a;