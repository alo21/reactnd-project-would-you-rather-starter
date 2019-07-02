import React from 'react';
import {connect} from "react-redux";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import {Button} from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import FormControl from '@material-ui/core/FormControl';
import {addAnswerToUser} from '../Redux/User/action'
import {_saveQuestionAnswer} from "../_DATA";
import {addAnswerToQuestion} from "../Redux/Question/action";
import UserSelection from "../UserSelection";


class QuestionDetail extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            totalAnswers: this.props.numVoteOptOne + this.props.numVoteOptTwo,
            currentAnswer: 'optionOne'
        };

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit = function () {

        const obj = {

            authedUser: this.props.user,
            qid: this.props.currentQuestion.id,
            answer: this.state.currentAnswer
        };

        // _saveQuestionAnswer(obj).then(res => {
        //     console.log('positive:', res)
        // }).catch(err => {
        //     console.log('negative:', err)
        // })

        this.props.addAnswerToUser(this.props.currentQuestion.id, this.state.currentAnswer);
        this.props.addAnswerToQuestion(this.props.currentQuestion.id, this.state.currentAnswer, this.props.user.id)

        this.setState({
            totalAnswers: this.state.totalAnswers + 1
        })

    };

    getAvatar = function (userId) {

        let user = this.props.users.filter(user => {
            return user.id === userId
        });

        return user[0].avatarURL;

    };

    render() {

        if (this.props.currentQuestion.id === undefined && this.props.user.id === undefined) {
            return (<UserSelection/>)

        }

        return (

            <div>

                {this.props.currentQuestion.id ?

                    <div>

                        {!Object.keys(this.props.answeredQuestions).includes(this.props.currentQuestion.id) ?

                            <Card>

                                <Grid container justify={'center'}>

                                    <Grid item xs={4}>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={this.getAvatar(this.props.currentQuestion.author)}
                                            title="Contemplative Reptile"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Would you rather...
                                            </Typography>
                                            <FormControl component="fieldset">
                                                <RadioGroup aria-label="position" name="position"
                                                            onChange={event => this.setState({currentAnswer: event.target.value})}
                                                            row>
                                                    <FormControlLabel
                                                        value="optionOne"
                                                        control={<Radio color="primary"/>}
                                                        label={this.props.currentQuestion.optionOne.text}
                                                        labelPlacement="end"
                                                    />
                                                    <FormControlLabel
                                                        value="optionTwo"
                                                        control={<Radio color="primary"/>}
                                                        label={this.props.currentQuestion.optionTwo.text}
                                                        labelPlacement="end"
                                                    />
                                                </RadioGroup>
                                            </FormControl>

                                            <br/>
                                            <br/>

                                            <Button variant="outlined" color="primary"
                                                    onClick={this.onSubmit}>Submit</Button>

                                        </CardContent>
                                    </Grid>


                                </Grid>

                            </Card>

                            :

                            <Card>

                                <Grid container justify={'center'}>

                                    <Grid item xs={2}>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="140"
                                            image={this.getAvatar(this.props.currentQuestion.author)}
                                            title="Contemplative Reptile"
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Results
                                            </Typography>

                                            <Badge color="secondary" variant="standard"
                                                   badgeContent={this.props.currentQuestion.optionOne.votes.length}
                                                   showZero={true}>

                                                <p>{'Would you rather' + this.props.currentQuestion.optionOne.text}</p>

                                            </Badge>

                                            <LinearProgress
                                                variant="determinate"
                                                color="secondary"
                                                value={this.props.currentQuestion.optionOne.votes.length / this.state.totalAnswers * 100}
                                            />
                                            {this.props.answeredQuestions[this.props.currentQuestion.id] === 'optionOne' ?
                                                <p>Your Vote</p> : ''}

                                            <br/>
                                            <br/>
                                            <br/>
                                            <br/>

                                            <Badge color="secondary" variant="standard"
                                                   badgeContent={this.props.currentQuestion.optionTwo.votes.length}
                                                   showZero={true}>

                                                <p>{'Would you rather' + this.props.currentQuestion.optionTwo.text}</p>

                                            </Badge>

                                            <LinearProgress
                                                variant="determinate"
                                                color="secondary"
                                                value={this.props.currentQuestion.optionTwo.votes.length / this.state.totalAnswers * 100}
                                            />
                                            {this.props.answeredQuestions[this.props.currentQuestion.id] === 'optionTwo' ?
                                                <p>Your Vote</p> : ''}
                                            <br/>
                                            <br/>
                                        </CardContent>
                                    </Grid>


                                </Grid>

                            </Card>
                        }
                    </div>

                    :

                    <div>
                        <p>This poll is not reachable directly from URL address</p>
                        <p>Please go to home page</p>
                    </div>

                }


            </div>

        )
    }

}


const mapDispatchToProps = dispatch => {

    return {
        addAnswerToUser: (questionId, answer) => dispatch(addAnswerToUser(questionId, answer)),
        addAnswerToQuestion: (questionId, answer, userId) => dispatch(addAnswerToQuestion(questionId, answer, userId))
    };


};

// currentQuestion.optionOne.votes.length

const mapStateToProps = state => {
    return {
        currentQuestion: state.questions.current,
        answeredQuestions: state.user.logged.answers,
        // numVoteOptOne: state.questions.current.optionOne.votes.length,
        // numVoteOptTwo: state.questions.current.optionTwo.votes.length,
        avatar: state.user.logged.avatarURL,
        user: state.user.logged,
        users: state.user.users

    };
};


const questionDetail = connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);

export default questionDetail;