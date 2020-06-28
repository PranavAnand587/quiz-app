import React from "react"

function Loading() {
    return (
        <div className="container p-5 m-5">
            <div className="row p-5 m-5">
                <div className="col p-5 m-5 text-center">
                    <div class="spinner-border text-dark">
                        <span className="sr-only">Loading</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading