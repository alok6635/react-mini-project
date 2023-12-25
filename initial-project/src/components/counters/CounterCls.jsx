import React from 'react';

class CounterCls extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    handleAdd=()=>{
        if(this.state.count<5){
            this.setState({count:this.state.count+1})
        }
    }

    handelDel=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
    }
    handelReset=()=>{
        this.setState({count:0})
      }
    render() {
        return (
            <>
            <p>class based counter</p>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handelDel}>Del</button>
                <button onClick={this.handelReset}>Reset</button>
            </>
        )
    }

}

export default CounterCls;