

interface SideProps{
    logo: React.ReactElement,

}


export function Sidebar(SidebarProps: SideProps){
    return <div className="bg-red-300 h-full x-0 y-0 fixed w-42">
        <div className="flex justify-between p-2">
            <div>
                {SidebarProps.logo}
            </div>
            <div className="text-xl">
                <h1>SecondBrain</h1>
            </div>
        </div>
        <div>
            
        </div>
    </div>
}