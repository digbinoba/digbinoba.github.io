import axios from "axios";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  //Handle submit mail
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const response = await axios.post("http://localhost:5000/contact/sendemail", formDetails);
    console.log(response.data);
        setButtonText("Send");
    if(response.data.success === true){
      setStatus({ success: true, message: "Message sent successfully" });
    }else{
          setStatus({
      success: false,
      message: "Something went wrong, please try again later.",
    });
    }


  };
  return (
    <section className="contact" id="contact">
      <h2>Lets keep in touch</h2>
      <p>
        Whether you have a question, opportunities, or if you want to just say
        hi, I am always open.
      </p>
      <p>Feel free to contact me anytime!</p>
      <Container>
        <Row>
          <Col md={6}>
            <h3>Contact Info</h3>
            <p>
              <a href="https://www.linkedin.com/in/delano-igbinoba/">
                <b>LinkedIn:</b>
              </a>
              {" @delano-igbinoba"}
            </p>
            <p>
              <a href="mailto:delanoigbinoba@gmail.com">
                <b>Email Address:</b>
              </a>
              {" delanoigbinoba@gmail.com"}
            </p>
          </Col>
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeHolder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeHolder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeHolder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
