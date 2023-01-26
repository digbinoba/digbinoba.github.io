import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import headerimg from "../assets/img/header-img.png";
import { useEffect, useState } from "react";
import TrackVisibility from "react-on-screen";
import "animate.css";
import newBG from "../assets/img/layered-steps-haikei.svg";
export const Banner = () => {
  const toRotate = ["Software Engineer", "UX/UI Designer", "AR Prototyper"];
  const [loopTimer, setLoopTimer] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopTimer % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopTimer(loopTimer + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="centerMe">
                    <span className="tagline ">Welcome to my portfolio</span>
                  </div>

                  <h1>{`Hi, I'm Delano Igbinoba `}</h1>
                  <h1>
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I'm a design-focused software engineer dedicated to creating
                    beautiful interfaces & memorable experiences.
                  </p>

                  <div className="centerMe">
                    <button className="centerMe">
                      <a href="https://www.linkedin.com/in/delano-igbinoba/">
                        Let's connect
                      </a>
                      <ArrowRightCircle size={25} />
                    </button>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Row>
        </Container>
    </section>
  );
};
