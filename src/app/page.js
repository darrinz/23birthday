"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // Calculate number of tiles needed to cover viewport
    const tileSize = 100; // pixels
    const cols = Math.ceil(window.innerWidth / tileSize) + 1; // Add extra column
    const rows = Math.ceil(window.innerHeight / tileSize) + 1; // Add extra row
    const numTiles = cols * rows;

    const randomTiles = Array.from({ length: numTiles }, () =>
      Math.floor(Math.random() * 49)
    );
    setTiles(randomTiles);
  }, []);

  return (
    <>
      <div className="tiled-background">
        {tiles.map((tileNum, index) => (
          <div key={index} className="tile">
            <Image
              src={`/tiles/tile_${tileNum}.jpg`}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
      <div className="container">
        <p>You are cordially invited to...</p>
        <h1 className="title">THE UNCTION</h1>
        <h2 className = "bday">Darrin's 23rd birthday</h2>
        <h2 className="location">1115 Willard St.</h2>
        <h2>Saturday, October 19th @ 8PM</h2>
        <p className="subtitle">Bar push around 10:30 after probably</p>
        <ul className="features">
          <li>play music on the open decks</li>
          <li>drink the free alcohol</li>
          <li>see our cat</li>
          <li>help me with my 482 midterm</li>
          <li>tie Jon to a tree(?)</li>
        </ul>
        <p className="contact">For questions: please contact (seven one two) 490-8230. Thank you.</p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.234567890123!2d-83.74321!3d42.28012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cae3f01234567%3A0x1234567890abcdef!2s1115%20Willard%20St%2C%20Ann%20Arbor%2C%20MI!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
