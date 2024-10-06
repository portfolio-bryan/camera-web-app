import { withActivatedControlIcon, ActivatedControlProps } from "../AcivatedControlIcon"
import { ActivatedBulbLight, DeactivatedBulbLight } from "../BulbLight"
import { ActivatedSpeaker, DeactivatedSpeaker } from "../Speaker"

export interface ActivatedControlIconFactoryProps extends ActivatedControlProps {
  iconType: string,
}

export function ActivatedControlIconFactory({ iconType, ...activatedProps }: ActivatedControlIconFactoryProps): React.ReactNode {
  if (iconType === 'bulb-light') {
    return withActivatedControlIcon(ActivatedBulbLight, DeactivatedBulbLight)(activatedProps)
  }

  if (iconType === 'speaker') {
    return withActivatedControlIcon(ActivatedSpeaker, DeactivatedSpeaker)(activatedProps)
  }

  return <></>
}