const Header = ({title,message}) => {
    return (
        <header>
            <h1>{title}</h1>
            <p>{message}</p>
        </header>
    )
}
// Destructuring props into object models
Header.defaultProps = {
    title: 'Task Tracker',
    message: 'Introduction to props in React. props are like tag attributes but in react they can be passed to different sections of the application'
}

export default Header
 