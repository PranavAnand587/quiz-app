import React from "react"

function Loading() {
    return (
        <div className="container">
            <div className="row text-center">
                <div class="spinner-border text-dark">
                    <span className="sr-only">Loading</span>
                </div>
            </div>
        </div>
    )
}

export default Loading