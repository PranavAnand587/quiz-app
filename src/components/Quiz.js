import React, { useEffect, useState } from "react"

function Quiz() {

    const [data, setData] = useState("none")
    const [questionNo, setQuestionNo] = useState(1)
    const [options, setOptions] = useState([])

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

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple")
            const _data = await res.json()
            console.table(_data.results)
            setData(_data.results[0])
            const options = _data.results[0].incorrect_answers
            options.push(_data.results[0].correct_answer)
            shuffle(options)
            setOptions(options)
        }
        fetchData()
    }, [questionNo])

    return (
        <div>
            <p>{questionNo}) {data.question}</p>
            <input type="radio" name="choice" id="val1" /><label for="val1">{options[0]}</label>
            <input type="radio" name="choice" id="val2" /><label for="val2">{options[1]}</label>
            <input type="radio" name="choice" id="val3" /><label for="val3">{options[2]}</label>
            <input type="radio" name="choice" id="val4" /><label for="val4">{options[3]}</label>
            <button onClick={() => setQuestionNo(questionNo + 1)}>Next</button>
        </div>
    )
}

export default Quiz