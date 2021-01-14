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
    calBarArr.forEach((cal,index)=>{
      if (cal === "+") {
        this.setState({calBar: parseInt(calBarArr.slice(0,index).join("")) + parseInt(calBarArr.slice(index + 1,calBarArr.length).join(""))})
      }
      else if (cal === "-") {
        this.setState({calBar: parseInt(calBarArr.slice(0,index).join("")) - parseInt(calBarArr.slice(index + 1,calBarArr.length).join(""))})

      }
      else if (cal === "*") {
        this.setState({calBar: parseInt(calBarArr.slice(0,index).join("")) * parseInt(calBarArr.slice(index + 1,calBarArr.length).join(""))})

      }
      else if (cal === "/"){
        this.setState({calBar: parseInt(calBarArr.slice(0,index).join("")) / parseInt(calBarArr.slice(index + 1,calBarArr.length).join(""))})

      }

    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.calBar}</h1>
        <div className="btn-area">
        {this.state.buttons.map((key,index)=>{ return (
          <Buttons function={()=> this.buttonHnadler(`${key}`)} key={index} label={key}/>)
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
