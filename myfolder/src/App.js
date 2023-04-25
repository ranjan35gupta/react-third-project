import logo from './logo.svg';
import './App.css';
import {Fragment} from 'react';
import ButtonClick from './components/Button';



function App() {
  function aryan(){
    alert("aryan")
document.getElementById("image").innerHTML=`<img src="https://freelancersacademy.com/wp-content/uploads/2021/11/Untitled-3-01.png"/>`
document.getElementById("designation").innerHTML="<h6>UI/UX DESiGNER</h6>"
document.getElementById("userName").innerHTML="<h1>Aryan</h1>"
document.getElementById("information").innerHTML="<p>A UI Designer — or User Interface Designer — designs all the screens through which <br/>a user will move while using a website, app, or video game, while also creating the visual design elements that make this movement possible.</p>"
  }
 function rajuShrivastav(){
    alert("Raju Shrivastav")
    document.getElementById("image").innerHTML=`<img src=https://i.pinimg.com/474x/1f/c0/60/1fc060880055e618e7453804318a6702.jpg />`
    document.getElementById("designation").innerHTML="<h6>Computer Science Engineer</h6>"
    document.getElementById("userName").innerHTML="<h1>RajuShrivastav</h1>"
    document.getElementById("information").innerHTML="<p>Computer engineers create and test hardware such as motherboards, routers, circuits, and other equipment. While a programmer focuses on the software side of computer systems, computer engineers specialize in the physical components of a computer.</p>"
  }
  function nisha(){
    alert("Nisha ")
    document.getElementById("image").innerHTML=`<img src="https://p7.hiclipart.com/preview/74/366/503/nursing-college-licensed-practical-nurse-registered-nurse-job-doctor.jpg"/>`
    document.getElementById("designation").innerHTML="<h6>Staff Nurse</h6>"
    document.getElementById("userName").innerHTML="<h1>Nisha</h1>"
    document.getElementById("information").innerHTML="<p>Responsible for overall planning of nursing care of patients and for assignment of patients to nurses working in the ward. 2 Rendering direct nursing care to the ill patients & directly assisting the surgeons in major operations. 3. Ensuring that total health needs of patients are met.</p>"
  }
  
  return (
    <Fragment>
      <div className="container">
      <div className="container-2">
      <div id="image"><img src="https://freelancersacademy.com/wp-content/uploads/2021/11/Untitled-3-01.png" /></div>
      <div id="designation"><h6>UI/UX DESIGNER</h6></div>
      <div id="userName"><h1>Aryan Shirani</h1></div>
      <div id="information"><p>A UI Designer — or User Interface Designer — designs all the screens through which <br/>a user will move while using a website, app, or video game, while also creating the visual design elements that make this movement possible.</p></div>
       <br/>
      <p>see more buttons..</p>
       
       <ButtonClick onClickFunction={aryan}  classname="firstbtn" name="Aryan"  />
       <ButtonClick onClickFunction={rajuShrivastav} classname="secondbtn" name="Raju Shrivastav"/>
      <ButtonClick onClickFunction={nisha} classname="thirdbtn" name="Nisha"/>
      </div>
      </div>
    </Fragment>
    )
}

export default App;
