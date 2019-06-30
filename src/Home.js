import React from 'react';
import {connect} from "react-redux";
import {_getQuestions} from "./_DATA";
import {addQuestion} from "./Redux/Question/action";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import QuestionCard from './QuestionCard'
import UserSelection from './UserSelection'


class Home extends React.Component {


    constructor(props) {
        super(props);


        this.state = {

            section: 0,
            sortedQuestions: []
        };

        this.chooseSection = this.chooseSection.bind(this);
        this.sortQuestion = this.sortQuestion.bind(this);



    }

    componentDidMount() {

        this.loadQuestions();

    }

    loadQuestions = function () {

        if (this.props.questions.questions.length === 0) {

            let questionsId = [];

            _getQuestions().then(res => {

                questionsId = Object.values(res);

                questionsId.forEach(question => {
                    this.props.addQuestion(question);

                });

                this.sortQuestion();



                console.log("Questions loaded successfully");
            }).catch(e => {
                console.log("Error while loading questions", e);
            });
        }
    };


    sortQuestion = function(){

        let sortedQuestions = this.props.questions.questions.sort(function (a, b) {

            return(b.timestamp - a.timestamp)
        });

        this.setState({
            sortedQuestions: sortedQuestions
        });


    };

    chooseSection = function (event, newValue) {

        this.setState(() => ({
            section: newValue

        }));
    };


    render() {
        return (


            <div>
                {this.props.user.logged.id ?

                    <div>

                        <AppBar position="static">
                            <Tabs value={this.state.section} onChange={this.chooseSection}>
                                <Tab label="Unanswered question"/>
                                <Tab label="Answered question"/>
                            </Tabs>
                        </AppBar>

                        {this.state.section === 0 && this.state.sortedQuestions.map(el => {

                            if (!Object.keys(this.props.user.logged.answers).includes(el.id)) {
                                return (<QuestionCard question={el}/>)
                            }

                        })}

                        {this.state.section === 1 && this.state.sortedQuestions.map(el => {

                            if (Object.keys(this.props.user.logged.answers).includes(el.id)) {
                                return (<QuestionCard question={el}/>)
                            }

                        })}


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
        addQuestion: question => dispatch(addQuestion(question))
    };


};

const mapStateToProps = state => {
    return {
        questions: state.questions,
        user: state.user
    };
};


const home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default home;