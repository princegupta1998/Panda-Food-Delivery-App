import React from "react";
import "./aboutus.css";
import AboutImg from "../../assets/images/About_us.webp";
import UserCard from "./UserCard.js";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
    };
    console.log("Parent Constructor Called");
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Hello i am from setinterval");
    }, 1000);
    console.log("Parent ComponentDidMount Called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Parent componentWillUnmounte");
  }

  render() {
    console.log("Parent Render Method called");
    const { title } = this.props;
    const { vote } = this.state;

    return (
      <div id="about-us" className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src={AboutImg} alt="About Us" loading="lazy"></img>
          </div>
          <div className="about-content">
            <span>About Us</span>
            <h2>{title}</h2>
            <p>
              I am a dedicated developer focused on creating a seamless online
              food delivery experience. My goal is to build an intuitive and
              efficient app that connects customers with their favorite
              restaurants quickly. With a focus on speed, reliability, and
              convenience, I’m working to ensure that every user has an easy and
              enjoyable experience when ordering food online. Join me on this
              journey as I innovate and enhance the way food delivery services
              operate.
            </p>
            <blockquote>
              Good food, faster delivery, endless satisfaction.
            </blockquote>
            <span>Good Work : </span>
            <button
              className="button about-vote"
              onClick={() => {
                this.setState({
                  vote: this.state.vote + 1,
                });
              }}
            >
              Vote : {vote}
            </button>
          </div>
        </div>
        <UserCard designation={"Front End Developer"} />
      </div>
    );
  }
}

export default AboutUs;
