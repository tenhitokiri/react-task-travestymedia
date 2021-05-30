import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ tittle }) => {
    return (
        <header className='header'>
            <h1 >{ tittle }</h1>
            <Button />
        </header>
    )
}

Header.defaultProps = {
    tittle : 'React Tasks'
}

Header.propTypes = {
    tittle : PropTypes.string.isRequired
}

export default Header
