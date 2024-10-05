// Part3.jsx
import React, { useEffect, useState } from "react";
import "./App.css";

export default function Part3() {
  const [api, setApi] = useState({ product: [] });
  const [img, setImg] = useState("");

  useEffect(() => {
    if (img !== "") {
      let api = fetch(
        `https://pixabay.com/api/?key=46193723-c71dd6e4249e10a2024b30b19&q=${img}&image_type=photo&pretty=true`
      );
      api
        .then((x) => x.json())
        .then((x) => {
          console.log(x);
          setApi({ product: x.hits });
        });
    }
  }, [img]);

  const view = (e) => {
    setImg(e.target.value);
  };

  console.log(api);

  return (
    <>
    <div id="d1">
          <h1 id="heading">Stunning royalty-free images & royalty-free stock</h1>
          <p id="para">
            Over 5 million+ high quality stock images, videos, and music shared
            by our talented community.
          </p>
          
     
    <input
   
  type="text"
  onChange={view}
  placeholder="Search for images..."
  style={{
    height: "50px",
    width: "500px",
    marginLeft: "400px",
    backgroundSize: "cover", 
    paddingLeft: "20px", 
    color: "black", 
    borderRadius: "8px",
    marginLeft:"20px" 
  }}
/>
</div>
      <div className="image-grid">
        {api.product.map((x) => {
          return (
            <div className="image-card" key={x.id}>
              <img
                src={x.webformatURL}
                alt="web"
                className="image"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
