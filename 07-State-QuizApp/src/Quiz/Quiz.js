import React from 'react';
import './Quiz.css'

export default class Quiz extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    questionText: 'What is the capital of France?',
                    answerOptions: [
                        { answerText: 'Paris', isCorrect: true },
                        { answerText: 'New York', isCorrect: false },
                        { answerText: 'London', isCorrect: false },
                        { answerText: 'Dublin', isCorrect: false },
                    ],
                },
                {
                    questionText: 'Who is CEO of Tesla?',
                    answerOptions: [
                        { answerText: 'Elon Musk', isCorrect: true },
                        { answerText: 'Jeff Bezos', isCorrect: false },
                        { answerText: 'Bill Gates', isCorrect: false },
                        { answerText: 'Tony Stark', isCorrect: false },
                    ],
                },
                {
                    questionText: 'The iPhone was created by which company?',
                    answerOptions: [
                        { answerText: 'Apple', isCorrect: true },
                        { answerText: 'Intel', isCorrect: false },
                        { answerText: 'Amazon', isCorrect: false },
                        { answerText: 'Microsoft', isCorrect: false },
                    ],
                },
                {
                    questionText: 'How many Harry Potter books are there?',
                    answerOptions: [
                        { answerText: '7', isCorrect: true },
                        { answerText: '1', isCorrect: false },
                        { answerText: '4', isCorrect: false },
                        { answerText: '6', isCorrect: false },
                    ],
                },
            ],
            currentQuestion: 0,
            score: 0
        }
    }
    

    btnHandler(event){
        this.setState((prev) => {
            return {currentQuestion : prev.currentQuestion + 1,}
        })
        
        console.log(event.nativeEvent.target.value);
        if(event.nativeEvent.target.value === "true"){
            this.setState((prev) => {
                return {score: prev.score + 1}
            })
        }
    }
    
    render() {
        if(this.state.currentQuestion <= 3){
            let QnKeys = this.state.questions[this.state.currentQuestion].answerOptions
            let QnAnswer = this.state.questions[this.state.currentQuestion].questionText 
            return (
          
                <div className='app'>
                  
                   
                  
                  
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>{QnAnswer}</span>{this.state.currentQuestion + 1}/4
                                </div>
                                <div className='question-text'>{QnAnswer}</div>
                            </div>
                            <div className='answer-section'>
                            {QnKeys.map((keyAns) => (
                                 <button onClick={(event) => this.btnHandler(event)} value={keyAns.isCorrect} >{keyAns.answerText}</button>
                                 ))}
    
                            </div>
                </div>
            )
        }else{
            return(
                <div className='score-section'>You scored {this.state.score} out of 4</div>  
            )
        }

    }
}
