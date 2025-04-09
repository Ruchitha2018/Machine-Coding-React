const Arrows = ({currentImg, setCurrentImg}) => {

    const handleImg = (action) => {
        console.log(action)
        if(action === 'NEXT') {
            setCurrentImg((prev) => prev+1)
        } else {
            setCurrentImg((prev) => prev-1)
        }
    }
    return (
        <>
         <div>
                <button onClick={() => handleImg('PREV')}>Prev</button>
                <button onClick={() => handleImg('NEXT')}>Next</button>
              </div>
        </>
    )
}

export default Arrows;