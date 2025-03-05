
import {SideBar} from "@/Components/Admin/SideBar";
import TopMenu from "@/Components/Admin/TopMenu";

/**
 * AdminLayout is a layout component that organizes the structure of an admin page,
 * providing a top menu, sidebar, and a main content area.
 *
 * @param {Object} props - The props object for the AdminLayout component.
 * @param {React.ReactNode} props.children - The child elements or components to be displayed within the main content area.
 * @return {JSX.Element} Returns the rendered layout component containing the top menu, sidebar, and content area.
 */
export default function AdminLayout({children} : {
    children: React.ReactNode
}) {
  return (
    <>
      <div className="h-screen">
        <TopMenu />
        <div className="">
          <div className="bg-background">
            <div className="grid lg:grid-cols-6">
              <SideBar className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-5 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  {
                    children
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
