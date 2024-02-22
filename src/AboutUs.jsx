import './AboutUs.css'
import sofaImg from './assets/sofa_img.jpeg'

const AboutUs = () => {
  return (
    <div className='whole-page'>

        <div className="vision">
            <p>VISION</p>
        </div>

        <div className="para-1">
            <p>Empowering spaces through innovative  design,precise BOQs, eco-conscious practices, and timely delivery (45 to 100 days based on sq feet), while offering a cutting-edge VR experience for clients to truly envision and engage with their bespoke projects.</p>
        </div>

        <div className="para-2">
            <p>Transforming spaces with speed and style, our mission at [Company Name] is to bring visionary interior designs to life, demonstrated through our 12,000 sq. feet in 100 days and 500 sq. feet in 45 days challenges, while ensuring every user can virtually see and feel the end result in our experience center.</p>
        </div>

        <div className="img-div">
            <img src={sofaImg} alt="" />
        </div>

        <div className="mission">
            <p>MISSION</p>
        </div>

    </div>
  )
}

export default AboutUs