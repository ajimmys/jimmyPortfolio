import bioPic from '../Images/biography_picture.jpeg'


export default function BiographyContainer() {
  return (
    <div className='biography'>
        <span>Hey I’m James (he/him) and I like coding and the occasional movie reference. I was born and raised in
            Omaha, Nebraska. In 2018 I received my Bachelors in Computer Science from the University of Nebraska Omaha,
            and went on to join the Air Force as a Communications Officer. I didn’t do much coding in the service, but
            I did hone my leadership skills and learned the value of teamwork. I lead teams ranging from 10 to 50
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
  );
}