import React, { useState } from 'react'

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [region, setRegion] = useState('');
    return (
        <AppContext.Provider value={{ region, setRegion }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;