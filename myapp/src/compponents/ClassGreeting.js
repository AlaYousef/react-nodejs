import React from "react";

class ClassGreeting extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            introduction : "Helloo!",
            buttonText : "Exit",
            count : 0
        };
    }

    handleClick(){

    //   this.setState({
    //     introduction: "GoodBy",
    //        buttonText : "Enter",
    //  }, () => {
    //        console.log("new value here", this.state.introduction); // if you want to use the updated value, it will should be used here
    //       console.log("new value here", this.state.buttonText);
             
    //    });

    this.setState((prevState, prevProps) =>{
        return {
          introduction : prevState.introduction === "Hello" ? "Goodby" : "Hello",
          buttonText : prevState.buttonText == "Exit" ? "Enter" : "Exit"
        }
           
      });

    }

    increment(){
        this.setState((prevState, prevProps) => {
            return{
                count : prevState.count+1
            }
        });
    }
    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <h2>you clicked {this.state.count}</h2>
                <button onClick={() => this.increment()}>increment</button>
            </div>
        )
}
}
export default ClassGreeting;