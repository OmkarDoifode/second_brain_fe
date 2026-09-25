import { HomeIcon } from "../icons/homeIcon";
import { TwitterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { Bar } from "./Bar";

interface SideProps {
    logo: React.ReactElement;
}

export function Sidebar({ logo }: SideProps) {
    return (
        <div className="bg-grey-400  h-full fixed left-0 top-0 w-42">
            
            <div className="flex items-center gap-3 p-3">
                <div className="text-primary">
                    {logo}
                </div>

                <div className="text-xl text-black-800">
                    <h1>SecondBrain</h1>
                </div>
            </div>

            <div className="mt-4">
                <Bar logo={<HomeIcon/>} name="Home" />
                <Bar logo={<YoutubeIcon/>} name="Youtube" />
                <Bar logo={<TwitterIcon/>} name="Twitter" />
                <Bar logo={<span>🏷️</span>} name="Tags" />
            </div>

        </div>
    );
}