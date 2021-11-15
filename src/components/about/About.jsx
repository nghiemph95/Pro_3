import "./about.css"
import Award from "../../img/award.png.png"

const About = () => {
    return (
        <div className = "a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    {/* Photographer image */}
                    <img 
                        src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                        alt="" 
                        className="a-img" 
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the
                    readable content.
                </p>
                <p className="a-desc">
                    My name is Pham Nguyen Thanh Nghiem. 
                    I major in Electrical Engineering at International University - Vietnam National University. 
                    I am strong at algorithms, Data Struture, Data Business Analysis, C-Programing, SQL and tackling problems. 
                    Besides, strong at English for communication with teammates and customers (IELTS 5.5).
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awards 2021</h4>
                            <p className="a-award-desc">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                                and fugit.
                            </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About