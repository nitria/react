import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
// import Lightbox from "./Lightbox";

const url = "https://nitria-hotels-api.herokuapp.com/hotels";

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [showImage, setShowImage] = useState(null);
  // const [showHideLightbox, setShowHideLightbox] = useState(false);

  const fetchHotels = async () => {
    const response = await fetch(url);
    const hotels = await response.json();
    setHotels(hotels);
    setLoading(false);
  };

  useEffect(() => {
    fetchHotels();
  }, []);
  if (loading) {
    return (
      <section className="section loading">
        <div className="title loading-title">
          <h2>hotels</h2>
        </div>
        <img
          className="loadingBorder"
          src="../images/loading-border.png"
          alt="loading-border"
        />
      </section>
    );
  }

  const { name, location, img, id, desc, thumbnails, stars } = hotels[value];

  // const closeLightbox = () => {
  //   setShowHideLightbox(false);
  // };
  const displayName = (index, img) => {
    setValue(index);
    setShowImage(img);
  };
  const showimage = (image) => {
    setShowImage(image);
    // setShowHideLightbox(true);
  };

  return (
    <HotelsContext.Provider
      value={{
        //closeLightbox//,
        showImage,
      }}
    >
      <section className="section">
        <div className="title">
          <h2>hotels</h2>
        </div>
        <div className="hotels-container">
          <div className="btn-container">
            {hotels.map((hotel, index) => {
              return (
                <button
                  key={hotel.id}
                  onClick={() => {
                    displayName(index, hotel.img);
                  }}
                  className={`hotel-btn ${index === value && "active-btn"}`}
                >
                  {hotel.name}
                </button>
              );
            })}
          </div>
          <article className="hotel" key={id}>
            <img src={showImage || img} alt={name} className="img" />
            <div className="thumbnails">
              <img
                src={thumbnails[0].thumb1}
                alt=""
                onClick={() => showimage(thumbnails[0].thumb1)}
              />
              <img
                src={thumbnails[1].thumb2}
                alt=""
                onClick={() => showimage(thumbnails[1].thumb2)}
              />
              <img
                src={thumbnails[2].thumb3}
                alt=""
                onClick={() => showimage(thumbnails[2].thumb3)}
              />
            </div>

            <h3>{name}</h3>
            <h4>{location}</h4>
            <span>
              {[...Array(stars)].map((star, index) => (
                <FaStar id={star} key={index} color="#ffcc00" />
              ))}
            </span>
            <p>{desc}</p>
          </article>
        </div>
        {/* {showHideLightbox && (
          <Lightbox showImage={showImage} setShowImage={setShowImage} />
        )} */}
      </section>
    </HotelsContext.Provider>
  );
}
export const HotelsContext = React.createContext();
export default App;
