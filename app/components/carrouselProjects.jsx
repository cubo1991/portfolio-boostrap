import React from 'react'

const carrouselProjects = () => {
  return (
    <div>

    <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <iframe width="500" height="220" className="d-block w-100" src="https://www.youtube.com/embed/5FqolQbA9dw?rel=0?version=3&mute=1&autoplay=1&loop=1&controls=0&playlist=5FqolQbA9dw" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          <div className="carousel-caption d-none d-md-block">
            <h5 >Changapp</h5>
            <p >Proyecto grupal de un e-commerce para el bootcamp Henry.</p>
          </div>
        </div>
        <div className="carousel-item">
        <iframe width="500" height="220"  className="d-block w1000" src="https://www.youtube.com/embed/UpU9lYdXyYM?rel=0?version=3&mute=1&autoplay=1&loop=1&controls=0&playlist=UpU9lYdXyYM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          <div className="carousel-caption d-none d-md-block">
            <h5 >Wheater App</h5>
            <p >App de clima que consume datos de una API realizada como trabajo practico del bootcamp Henry.</p>
          </div>
        </div>
        <div className="carousel-item">
        <iframe width="500" height="220" className="d-block w-100" src="https://www.youtube.com/embed/1_5Zig2uc1Q?rel=0?version=3&mute=1&autoplay=1&loop=1&controls=0&playlist=1_5Zig2uc1Q" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
          <div className="carousel-caption d-none d-md-block">
            <h5 >Dog App</h5>
            <p  >App que consume una API para el proyecto individual del bootcamp Henry.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
    
        </div>
  )
}

export default carrouselProjects