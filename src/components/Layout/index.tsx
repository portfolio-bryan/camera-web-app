import { Children } from "../../types/children"

function Layout({ children }: Children) {
  return <div className="flex flex-col items-center mt-20">
    {children}
  </div>
}

export default Layout