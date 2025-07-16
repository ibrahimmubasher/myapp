import React,{useState} from 'react'

export default function TextBlock(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
    const handleloClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  }
    const handleSpaceClick = ()=>{
    let newText = text.replace(/\s+/g,'');
    setText(newText)
  }
      const handleclearClick = ()=>{
    let newText = ''
    setText(newText)
  }
  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

   const [text, setText] = useState('');
 
   
   
  return (
    <>
    <div className='main-container' style={{color:props.mode === 'dark'?'white':'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
      <label id="exampleFormControlTextarea1" className="form-label"></label>
      <textarea className="form-control" style={{backgroundColor : props.mode === 'light'?'white':'grey' ,color : props.mode === 'light'?'grey':'white'  }} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
      Upper Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleloClick}>
      Lower Case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>
      Remove Space
      </button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>
              clear text
      </button>
      
      </div>
    </div>
    <div className="container mb-5" style={{color:props.mode === 'dark'?'white':'black' }}>
      <h1>your summary is :</h1>
      <p>{(text.split(" ").length)} words , {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>
        preview
      </h2>
      <p>
        {text}
      </p>
    </div>
    </>
  )
}
