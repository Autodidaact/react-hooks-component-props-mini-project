import React from "react";

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes
}){
    const coffeeCup = "☕️";
    const bentoBox = "🍱";
    function time(){
        if (minutes < 30){
            const averageMinutesUnderThirty = Math.ceil(minutes/5);
            return "." + coffeeCup.repeat(averageMinutesUnderThirty) + `${minutes} min read `;
        }else{
            if(minutes > 30){
                const averageMinutesOverThirty = Math.ceil(minutes/10);
            return "." + bentoBox.repeat(averageMinutesOverThirty) + `${minutes} min read `;
            }
            
        }
    }
    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date}
                {time()}   
            </small>
            <p>{preview}</p>
        </article>
    )
 
}
export default Article;