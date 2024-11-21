import React, { useState } from 'react'
import Question from './question/Question';
import Header from '../../header/Header';

export default function Trivia() {
    const [chosenSet,setChosennSet]=useState()
    
    
    const sets = [ 
        {name:'animals',
        questionSet:[{question: 'Does elephant is frightened by mice?',answers: ['Yes','Sometimes', 'Only in the Zoo',  'No'], rightAnswer: 0, questionImg: './img/elefant.gif', answerImg: ''},
                    {question: 'Which animal has 2 legs?',answers: [ 'Spider','Kangaroo','Shark',  'Cat'], rightAnswer:1, questionImg: '', answerImg: ''},
                    {question: 'Who hunts at night?',answers: ['Lion', 'Elefant', 'Lioness',  'Mouse'], rightAnswer: 2,questionImg: '',answerImg: ''},
                    ],
        backgroundImg:'',
        child:''},
        
        {name:'food',
        questionSet:[{question: 'Where was ice cream invented?',answers: ['Jamaica','England', 'italy',  'USA'],rightAnswer: 1,questionImg: '',answerImg: ''},
                {question: 'What is the most expensive spice in the world when listed by weight?',    answers: [' Saffrone',' Paprika', ' Vanilla',  ' Clov'],    rightAnswer: 0,    questionImg: '',    answerImg: ''},
                {question: 'What is the one food that can never go bad?',answers: ['Honey','butter', 'flour',  'sugar'],rightAnswer: 0,questionImg: '',answerImg: ''}
                ],
        backgroundImg:'',
        child:''},

        {name:'capital citys',
        questionSet:[{question: 'What is the capital of Jamaica', answers: ['Kingston','Valletta', 'Port Moresby',  'Canberra'],  rightAnswer: 0, questionImg: '', answerImg: ''},
                    {question: 'What is the capital of Russia', answers: [ 'Freetown','Luxembourg', 'Riyadh','Moscow' ], rightAnswer:3,questionImg: '',  answerImg: '' },
                    {question: 'What is the capital of Costa Rica', answers: ['Thimphu','San José', 'Funafuti',  'Georgetown'],rightAnswer: 1,questionImg: '',answerImg: ''}
                ],
        backgroundImg:'',
        child:''},

        {name:'ערי בירה',
        questionSet:[{question: 'מה העיר בירה של  גמייקה', answers: ['קינגסטון','וולטה', 'פורט-מורסבי',  'קנברה'],  rightAnswer: 0, questionImg: '', answerImg: ''},
                    {question: 'מה העיר בירה של  רוסיה', answers: [ 'פרייטאון','לוקסנבורג', 'רייאדה','מוסקבה' ], rightAnswer:3,questionImg: '',  answerImg: '' },
                    {question: 'מה העיר בירה של  קוסטה-ריקה', answers: ['טימפו','סאן-חוזה', 'פונפוטי',  'גורגטאון'],rightAnswer: 1,questionImg: '',answerImg: ''}
                ],
        backgroundImg:'',
        child:''}
    ];


  return (
    <div>
        
        {!chosenSet&&<>
        
            <Header title={'choose topic / בחר נושא'}/>
   
      
        
        <div className='d-flex justify-content-center text-center offset-2 mt-5 col-8'>
        {sets.length>0?
        sets.map((el,index)=>{
            el.child=<Question  set={sets[index].questionSet} bgimg={sets[index].backgroundImg} name={sets[index].name} setChosennSet={setChosennSet}/>
            return <button key={index} type="button" className="btn m-3 btn-primary " name={el.name} onClick={(e)=>{setChosennSet(el)}} >{el.name} </button>
        }):
        <h3>🎲sorry, No questions at the moment, come back later⏰ </h3>}
        </div>  
        </>}

        {chosenSet&&chosenSet.child}
          



    </div>
  )
}
