import React from 'react'

function Toast(props) {
    return (
        <div>
            <div style={{'backgroundColor':'#ff'}} className="alert my-3 shadow" role="alert">
                <p className="text-center p-0 m-0">{props.status === "success"?<i style={{'color':'#38b000'}} className="fa fa-check-circle mx-3" aria-hidden="true"></i>:<i style={{'color':'red'}} class="fad fa-exclamation-circle mx-3"></i>} {props.message}</p>
            </div>
        </div>
    )
}

export default Toast