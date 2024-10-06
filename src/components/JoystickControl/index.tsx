export function JoystickControl() {
  return (
    <div className="relative flex justify-center items-center w-44 h-44 border-solid border-opacity-50 rounded-full bg-gradient-to-b from-[#bcbcbc] via-[#7f7f7f]">
      <div className="flex justify-center items-center w-36 h-36 rounded-full background__radial shadow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
          className="size-20 opacity-50">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </div>
    </div>
  )
}