import "./about.css";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/5496461/pexels-photo-5496461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <h2 className="a-sub">
          Who is Dhinagar?
        </h2>
        <p className="a-desc">
          Dhinagar is a pre-final year postgrad student who never thought that he'll become a Computer Science grad, but the intriguing tech got him into this.
        </p>
        <br></br>
        <p className="a-desc">
        Basically he can code, design and manage to make things work they way the need to be! 
        </p>
        <br></br>
        <p className="a-desc">
        While you're here, be sure to take a look on his projects and try to be in touch with him!
        </p>
      </div>
    </div>
  );
};

export default About;
