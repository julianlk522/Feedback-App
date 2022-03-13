// rfce code snippet


// import React from 'react'

// function Header() {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header





import React from 'react'
import PropTypes from 'prop-types'   //  impt snippet




// inline CSS styling must use the double curly braces
        
// all properties which normally use a - use camelCase instead


function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }


    Header.defaultProps = {
        text: 'Feedback UI',
        bgColor: 'rgba(0,0,0,0.4)',
        textColor: '#ff6a95'

    }
    
    Header.propTypes = {
        text: PropTypes.string
    }


    return (
        <header style ={headerStyles}>
            <div className='container'>
                <h2>Feeback UI</h2>
            </div>
        </header>
    )

}


// alternatively, using a variable the inline declaration only requires one set of braces:

/* const headerStyles = { backgroundColor: 'blue',
color: 'red'
}

<header style ={headerStyles}>
*/

export default Header