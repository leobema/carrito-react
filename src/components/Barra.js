import { Component } from 'react';
import Logo from './Logo';
import Cesta from './Cesta';


const styles = {
    barra: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px '
    }
}

class Barra extends Component {
    render() {
        return (
            <nav style={styles.barra}>
            <Logo/>
            <Cesta/>
            </nav>
        )
    }
}

export default Barra