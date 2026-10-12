import "./Header.css"

const today = new Date().toLocaleDateString()
const time = new Date().toLocaleTimeString()

 function Header() {
    return (
        <>
            <header>
                <h2>This is Module 1</h2>
                <p>Today is {today}, time {time} we need finish homework</p>
            </header>
        </>
    )
}

export default Header
