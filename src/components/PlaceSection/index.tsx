import { DevicePlaceCard, DevicePlaceCardProps } from "../DevicePlaceCard"

export interface PlaceSectionProps {
  title: string
  deviceCardProps: DevicePlaceCardProps
}

export function PlaceSection(props: PlaceSectionProps) {
  return (
    <div>
      <div>{props.title}</div>
      <DevicePlaceCard {...props.deviceCardProps} />
    </div>
  )
}

