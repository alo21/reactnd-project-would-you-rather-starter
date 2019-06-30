import React from 'react';
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {setCurrentQuestion} from "./Redux/Question/action";


class QuestionCard extends React.Component {

    constructor(props){
        super(props);

        this.setQuestion = this.setQuestion.bind(this);

    }


    setQuestion = function(){

        this.props.setCurrentQuestion(this.props.question)

    };

    render() {
        return (
            <div>


                <Card>
                    <CardContent>

                        <p>id: {this.props.question.id}</p>

                        <p>asked by: {this.props.question.author}</p>

                    </CardContent>

                    <CardActions>
                        <Link to={'/questions/' + this.props.question.id}>
                            <Button size="small" onClick={this.setQuestion}>Open</Button>
                        </Link>
                    </CardActions>

                </Card>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        setCurrentQuestion: question => dispatch(setCurrentQuestion(question))
    };


};

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};


const questionCard = connect(mapStateToProps, mapDispatchToProps)(QuestionCard);

export default questionCard;