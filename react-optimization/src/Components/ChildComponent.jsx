import React from "react"

const ChildComponent = React.memo(({data}) => {
    console.log('Child')
    return (
        <>Child</>
    )
})

export default ChildComponent