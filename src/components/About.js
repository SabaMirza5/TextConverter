import React, {useState} from 'react'


export default function About(props) {
    //  const [myStyle,setMyStyle]= useState
    //  ({
    //   color:'black',
    //    backgroundColor:'white'
      
    //  });
    let myStyle={
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'

    }


// for toggling a button
    //  const [btntext,setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle=()=>{
    // if (myStyle.color==='black'){
    //   setMyStyle({
        
    //        color: 'white',
    //        backgroundColor:'black',
    //        border: '1px solid white'
    //      })
    //      setBtnText ("Enable Light mode")
    //  }else{
    //     setMyStyle({
    //         color: 'black',
    //         backgroung:'white'
    //     })
    //     setBtnText ("Enable Dark Mode")
    //  }
    //  }
  return (
           <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='my-2'>About Us</h1>
           <div className="accordion" id="accordionExample">
           <div className="accordion-item">
           <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong> Analyse your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyse your text quickly and efficiently, be it word count, character count or much more.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free to Use</strong> 
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text.TextUtills reports the number of words and character. Thus it is suitable for writing text with words/ character limits.
            </div>
            </div>
        </div>
        <div className="accordion-item"style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser Compatible</strong>   
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word count software works in any Web Browser such as Chroome, Mozila, Internet Explores, Safari, Opera.It suits to count characters in facebook, Blogs, Books, Excal Documents, Pdf documents, Essays etc.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
         <button  onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
        </div>
  )
}
