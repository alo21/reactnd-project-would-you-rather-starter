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


class QuestionDetail extends React.Component {

    render() {
        return (

            <div>

                <Card>

                    <Grid container justify={'center'} spacing={2}>

                        <Grid item xs={4}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={require('../avatar/google.jpg')}
                                title="Contemplative Reptile"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Would you rather...
                                </Typography>
                                <RadioGroup aria-label="position" name="position" row>
                                    <FormControlLabel
                                        value="end"
                                        control={<Radio color="primary"/>}
                                        label={this.props.currentQuestion.optionOne.text}
                                        labelPlacement="end"
                                    />
                                    <FormControlLabel
                                        value="end"
                                        control={<Radio color="primary"/>}
                                        label={this.props.currentQuestion.optionTwo.text}
                                        labelPlacement="end"
                                    />
                                </RadioGroup>

                                <br/>
                                <br/>

                                <Button variant="outlined" color="primary">Submit</Button>

                            </CardContent>
                        </Grid>


                    </Grid>

                </Card>
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
        currentQuestion: state.questions.current,
        user: state.user
    };
};


const questionDetail = connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);

export default questionDetail;