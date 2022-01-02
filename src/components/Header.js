import PropTypes from 'prop-types'

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
    message: 'Introduction to props in React. props are like tag attributes but in react they can be passed to different sections of the application. Proptypes are used to define the value type of each prop e.g String, number or boolean'
}
// Adding proptypes into react props. Helps in defining prop properties and other validation rules.
Header.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
}

export default Header
 