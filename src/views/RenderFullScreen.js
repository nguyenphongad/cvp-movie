import React, { createContext } from 'react'

import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const UseContextFromFullScreen = createContext();

function RenderFullScreen({ children }) {

    const handleFullSreen = useFullScreenHandle();

    const valueFromFullSc = {
        handleFullSreen
    }

    return (
        <UseContextFromFullScreen.Provider value={valueFromFullSc}>
            <FullScreen handle={handleFullSreen} >
                {children}
            </FullScreen>
        </UseContextFromFullScreen.Provider>
    )
}

export default RenderFullScreen;