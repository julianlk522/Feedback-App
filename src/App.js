import React from 'react'
import Header from './components/Header'
import Feedbackitem from './components/Feedbackitem';

// JSX Notes:

// function App() {
    
    // const title = 'Blog Post';
    // const body = 'This is my blog post';
    // const comments = [
    //     {id: 1, text: 'comment one'},
    //     {id: 2, text: 'comment two'},
    //     {id: 3, text: 'comment three'},
    // ]

    // Functions that return JSX elements must return only one element or one parent element with children

    // return <div className='container'>
    //     <h1>Hello from the app component</h1>
    //     <p>Hello</p>
    // </div>


    // the <> fragment tag can be used to replace a parent div if children elements are needed


    
    // return React.createElement(
    //     'div', 
    //     { className: 'container' }, React.createElement('h1', {}, 'My App')
    // );

    // The above code achieves the same DOM result but requires importing React module

    
    // Can also use conditionals in JSX to apply different outcomes based on a variable state

    // const loading = false;
    // if (loading) return <h1>Loading...</h1>
    
    
    // Outputting dynamically requires {code}
    
//     return (
//         <div className='container'>
//             <h1>{title}</h1>
//             <p>{body}</p>

//             <div className='comments'>
//                 <h3>Comments ({comments.length})</h3>
//                 <ul>
//                     {comments.map((comment, index) => (
//                         <li key={index}>{comment.text}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )

// }

// export default App;



function App() {
    return (
        <>
            <Header bgColor ='red' textColor ='blue'/>
            <div className='container'>
                <Feedbackitem />
            </div>
        </>
    )
}

export default App;