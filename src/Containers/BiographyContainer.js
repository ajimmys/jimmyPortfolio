import bioPic from '../Images/biography_picture.jpeg'


export default function BiographyContainer() {
  return (
    <div className='biography'>
        <div className="flex-one">
            <span className="biography-text">Hey I’m James (he/him) and I like coding and the occasional movie reference. I was born and raised in
                Omaha, Nebraska. In 2018 I received my Bachelors in Computer Science from the University of Nebraska Omaha,
                and went on to join the Air Force as a Communications Officer. I didn’t do much coding in the service, but
                I did hone my leadership skills and learned the value of teamwork. I lead teams ranging from 5 to 75
                airmen which gave me strong variability in my leadership style. Since graduating, I have been been using
                web and Python development for self-paced personal projects. I currently don’t have a direction to work
                toward with my programming, but that’s something I’d like to change in the future. My ultimate goal is to
                continue improving myself and those around me while supporting my family. Take a look around and feel free
                to reach out via the “Contact Me” form or Linked-In. </span>
            <div className="hex-wrap">
                <div className="hexagon">
                    <img src={bioPic} alt="Biography Picture"/>
                </div>
            </div>
        </div>

        <div className="flex-two">
            <div className="section-title">
                <h1>Development</h1>
                <p>I am a full stack developer with a higher focus on responsive front end development.</p>
            </div>
            <span className="language">
                <p>JavaScript</p>
                <div className="background-bar">
                    <div className="progress-bar nine-five"> </div>
                </div>
            </span>
            <span className="language">
                <p>CSS</p>
                <div className="background-bar">
                    <div className="progress-bar nine"> </div>
                </div>
            </span>
            <span className="language">
                <p>React</p>
                <div className="background-bar">
                    <div className="progress-bar nine"> </div>
                </div>
            </span>
            <span className="language">
                <p>HTML</p>
                <div className="background-bar">
                    <div className="progress-bar eight-five"> </div>
                </div>
            </span>
            <span className="language">
                <p>Git</p>
                <div className="background-bar">
                    <div className="progress-bar seven-five"> </div>
                </div>
            </span>
            <span className="language">
                <p>Python</p>
                <div className="background-bar">
                    <div className="progress-bar eight-five"> </div>
                </div>
            </span>
        </div>
    </div>
  );
}