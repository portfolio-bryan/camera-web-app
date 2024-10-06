import React, { useRef } from "react"
import { Transition, TransitionStatus } from 'react-transition-group';

const duration = 200;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

export interface ActivatedStyles {
  style: {
    opacity: number
    transition: string
  }
}

export interface ActivatedControlProps {
  isActivated: boolean
  onClick: () => void
}

export type ActivatedControlIcon = React.FC<ActivatedControlProps>

export function withActivatedControlIcon(
  ActivatedComponent: React.FC<ActivatedStyles>,
  DeactivatedComponent: React.FC<ActivatedStyles>,
) {
  return function ActivatedControlIcon({ isActivated, onClick }: ActivatedControlProps) {
    const nodeRef = useRef(null);

    return (
      <div
        onClick={onClick}
        className="relative flex justify-center items-center w-24 h-24 border-solid border-opacity-50 rounded-full cursor-pointer">
        <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-[#262626] via-[#818181]">
          <Transition nodeRef={nodeRef} in={isActivated} timeout={duration}>
            {(state: TransitionStatus) => (
              <ActivatedComponent
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }} />
            )}
          </Transition>
          <Transition nodeRef={nodeRef} in={!isActivated} timeout={duration}>
            {(state: TransitionStatus) => (
              <DeactivatedComponent
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state]
                }} />
            )}
          </Transition>
        </div>
      </div>
    )
  }
}
