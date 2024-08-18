import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercse is clicked" + text)
        let newText = text.toUpperCase()
        setText(newText);
    }
    const handleLoClick = () =>{
        // console.log("Uppercse is clicked" + text)
        let newText = text.toLowerCase()
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handlecopy = ()=>{
      var text = document.getElementById("myBox")
      text.select();
      text.setSelectionRange(0, 9999)
      navigator.clipboard.writeText(text.value);
    }
    
    
    const [text, setText] = useState(' ');
  return (
    <>
    
    <div>
        <h1>{props.heading}</h1>
    
<div className="mb-3">
  <textarea className ="form-control" value={text} onChange={handleOnChange} id="myBox" rows="13"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
<button className='btn btn-primary mx-1' onClick={handlecopy}>Copy Text</button>

    </div>
    <div className="container my-3">
        <h1>your text summary</h1>
        <p>1313 words and {text.length} characters</p>
    </div>
    </>
  )
}

