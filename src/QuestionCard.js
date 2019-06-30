import React from 'react';
import {connect} from "react-redux";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import {setCurrentQuestion} from "./Redux/Question/action";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";


class QuestionCard extends React.Component {

    constructor(props) {
        super(props);

        this.setQuestion = this.setQuestion.bind(this);

    }


    setQuestion = function () {

        this.props.setCurrentQuestion(this.props.question)

    };

    render() {
        return (
            <div>

                <Card>

                    <Grid container justify={'center'}>

                        <Grid item xs={4}>
                            <p>{this.props.question.author + ' asks:'}</p>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                image={require('./avatar/avatar3.png')}
                                height='140'
                                title="Contemplative Reptile"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Would you rather...
                                </Typography>

                                <p>{this.props.question.optionOne.text}</p>


                            </CardContent>

                            <CardActions>
                                <Link to={'/questions/' + this.props.question.id}>
                                    <Button size="small" variant={'outlined'} onClick={this.setQuestion}>Open</Button>
                                </Link>
                            </CardActions>

                        </Grid>


                    </Grid>

                </Card>

                <br/>
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