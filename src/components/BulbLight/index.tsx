import { useRef, useState } from "react"
import { Transition, TransitionStatus } from 'react-transition-group';

const duration = 150;

const exitingStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionExitingStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

const enteringStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
}

const transitionEnteringStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 0 },
  exiting: { opacity: 1 },
  exited: { opacity: 1 },
  unmounted: { opacity: 1 },
};


export function BulbLight() {
  const [isActivated, setIsActivated] = useState(false)
  const nodeRef = useRef(null);

  const onClickHandler = () => {
    setIsActivated(!isActivated)
  }

  return (
    <div
      onClick={onClickHandler}
      className="relative flex justify-center items-center w-28 h-28 border-solid border-2 rounded-full cursor-pointer">
      <div className="flex justify-center items-center w-24 h-24 rounded-full bg-gradient-to-br from-[#262626] via-[#bebebe]">
        <Transition nodeRef={nodeRef} in={isActivated} timeout={300}>
          {(state: TransitionStatus) => (
            <>
              <svg style={{
                ...exitingStyle,
                ...transitionExitingStyles[state]
              }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="absolute size-20 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
              <svg
                style={{
                  ...enteringStyle,
                  ...transitionEnteringStyles[state]
                }}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className="absolute size-20 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </>
          )}
        </Transition>
      </div>
    </div>
  )
}