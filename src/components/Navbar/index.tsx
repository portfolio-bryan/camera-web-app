export interface MenuProps {
  className: string | undefined
  isMobile?: boolean
}

const Menu = ({ className, isMobile }: MenuProps) => {
  const liClassName = isMobile ? "flex justify-center w-full py-4 hover:bg-[202020] hover:text-zinc-600" : ""

  return (
    <ul id="menu" className={className}>
      {isMobile ? <div className="px-4 py-8 relative ml-auto flex justify-end">
        <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
        <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
      </div> : null}
      <a className={liClassName} href={"/"}>Signin</a>
    </ul>
  )
}

export default function Navbar() {
  return (
    <nav className="flex w-screen justify-between py-4 px-5 h-8 lg:px-64 text-neutral-300">
      <div className="h-full w-auto">
        <img alt="mpb-logo" src={"/mbp-logo-dark.png"} width={60} height={200} />
      </div>
      <Menu className="hidden sm:flex items-center space-x-5" isMobile={false} />
      <div id="menuToggle" className="sm:hidden space-y-1 z-10">
        <input type="checkbox" className="
          peer block absolute w-10 h-8 -translate-x-1 cursor-pointer opacity-0 z-20
        "/>

        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <div className="w-6 h-1 bg-white"></div>
        <Menu isMobile={true} className="bg-[#252525] absolute space-y-3 -top-full w-full left-0 duration-300 peer-checked:top-0" />
      </div>
    </nav>
  );
}