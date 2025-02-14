import './styling.css'
import { useState, useEffect } from 'react'

function Homescreen() {
  const [pagetracker, setPagetracker] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const changepage = () => {
    if (pagetracker < 5) {
      setPagetracker(pagetracker + 1);
    } else {
      setPagetracker(0); // Reset after the last page
    }
  };

  useEffect(() => {
    if (pagetracker === 4) {
      setTimeout(() => setFadeOut(true), 2000); // Start fade out after 2 seconds
    } else {
      setFadeOut(false); // Reset when navigating back
    }
  }, [pagetracker]);

  return (
    <section id="home" className="home">
      {/* First Page */}
      {pagetracker === 0 && (
        <div className="home1">
          <h1>To my gem, my world </h1>
          <img src="./download (6).jpg" alt="flower" />
          <p>
            This is a little flower from me to you, <br /> a small piece of my heart wrapped in words.
          </p>
        </div>
      )}

      {/* Second Page */}
      {pagetracker === 1 && (
        <div className="home2">
            <img src="./one.jpg" alt="" />
          <h2>To my dear Val</h2>
          <p>
            Our first Valentine’s together—I cherish this moment and wish for many more to come. I know this one might not be the grandest, but I promise to make it special in my own way. How? I have no idea… just sit back, relax, and prepare to be mildly impressed 😂.
          </p>
        </div>
      )}

      {/* Third Page */}
      {pagetracker === 2 && (
        <div className="home2">
            <img src="./two.jpg" alt="" />
          <p>
            Thank you for enduring all my wahala—your patience deserves an award at this point. Thank you for being my safe place, my happiness, my reason to smile. Every time I see you or even just think about you, I turn into a blushing mess—you’ve officially broken my tough guy reputation.
          </p>
        </div>
      )}

        {pagetracker ===3 && (
            <div className="home2">
                <img src="./three.jpg" alt="" />
                  <p>
                     You’ve always been there for me, lifting me up when I’m down, making life feel lighter just by being in it. And right now, I’m so overwhelmed with emotions that I can barely type. So before I start typing in tongues—
                </p>
            </div>
        )}

        {pagetracker ===4 && (
            <div className="home2">
                <img src="./4.jpg" alt="" />
                  <p>
                     Or do I need to start practicing my heartbreak <br />playlist and dramatically <br /> staring out of windows? 😭😂
                        <br />
                    Choose wisely… no pressure tho. 😏❤️
                </p>

                <button onClick={changepage}>yes</button> <span>or</span> <button className={`no-btn ${fadeOut ? "fade-out" : ""}`}>No</button>
            </div>
        )}

        {pagetracker ===5 && (
            <div className="home2">
                <img src="./yes.gif" alt="" />
                  <p>
                     she saiddddddddd yesssss you are mine forever ahahahahahahahhahaha
                </p>

            </div>
        )}

      {pagetracker  < 4 && <button className="btn1" onClick={changepage}>Click me</button>}
    </section>
  );
}



export default Homescreen