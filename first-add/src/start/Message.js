
import React from 'react';

const styles = {
    div: {
        color: 'black',
        fontSize: '19px',
        fontWeight: '600',
        color: 'rgb(0, 29, 91)',
        textAlign: 'center' 
       
    }
}

function Message(){
    return (
    <div style={styles.div}> Хорошего дня
    </div>
    )
}


export default Message