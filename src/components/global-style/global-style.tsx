import "./global-style.css"
type prop = { children: React.ReactNode }
export function GlobalStyle(props: prop) {
    return (
        <div>
            {props.children}
        </div>
    )
}