import React, { useEffect, useState } from "react"

function Quiz() {

    const [data, setData] = useState("none")

    const [questionNo, setQuestionNo] = useState(1)
    const [options, setOptions] = useState([[],[],[],[],[],[],[],[],[],[]])
    const [correctOptions,setCorrectOptions] = useState([])

    const [optionLocked,setOptionLocked] = useState()   // For Final Locked option
    const [locked, setLocked] = useState(false) //  For current locked option
    const [points, setPoints] = useState(0)

    const correct = [0,0,0,0,0,0,0,0,0,0]
    const all_opt = [[],[],[],[],[],[],[],[],[],[]]

    // Shuffling the options
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    //Fetch the database of questions
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple")
            const _data = await res.json()
            console.table(_data.results)
            setData(_data.results)


            for (let i = 0; i < _data.results.length; i++) {
                const opt = _data.results[i].incorrect_answers
                opt.push(_data.results[i].correct_answer)
                correct[i] = _data.results[i].correct_answer
                shuffle(opt)
                all_opt[i]=opt
                setOptions(all_opt)
                setCorrectOptions(correct)
            }
        }
        fetchData()
    }, [])

    const handleChange = event => {
        const val = event.target.value
        setOptionLocked(val)
    }

    const next = e => {
        if(optionLocked === correctOptions[questionNo-1]){
            setPoints(points+10)
        }
        setQuestionNo(questionNo+1)
    }

    const submit = () => {
        console.log("Quiz Done! Scores Submitted");
        
    }

    return (
        <div>
            <h3>Points : {points}</h3>
            <p>{questionNo}) {data[questionNo-1].question}</p>
            <input 
                type="radio" 
                name="choice" 
                id="val1"
                value={options[questionNo-1][0]}
                checked={optionLocked === options[questionNo-1][0]}
                onChange={e => handleChange(e)} 
            />
            <label for="val1">{options[questionNo-1][0]}</label>
            <input 
                type="radio" 
                name="choice" 
                id="val2"
                value={options[questionNo-1][1]}
                checked={optionLocked === options[questionNo-1][1]}
                onChange={e => handleChange(e)} 
            />
            <label for="val2">{options[questionNo-1][1]}</label>
            <input 
                type="radio" 
                name="choice" 
                id="val3"
                value={options[questionNo-1][2]}
                checked={optionLocked === options[questionNo-1][2]}
                onChange={e => handleChange(e)} 
            />
            <label for="val3">{options[questionNo-1][2]}</label>
            <input 
                type="radio" 
                name="choice" 
                id="val4"
                value={options[questionNo-1][3]}
                checked={optionLocked === options[questionNo-1][3]}
                onChange={e => handleChange(e)} 
            />
            <label for="val4">{options[questionNo-1][3]}</label>

            {(questionNo === 10) ? <button onClick={submit}>Submit</button> : <button onClick={next}>Next</button>}
        </div>
    )
}

export default Quiz