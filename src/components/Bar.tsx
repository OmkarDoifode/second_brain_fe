interface BarProps {
    logo: React.ReactElement;
    name: string;
}

export function Bar({ logo, name }: BarProps) {
    return (
        <div className="flex items-center gap-3 p-3 cursor-pointer hover:bg-red-400">
            <div>
                {logo}
            </div>

            <div>
                {name}
            </div>
        </div>
    );
}