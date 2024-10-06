// import { useParams } from "react-router-dom"

import { useState } from "react";
// import { BulbLight } from "../../components/BulbLight";
import { ActivatedControlIconFactory } from "../../components/ActivatedControlIconFactory";
import { JoystickControl } from "../../components/JoystickControl";
import { ZoomControl } from "../../components/ZoomControl";

export function CameraDetail() {
  // TODO: Send this logic to a global state management
  const [isBulbLightActivated, setIsBulbLightActivated] = useState(false)

  const onClickHandlerForBulbLight = () => {
    setIsBulbLightActivated(!isBulbLightActivated)
  }

  const [isSpeakerActivated, setIsSpeakerActivated] = useState(false)

  const onClickHandlerForSpeaker = () => {
    setIsSpeakerActivated(!isSpeakerActivated)
  }

  return (
    <div className="w-full relative">
      <div className="w-full bg-black h-80 top-0">

      </div>
      <div><ActivatedControlIconFactory
        iconType="bulb-light"
        isActivated={isBulbLightActivated}
        onClick={onClickHandlerForBulbLight} /></div>
      <div><ActivatedControlIconFactory
        iconType="speaker"
        isActivated={isSpeakerActivated}
        onClick={onClickHandlerForSpeaker} /></div>
      <div><ZoomControl /></div>
      <div><JoystickControl /></div>
    </div>
  )
}

