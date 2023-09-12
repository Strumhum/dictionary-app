import React from "react";
import "./Photos.css";
import "./Dictionary.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="credit text-center">
          <small>
            Photos supplied courtesy of{" "}
            <a href="https://www.pexels.com/" target="_blank" rel="noreferrer">
              Pexels
            </a>
          </small>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
