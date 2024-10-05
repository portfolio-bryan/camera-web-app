export interface DevicePlaceCardProps {
  deviceType: string
  deviceName: string
  connectedPeople: string
}

export function DevicePlaceCard(props: DevicePlaceCardProps) {
  return (
    <div>
      <div>{props.deviceType}</div>
      <div>{props.deviceName}</div>
      <div>{props.connectedPeople}</div>
    </div>
  )
}

