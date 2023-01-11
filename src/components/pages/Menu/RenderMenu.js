import React, { useEffect } from 'react'

function RenderMenu() {
    useEffect(()=>{
        document.title = "Menu" + " | CVP-MOVIE"
    })
    return (
        <div className="animation_scale-lg">
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
            menu<br/>
        </div>
    )
}

export default RenderMenu