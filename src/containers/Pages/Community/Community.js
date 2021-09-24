import { Link } from 'react-router-dom'
// import './Community.css'

const Community = () => {
    return (
        <div className='community-body'>
            <div className="container">
              <h1 className="text-center mt-3">Community</h1>
            </div>
            <div className="cards mt-2">
        
              <div className="card">
                <div className="card__image-holder">
                  <img className="card__image" src="https://source.unsplash.com/300x225/?backpacker" alt="backpacker" />
                </div>
                <div className="card-title">
                  <Link to='#' className="toggle-info btn">
                    <span className="left"></span>
                    <span className="right"></span>
                  </Link>
                  <h2>
                      Backpacker
                      <small>Lorem ipsum dolor sit.</small>
                  </h2>
                </div>
                <div className="card-flap flap1">
                  <div className="card-description">
                    This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                  </div>
                  <div className="card-flap flap2">
                    <div className="card-actions">
                      <Link to='#' className="btn">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="card">
                <div className="card__image-holder">
                  <img className="card__image" src="https://source.unsplash.com/300x225/?bicycle" alt="nature" />
                </div>
                <div className="card-title">
                  <Link to='#' className="toggle-info btn">
                    <span className="left"></span>
                    <span className="right"></span>
                  </Link>
                  <h2>
                      Sepedahan
                      <small>Lorem ipsum dolor sit amet.</small>
                  </h2>
                </div>
                <div className="card-flap flap1">
                  <div className="card-description">
                    This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                  </div>
                  <div className="card-flap flap2">
                    <div className="card-actions">
                      <Link to='#' className="btn">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="card">
                <div className="card__image-holder">
                  <img className="card__image" src="https://source.unsplash.com/300x225/?motorbike?tour" alt="motor" />
                </div>
                <div className="card-title">
                  <Link to='#' className="toggle-info btn">
                    <span className="left"></span>
                    <span className="right"></span>
                  </Link>
                  <h2>
                      Motoran
                      <small>Lorem ipsum dolor</small>
                  </h2>
                </div>
                <div className="card-flap flap1">
                  <div className="card-description">
                    This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                  </div>
                  <div className="card-flap flap2">
                    <div className="card-actions">
                      <Link to='#' className="btn">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            
              <div className="card">
                <div className="card__image-holder">
                  <img className="card__image" src="https://source.unsplash.com/300x225/?car?tour" alt="mobil" />
                </div>
                <div className="card-title">
                  <Link to='#' className="toggle-info btn">
                    <span className="left"></span>
                    <span className="right"></span>
                  </Link>
                  <h2>
                      Mobilan
                      <small>Lorem ipsum dolor sit.</small>
                  </h2>
                </div>
                <div className="card-flap flap1">
                  <div className="card-description">
                    This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                  </div>
                  <div className="card-flap flap2">
                    <div className="card-actions">
                      <Link to='#' className="btn">Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
        )
}

export default Community