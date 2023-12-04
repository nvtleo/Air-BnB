import "./global-style.css"
type prop = { children: React.ReactNode }
export function GlobalStyle(props: prop) {
    console.log(props)
    return (
        <div>
            {props.children}
        </div>
    )
}