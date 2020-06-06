import React, {Component} from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class ToDosContainer extends Component {

    renderToDos = () => {
        return (
            this.props.todos.map((todo, id) => {
                return <Todo key={id} text={todo} />
            })
        )
    }

    render() {
        return(
            <div>
                {this.renderToDos()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        todos: state.todos
    })
}

export default connect(mapStateToProps)(ToDosContainer)