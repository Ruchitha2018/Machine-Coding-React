const SliderContent = ({sliderImgs, currentImg}) => {
    return (
        <>
        {sliderImgs.map((img, index) => (
            <>
              <div className={`${currentImg === index ? 'active': 'inactive'}`}>
                <h1>{img.title}</h1>
                <p>{img.description}</p>
                <img src={img.img} width="100%" />
              </div>
            </>
          ))}
          </>
    )
}

export default SliderContent;