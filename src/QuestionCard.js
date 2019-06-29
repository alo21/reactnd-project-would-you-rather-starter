import React from 'react';
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


class QuestionCard extends React.Component {

    render() {
        return (
            <div>


                <Card>
                    <CardContent>

                        <p>id: {this.props.question.id}</p>

                        <p>asked by: {this.props.question.author}</p>

                    </CardContent>

                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>

                {/*<p>{this.props.question.optionOne.text}</p>*/}
                {/*<p>votes: {this.props.question.optionOne.votes.length}</p>*/}

                {/*<p>{this.props.question.optionTwo.text}</p>*/}
                {/*<p>votes: {this.props.question.optionTwo.votes.length}</p>*/}
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