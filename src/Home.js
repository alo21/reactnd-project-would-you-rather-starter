import React from 'react';
import {connect} from "react-redux";
import {_getQuestions} from "./_DATA";
import {addQuestion} from "./Redux/Question/action";
import QuestionCard from "./QuestionCard.js"
import UserSelection from './UserSelection'


class Home extends React.Component{


    componentDidMount() {

        let questionsId = [];

        _getQuestions().then(res => {

            questionsId = Object.values(res);

            questionsId.forEach(question=> {
                this.props.addQuestion(question);

            });


            console.log("Questions loaded successfully");
        }).catch(e => {
            console.log("Error while loading questions", e);
        });


    }

    render() {
        return(


            <div>
                {this.props.user.logged.id ?

                    this.props.questions.questions.map(el => {
                        return (<QuestionCard question={el}/>)
                    })

                    :

                <UserSelection/>

                }

            </div>
        )
    }

}

const mapDispatchToProps = dispatch =>{

    return {
        addQuestion: question => dispatch(addQuestion(question))
    };


};

const mapStateToProps = state => {
    return{
        questions: state.questions,
        user: state.user
    };
};


const home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default home;