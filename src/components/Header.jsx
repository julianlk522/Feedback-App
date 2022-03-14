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

// alternatively, using a variable the inline declaration only requires one set of braces:



function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: '#ff6a95',
        text: 'Feedback UI'
    }

    
    Header.propTypes = {
        text: PropTypes.string
    }


    return (
        <header style ={headerStyles}>
            <div className='container'>
                <h2>Feedback UI</h2>
            </div>
        </header>
    )

}


export default Header