import { RiPlayFill, RiPauseMiniLine } from "@remixicon/react";
import gsap from "gsap";
import { useEffect } from "react";


function Video() {

  useEffect(() => {
    const videoContainer = document.querySelector("#video-container")
    const video = document.querySelector("#video-container video")
    const videoCursor = document.querySelector("#video-cursor")

    const handleMouseMove = (dets) => {
      gsap.to(videoCursor, {
        x: dets.clientX - videoContainer.getBoundingClientRect().left - videoCursor.offsetWidth / 2,
        y: dets.clientY - videoContainer.getBoundingClientRect().top - videoCursor.offsetHeight / 2,
        duration: 0.6,
        ease: "power2.out"
      })
    }

    const handleMouseEnter = () => {
      gsap.to(".cursor", { opacity: 0 })
      videoContainer.addEventListener("mousemove", handleMouseMove)
    }

    const handleMouseLeave = () => {
      gsap.to(".cursor", { opacity: 1 })
      videoContainer.removeEventListener("mousemove", handleMouseMove)
      gsap.to(videoCursor, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      })
    }

    let flag = 0;
    const handleClick = () => {
      if (flag === 0) {
        video.play()
        gsap.to(video, { opacity: 1 })
        gsap.to(videoCursor, { scale: 0.5 })
        gsap.to(".playIcon", { opacity: 0 })
        gsap.to(".pauseIcon", { opacity: 1 })
        flag = 1
      } else {
        video.pause()
        gsap.to(video, { opacity: 0 })
        gsap.to(videoCursor, { scale: 1 })
        gsap.to(".playIcon", { opacity: 1 })
        gsap.to(".pauseIcon", { opacity: 0 })
        flag = 0
      }
    }

    videoContainer.addEventListener("mouseenter", handleMouseEnter)
    videoContainer.addEventListener("mouseleave", handleMouseLeave)
    videoContainer.addEventListener("click", handleClick)

    return () => {
      videoContainer.removeEventListener("mouseenter", handleMouseEnter)
      videoContainer.removeEventListener("mouseleave", handleMouseLeave)
      videoContainer.removeEventListener("mousemove", handleMouseMove)
      videoContainer.removeEventListener("click", handleClick)
    }
  }, [])


  return (
    <div className='page2 w-full py-[4vw] relative '>
      <div id="video-container"
        className={` w-full h-[58vh] bg-custom-image bg-cover bg-center
        sm:h-[74vh] sm:w-[73vw] sm:left-[26%] relative`}
      >
        <div>
          <div
            id="video-cursor"
            className="bg-[#ffa63d] absolute top-[-10%] left-[64%] w-[22vw] h-[22vw]
            sm:h-[6.4vw] sm:w-[6.4vw] rounded-full z-[9] pointer-events-none"
          >
            {/* Play Icon */}
            <RiPlayFill
              size={32}
              color="white"
              className={`playIcon absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
            />
            {/* Pause Icon */}
            <RiPauseMiniLine
              size={32}
              color="white"
              className={`pauseIcon absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-0`}
            />
          </div>
        </div>

        <video
          loop
          muted
          src="https://obys.agency/wp-content/uploads/2022/11/Obys-Showreel-2022.mp4"
          className="w-full h-full object-cover opacity-0"
        >
        </video>

      </div>
    </div>
  )
}

export default Video
