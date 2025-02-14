import React, { useEffect, useRef } from "react";
import { useData } from "./hooks/useData.tsx";
import { useBLE } from "./hooks/useBLE.tsx";
import { StartPage } from "./component/startPage.tsx";
import { Player } from "./component/player.tsx";
import { Obstacle } from "./component/obstacle.tsx";
import { LifeBar } from "./component/lifeBar.tsx";
import { GameOverPage } from "./component/gameOverPage.tsx";
import { ScoreBar } from "./component/scoreBar.tsx";
import { Galaxy } from "./component/galaxy.tsx";
import './style/App.css'

function App() {
  const { start, gameover, life, setStart, setLife, setTick, setObstaclePos, setPlanePos, setGameOver, setPlaneState, setScore, setRegion} = useData();
  const { bleStatus } = useBLE();
  const colRef = useRef<HTMLDivElement | null>(null);

  const init = () => {
    setLife(3)
    setTick(0)
    setObstaclePos(0)
    setPlanePos(0)
    setGameOver(false)
    setPlaneState(0)
    setScore(0)
    setRegion([colRef.current!.offsetLeft, colRef.current!.offsetWidth])   // left, width
  }

  useEffect(() => {
    // console.log(life)
    if (start && bleStatus) {
      init()
      // console.log(colRef.current!.offsetLeft, colRef.current!.offsetWidth)
    }
  }, [start])

  useEffect(() => {
    if (life < 0) {
      setGameOver(true)
      setStart(false)
      setLife(3)
    }
  }, [life])

  return (
    <>
      {start? 
      <div className="BackgroundImage">
        <div className="BarContainer">
          <LifeBar />
          <ScoreBar />
        </div>
        <div className="GameWrapper">
          <div className="MeteorContainer">
            <Obstacle />
            <Galaxy/>
          </div>
          {/* <div className="BlankContainer"></div> */}
          <div className="PlayerContainer" ref={colRef}>
            <Player />
          </div>
        </div>
      </div> : gameover?
      <div className="BackgroundImageTransparent">
        <GameOverPage />
      </div> : 
      <div className="BackgroundImageTransparent">
        <StartPage />
      </div>
      }
    </>
  )
}

export default App
