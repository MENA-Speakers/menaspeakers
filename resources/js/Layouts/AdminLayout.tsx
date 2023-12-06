
import {SideBar} from "@/Components/Admin/SideBar";
import TopMenu from "@/Components/Admin/TopMenu";

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
