// import { useParams } from "react-router-dom"
import { useState } from "react";
import { useAppSelector, useAppDispatch } from '../../model/hooks'
import { ActivatedControlIconFactory } from "../../components/ActivatedControlIconFactory";
import { JoystickControl } from "../../components/JoystickControl";
import { ZoomControl } from "../../components/ZoomControl";
import { toggle } from "../../viewModel/switchCameraLight"
import { } from "../../viewModel/switchCameraSpeaker"

export function CameraDetail() {
  const toggleSelector = useAppSelector((state) => state.isOn)

  const dispatch = useAppDispatch()

  const onClickHandlerForBulbLight = () => {
    dispatch(toggle())
  }

  const [isSpeakerActivated, setIsSpeakerActivated] = useState(false)

  const onClickHandlerForSpeaker = () => {
    setIsSpeakerActivated(!isSpeakerActivated)
  }

  return (
    <div className="w-full relative">
      <div className="w-full bg-black h-96 top-0"></div>
      <div id="control-pane" className="flex relative w-full h-96">
        <div className="absolute left-6 top-6"><ActivatedControlIconFactory
          iconType="bulb-light"
          isActivated={toggleSelector}
          onClick={onClickHandlerForBulbLight} /></div>
        <div className="absolute right-6 top-6"><ActivatedControlIconFactory
          iconType="speaker"
          isActivated={isSpeakerActivated}
          onClick={onClickHandlerForSpeaker} /></div>
        <div className="absolute right-10 top-40"><ZoomControl /></div>
        <div className="my-32 mx-auto"><JoystickControl /></div>
      </div>
    </div>
  )
}

