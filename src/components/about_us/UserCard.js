import { Component } from "react";
import Developer from "../../assets/images/Developer.webp";
import { userBio } from "../../utils/constants";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatar_url: Developer,
        name: "Prince Gupta",
        bio: userBio,
      },
    };
    console.log("Child Constructor Called");
  }

  async componentDidMount() {
    console.log("Child ComponentDidMount Called");
    const data = await fetch("https://api.github.com/users/princegupta1998");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentWillUnmount() {
    console.log("child componentWillUnmounte");
  }

  render() {
    console.log("Child render method Called");

    const { designation } = this.props;
    const { name, avatar_url, bio } = this.state.userInfo;
    return (
      <div className="developer-card">
        <img src={avatar_url} alt="Developer" loading="lazy"></img>
        <div className="developer-details">
          <a
            href="https://github.com/princegupta1998/princegupta1998"
            target="_blank"
          >
            <h2>{name}</h2>
          </a>
          <p>{bio}</p>
          <span>{designation}</span>
        </div>
      </div>
    );
  }
}

export default UserCard;
