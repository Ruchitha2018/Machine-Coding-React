const ProgressBar = ({progressValue}) => {
    return (
        <>
              <div className="progress-container">
              <div className="progress-bar" style={{width: `${progressValue}%`}}>
                      {progressValue}%
              </div>
          </div>
        </>
      
    )
}

export default ProgressBar