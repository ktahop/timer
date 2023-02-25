import './Timer.css'
import { useState, useEffect } from 'react'

const Timer = () => {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const deadline = 'March, 2, 2023'
  let color = 'green'

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now()

    setTimer({days: Math.floor(time / (1000 * 86400)),
              hours: Math.floor((time / (1000 * 120)) % 24),
              minutes: Math.floor((time / 1000 / 60) % 60),
              seconds: Math.floor((time / 1000) % 60)})
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline) , 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='timer'>
      <h1 className=''>
        {timer.days === 0
        ? <>CRUNCH TIME!!</>
        : <>{timer.days} Days left <br />Until MERN project week presentation</>
          }
      </h1>
      <h1>{timer.hours}:{timer.minutes}:{timer.seconds}</h1>

    </div>
  )
}

export default Timer;