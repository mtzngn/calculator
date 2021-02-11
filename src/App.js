import './App.css';
import React from "react"

class App extends React.Component {
  state = {
    calBar: "",
    buttons : ["9","8","7","+","6","5","4","-","3","2","1","*","0","C","=","/"]
  }
  buttonHnadler = (value) => {
    if (value === "C") {
      this.setState({calBar: ""})
    } 
    else if(value === "="){
      this.calculate()
    }
    else {
      this.setState({calBar : this.state.calBar + value})
    }
  }

  calculate = () =>{

    let calBarArr = this.state.calBar.split("")
    // console.log(calBarArr)
    let op =[];
    let opIndex = [0];
    calBarArr.forEach((cal,index)=>{
      if(cal === "+" || cal === "-" || cal === "*" || cal === "/") {
        op.push(cal)
        opIndex.push(index)
      }
    } )
    opIndex.push(calBarArr.length)
    // console.log(op)
    // console.log(opIndex)
    let cal = parseInt(calBarArr[0]);

    op.forEach((op,i)=>{
      let rightSide = parseInt(calBarArr.slice(opIndex[i + 1] + 1,opIndex[i + 2]).join(""));

      if (op === "+") {
        cal = cal + rightSide
      }
      else if (op === "-") {
        cal = cal - rightSide
      }
      else if (op === "*") {
        // console.log(calBarArr.slice(2,3).join(""))
        // console.log(cal)
        // console.log(rightSide)
        cal = cal * rightSide
      }
      else if (op === "/"){
       cal =  cal / rightSide
      }
      this.setState({calBar: cal})
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.calBar}</h1>
        <div className="btn-area">
        {this.state.buttons.map((item,index)=>{ return (
          <Buttons function={()=> this.buttonHnadler(`${item}`)} key={index} label={item}/>)
        })}
        </div>
      </div>
    )
  }
}

const Buttons = (props) =>{
  return(
    <button className="btn-calc" onClick={props.function}>{props.label}</button>
  )
}

export default App;
