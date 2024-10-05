import { useParams } from "react-router-dom"

export function CameraDetail() {
  const params = useParams()
  console.log(params)

  return (
    <div className="w-full">
      <div className="w-full bg-black h-80">

      </div>
      <div>Light Button</div>
      <div>Audio button</div>
      <div>Zoom Button</div>
      <div>Joistick button</div>
    </div>
  )
}

