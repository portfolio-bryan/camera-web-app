// import { useParams } from "react-router-dom"

import { BulbLight } from "../../components/BulbLight";
import { JoystickControl } from "../../components/JoystickControl";
import { Speaker } from "../../components/Speaker";
import { ZoomControl } from "../../components/ZoomControl";

export function CameraDetail() {
  // const params = useParams()
  // console.log(params)

  return (
    <div className="w-full">
      <div className="w-full bg-black h-80">

      </div>
      <div><BulbLight /></div>
      <div><Speaker /></div>
      <div><ZoomControl /></div>
      <div><JoystickControl /></div>
    </div>
  )
}

