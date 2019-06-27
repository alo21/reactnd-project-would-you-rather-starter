import React from 'react';
import {connect} from "react-redux";


class QuestionCard extends React.Component {

    render() {
        return (
            <div>
                <p>id: {this.props.question.id}</p>

                <p>asked by: {this.props.question.author}</p>

                <p>{this.props.question.optionOne.text}</p>
                <p>votes: {this.props.question.optionOne.votes.length}</p>

                <p>{this.props.question.optionTwo.text}</p>
                <p>votes: {this.props.question.optionTwo.votes.length}</p>
                <hr></hr>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        // addQuestion: question => dispatch(addQuestion(question))
    };


};

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};


const questionCard = connect(mapStateToProps, mapDispatchToProps)(QuestionCard);

export default questionCard;