import React from "react";
import { withStyles } from '@material-ui/core/styles';
// import { green } from "@material-ui/core/colors";
import Radio from '@material-ui/core/Radio';
import './index.css';
import './Button.css';



function Git() {

    return (
        <div className="center">
            <div className="multi-button">
                <button>GitLab</button>
                <button>GitHub</button>
            </div>
        </div>
    );
}

export default Git;