import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,message}) => {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
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
    onClick: PropTypes.func,
}
// Adding Css iin Javascript react.
// const titleStyle = {
//     color: 'grey',
//     backgroundColor: 'black',
//     marginBottom: 0,
// }

// const messageStyle = {
//     color: 'green',
//     backgroundColor: 'cyan',
// }

export default Header
 