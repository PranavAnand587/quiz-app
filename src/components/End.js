import React from "react"
import { Link } from "react-router-dom"
import GitHubButton from 'react-github-btn'

function End(props){
    return (
        <div className="container">
            <div className="row mt-5 py-2">
                <div className="col text-center lead">
                    You Scored : <strong>{props.playerScore}</strong>
                </div>
            </div>
            <div className="row py-2">
                <div className="col text-center">
                    <Link to="/"><button className="btn btn-dark">Retry</button></Link>
                </div>
            </div>
            <div className="row py-2">
                <div className="col text-center">
                    <GitHubButton 
                        href="https://github.com/PranavAnand587/quiz-app" 
                        data-color-scheme="no-preference: dark; light: dark; dark: dark;" 
                        aria-label="Star ntkme/github-buttons on GitHub">
                            Support Us on Github
                    </GitHubButton>
                </div>
            </div>
        </div>
    )
}

export default End