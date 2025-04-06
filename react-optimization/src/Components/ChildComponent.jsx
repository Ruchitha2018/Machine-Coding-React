import React from "react"

const ChildComponent = React.memo(({onClick}) => {
    console.log('Child')
    return (
        <>Child</>
    )
})

export default ChildComponent