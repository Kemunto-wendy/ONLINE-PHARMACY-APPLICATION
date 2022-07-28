import React, {useState, useContext, useEffect} from "react"
import {useCallback} from "react"
import "./drug.css"

const APIURL = "https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=advil"

const Drug = ({children}) =>{
    const [searchDrug, setSearchDrug] = useState("")
    const [drug, setDrugs] = useState([])
    const [loading, setLoading] = useState(true)
    const [resultDrug, setResultDrug] = useState("")

    const fetchDrug = useCallback(async() => {
        setLoading(true)
        try{
            const response = await fetch(APIURL)
            {searchDrug}
            const data = await response.json()
            console.log(data)
            const {drugs} = data
        }
            catch(error){
                console.log(error)
            setLoading(false)
    }
}, [searchDrug])

useEffect(() => {
    fetchDrug()

}, [searchDrug, fetchDrug])
    return(
        <AppContext.Provider value = {{
            loading, drug, setSearchDrug, resultDrug, setResultDrug
        }}>
        {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
export default Drug