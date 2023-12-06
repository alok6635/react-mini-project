import React from 'react';

class ClsBased extends React.Component{
      constructor(){
        super()
        this.state={
            count:0,
        }
      }

      handleInc=()=>{
        if(this.state.count<5){
            this.setState({count:this.state.count+1})
        }
      }

      handleDec=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
      }

      handleReset=()=>{
        this.setState({count:0})
      }

      render(){
        return(
            <>
            <p>{this.state.count}</p>
            <button onClick={this.handleInc}>Add</button>
            <button onClick={this.handleDec}>Dec</button>
            <button onClick={this.handleReset}>Resetx</button>
            </>
        )
      }


}

export default ClsBased;