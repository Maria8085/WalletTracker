export const cn = (...classNames: (string|undefined|boolean)[]):string => { 
    return(
        classNames.filter(value=>(!!value)).join(" ")
    )
}