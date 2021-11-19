import { Component } from 'react';
import BubbleAlert from './BubbleAlert';

const styles = {
    cesta: {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        Cursor: 'pointer',
    },
    bubblealert: {

    }
}

class Cesta extends Component {
    render () {
        return (
            <div>
                <span style={styles.bubblealert}>
                    <BubbleAlert />
                </span>
                <button style={styles.cesta}>
                    Carro
                </button>
            </div>
        )
    }
}




export default Cesta