import { useNavigate } from "react-router-dom"
import { useState, useEffect, useRef, useCallback } from "react"
import "./Homepage.css"
import envelopeIcon from "../icons/envelope.svg"
import heartcenterIcon from "../icons/heartcenter.svg"
import topheartIcon from "../icons/topheart.svg"

const fullText = `From the moment you entered my life, you've been the most precious gift. Your love has filled my heart with joy and warmth, and I am endlessly grateful for every moment we share together. Our baby fighter—our little warrior, the living symbol of our unbreakable love—reminds me daily of the beautiful life we've created. You are my everything, and I cherish you more than words can express. Don't forget that you are more than anything to me, and I will always be here for you, through every twist and turn of our journey. ❤️.
With all my love,
[Akhieeeeeee..]`

const journeyTxt = `We started our journey 10+ years back with-----→understanding------→bonding-----→dreaming------→felt emotional------→laughing--------→caring----------→fighting-------------------→loving--------------→loving-------------------→ again and again and again and again-------------→ Never Ending...`

// Confetti effect function
const triggerConfetti = () => {
   const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff']
   const confettiCount = 50

   for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div')
      confetti.style.position = 'fixed'
      confetti.style.width = '10px'
      confetti.style.height = '10px'
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.left = Math.random() * window.innerWidth + 'px'
      confetti.style.top = '-10px'
      confetti.style.borderRadius = '50%'
      confetti.style.pointerEvents = 'none'
      confetti.style.zIndex = '999'
      document.body.appendChild(confetti)

      const duration = Math.random() * 3000 + 2000
      const startTime = Date.now()
      const xOffset = (Math.random() - 0.5) * 300

      const animate = () => {
         const elapsed = Date.now() - startTime
         const progress = elapsed / duration

         if (progress < 1) {
            confetti.style.top = (progress * window.innerHeight) + 'px'
            confetti.style.left = (parseInt(confetti.style.left) + xOffset * 0.1) + 'px'
            confetti.style.opacity = 1 - progress
            requestAnimationFrame(animate)
         } else {
            document.body.removeChild(confetti)
         }
      }
      animate()
   }
}

const Homepage = ()=>{
   const [click, setClick] = useState(false)
   const [journeyClick, setJourneyClick] = useState(false)
   const [displayedText, setDisplayedText] = useState("")
   const [displayedJourneyText, setDisplayedJourneyText] = useState("")
   const journeyIndexRef = useRef(0)
   const textIndexRef = useRef(0)

   useEffect(() => {
      if (!journeyClick) {
            setDisplayedJourneyText("")
            return
      }

      journeyIndexRef.current = 0
      const interval = setInterval(() => {
         if (journeyIndexRef.current < journeyTxt.length) {
            setDisplayedJourneyText(journeyTxt.substring(0, journeyIndexRef.current + 1))
            journeyIndexRef.current++
         } else {
            clearInterval(interval)
         }
      }, 30)

      return () => clearInterval(interval)
   }, [journeyClick])

   useEffect(() => {
      if (!click) return

      textIndexRef.current = 0
      const interval = setInterval(() => {
         if (textIndexRef.current < fullText.length) {
            setDisplayedText(fullText.substring(0, textIndexRef.current + 1))
            textIndexRef.current++
         } else {
            clearInterval(interval)
         }
      }, 30)

      return () => clearInterval(interval)
   }, [click])

    const handleClick = () => {
        setClick(true)
        triggerConfetti()
    }
    const handleJourney = () => {
    setJourneyClick(!journeyClick)
    }

    return(
        <div className="homepagemain">
            <h2>Our Journey</h2>
           
            <div className="context-body">
                
                {!click && <>
                {journeyClick && <p className="journey-text">{displayedJourneyText}</p> }
                    <button onClick={handleJourney} className="journeyBtn">Journey ❤️</button>
                    <div className="imgcontainer">
                        <img onClick={handleClick} className="envimg" src={envelopeIcon} alt="Envelope Icon" />
                    </div>

                    <div onClick={handleClick} className="text-cont">
                        <img src={heartcenterIcon} alt="Heart Icon" />
                        <p>Tap to reveal</p>
                    </div>
                </>}
                {click && <>
                    <div className="env-cont">
                            <h2 className="env-text">My Dearest Love,</h2>
                            <div className="topimgcont">
                                            <hr />
                                            <img src={topheartIcon} />
                                             <hr />
                                             </div>
                            <p className="env-body">{displayedText}</p>
                
                    </div>
                    
                </>}
                <div className="topimgcont bottom">
                        <hr />
                        <img src={heartcenterIcon} />
                        <hr />
                    </div>
                     
           </div>
        </div>
    )
}

export default Homepage;