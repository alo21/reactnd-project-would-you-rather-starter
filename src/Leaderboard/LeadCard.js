import React from 'react';
import {addUser} from "../Redux/User/action";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


class LeadCard extends React.Component {


    render() {
        return (
            <div>

                <Card>

                    <Grid container justify={'center'}>

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
                                    {this.props.user.name}
                                </Typography>


                                <p>{'Answered questions: ' + Object.keys(this.props.user.answers).length}</p>

                                <hr/>

                                <p>{'Created questions: ' + this.props.user.questions.length}</p>

                                <br/>
                                <br/>
                            </CardContent>
                        </Grid>
                        <Grid item xs={4}>
                            <CardContent>
                                <h4>Total score</h4>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {this.props.user.questions.length + Object.keys(this.props.user.answers).length}
                                </Typography>
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
        addUser: user => dispatch(addUser(user))
    };


};

const mapStateToProps = state => {
    return {};
};

const leadCard = connect(mapStateToProps, mapDispatchToProps)(LeadCard);


export default leadCard;