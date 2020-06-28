import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import he from 'he';

import Loading from './Loading';

const Quiz = props => {
  const [data, setData] = useState('none');
  const [loading, setLoading] = useState(true);

  const [questionNo, setQuestionNo] = useState(1);
  const [options, setOptions] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  const [correctOptions, setCorrectOptions] = useState([]);

  const [optionLocked, setOptionLocked] = useState(); // For Final Locked option
  const [points, setPoints] = useState(0);

  // Shuffling the options
  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // Fetch the database of questions
  useEffect(() => {
    async function fetchData() {
      const url = "https://opentdb.com/api.php?amount=10"+props.category+"&difficulty=easy&type=multiple"
      const res = await fetch(url);
      const _data = await res.json();
      setData(_data.results);
      setLoading(false);

      for (let i = 0; i < _data.results.length; i++) {
        const opt = _data.results[i].incorrect_answers;
        opt.push(he.decode(_data.results[i].correct_answer));
        correct[i] = he.decode(_data.results[i].correct_answer);
        shuffle(opt);
        all_opt[i] = opt;
        setOptions(all_opt);
        setCorrectOptions(correct);
      }
    }
    const correct = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const all_opt = [[], [], [], [], [], [], [], [], [], []];
    fetchData();
  }, [props]);

  const handleChange = (event) => {
    const val = event.target.value;
    setOptionLocked(val);
  };

  const next = (e) => {
    if (optionLocked === correctOptions[questionNo - 1]) {
      setPoints(points + 10);
    }
    setQuestionNo(questionNo + 1);
  };

  const submit = () => {
    if (optionLocked === correctOptions[9]) {
      setPoints(points + 10);
	}
  props.submitScore(points);
};

  return loading === true 
  	? (<Loading />) 
	  : (<div className="card">
        <h3 className="card-header text-center">Points :{points}</h3>
        <div className="card-body">
          <p className="card-text text-center">{questionNo}) {he.decode(data[questionNo-1].question)}</p>
        <div id="input-group">
          <div className="input-group-prepend my-2">
            <div className="input-group-text w-100">
              <input
                type="radio"
                name="choice"
                id="val1"
                value={options[questionNo - 1][0]}
                checked={optionLocked === options[questionNo - 1][0]}
                onChange={(e) => handleChange(e)}
              />
              <span className="px-3">{options[questionNo-1][0]}</span>
            </div>
          </div>
          <div className="input-group-prepend my-2">
            <div className="input-group-text w-100">
                <input
                  type="radio"
                  name="choice"
                  id="val2"
                  value={options[questionNo - 1][1]}
                  checked={optionLocked === options[questionNo - 1][1]}
                  onChange={(e) => handleChange(e)}
                  />
                <span className="px-3">{options[questionNo-1][1]}</span>
            </div>
          </div>
          <div className="input-group-prepend my-2">
            <div className="input-group-text w-100">
              <input
                type="radio"
                name="choice"
                id="val3"
                value={options[questionNo - 1][2]}
                checked={optionLocked === options[questionNo - 1][2]}
                onChange={(e) => handleChange(e)}
                />
              <span className="px-3">{options[questionNo-1][2]}</span>
            </div>
          </div>
          <div className="input-group-prepend my-2">
            <div className="input-group-text w-100">
                <input
                  type="radio"
                  name="choice"
                  id="val4"
                  value={options[questionNo - 1][3]}
                  checked={optionLocked === options[questionNo - 1][3]}
                  onChange={(e) => handleChange(e)}
                  />
                <span className="px-3">{options[questionNo-1][3]}</span>
            </div>
          </div>
        </div>
    <div className="text-center">
      {(questionNo === 10) 
          ? <Link to="/finish"><button className="btn btn-dark" type="submit" onClick={() => submit()}>Submit</button></Link> 
          : <button className="btn btn-dark" onClick={next}>Next</button>}
          </div>
      </div>
    </div>
    )
}

export default Quiz;
