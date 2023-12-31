import React from "react";
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest",
            buttonText: "login",
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                buttonText: prevState.buttonText === "login" ? "logout" : "login",
                message: prevState.message === "Hello, guest" ? "Welecome back, user" : "Hello, guest",

            }
        });

    }
    render() {
        return (
            <div className={css.NavBar}>
                <h1>  My Gallery </h1>
                <span> {this.state.message} </span>
                <button onClick={() => this.handleClick()}> {this.state.buttonText} </button>
            </div>
        )

    }

}
export default NavBarSimple;