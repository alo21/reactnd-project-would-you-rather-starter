import React from 'react';
import {connect} from "react-redux";
import {addQuestionIdToUser, addUser} from "../Redux/User/action";
import {addQuestion} from "../Redux/Question/action";
import {_saveQuestion} from "../_DATA";
import {withRouter} from 'react-router';
import UserSelection from "../UserSelection";
import {Button, TextField} from "@material-ui/core";


class Index extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstQuestion: '',
            secondQuestion: '',
            submitDisabled: true
        };

        this.setFirstQuestion = this.setFirstQuestion.bind(this);
        this.setSecondQuestion = this.setSecondQuestion.bind(this);
        this.submitQuestion = this.submitQuestion.bind(this);


    }


    setFirstQuestion = function (event) {

        let value = event.target.value;
        this.setState(() => ({
            firstQuestion: value

        }));

        if (value === '' || this.state.secondQuestion === '' ) {
            this.setState({
                submitDisabled: true
            })
        } else {

            this.setState({
                submitDisabled: false
            })
        }

    };

    setSecondQuestion = function (event) {

        let value = event.target.value;

        this.setState(() => ({
            secondQuestion: value

        }));

        if (value === '' || this.state.firstQuestion === '' ) {
            this.setState({
                submitDisabled: true
            })
        } else {

            this.setState({
                submitDisabled: false
            })        }


    };

    submitQuestion = function () {

        let newQuestion = new Object({

            author: this.props.user.id,
            optionOneText: this.state.firstQuestion,
            optionTwoText: this.state.secondQuestion
        });

        _saveQuestion(newQuestion).then(generatedQuestion => {
            this.props.addQuestion(
                generatedQuestion
            );

            this.props.addQuestionIdToUser(generatedQuestion.id);


            this.props.history.push('/');

        }).catch(err => {
            console.log('errore', err)
        });


    };

    render() {

        return (

            <div>

                {this.props.user.id ?

                    <div>

                        <h4>Create New Question</h4>
                        <hr></hr>

                        <p>Complete the question:</p>


                        <TextField
                            id="option1"
                            label="Would you rather..."
                            margin="normal"
                            onChange={this.setFirstQuestion}
                        />

                        <br></br>
                        <br></br>

                        <TextField
                            id="option2"
                            label="or"
                            margin="normal"
                            onChange={this.setSecondQuestion}
                        />

                        <br></br>
                        <br></br>

                        <Button
                            variant="outlined"
                            color="primary"
                            disabled={this.state.submitDisabled}
                            onClick={this.submitQuestion}
                        >

                            Submit
                        </Button>

                    </div>

                    :

                    <UserSelection/>

                }
            </div>

        )
    }
}

const mapDispatchToProps = dispatch => {

    return {
        addUser: user => dispatch(addUser(user)),
        addQuestion: question => dispatch(addQuestion(question)),
        addQuestionIdToUser: questionId => dispatch(addQuestionIdToUser(questionId))
    };


};

const mapStateToProps = state => {
    return {
        user: state.user.logged
    }
};

const newComp = connect(mapStateToProps, mapDispatchToProps)(Index);

export default withRouter(newComp);