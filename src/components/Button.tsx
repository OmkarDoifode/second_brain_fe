interface ButtonProps {
    type: 'primary' | 'secondary',
    startIcon?: React.ReactElement,
    title?: string,
    endIcon?: React.ReactElement,
}

let styles = {
    primary: "cursor-pointer bg-primary text-white p-2 rounded-md hover:bg-blue-600 transition-all duration-300 align-middle flex items-center gap-2",
    secondary: "cursor-pointer bg-secondary text-secInner p-2 rounded-md hover:bg-purple-200 transition-all duration-300 align-middle flex items-center gap-2"
}


export function Button({ type,startIcon, title, endIcon }: ButtonProps){
    return <div>
        <button className={`${styles[type]}`}>
            {startIcon}
            {title}
            {endIcon}   
        </button>
    </div>
}