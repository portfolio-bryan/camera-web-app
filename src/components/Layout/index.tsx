import { Children } from "../../types/children"

function Layout({ children }: Children) {
  return <div className="flex flex-col items-center">
    {children}
  </div>
}

export default Layout