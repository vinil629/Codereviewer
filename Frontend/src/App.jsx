import { useState,useEffect } from 'react'

import './App.css'

import Editor from 'react-simple-code-editor'



import prismjs from  'prismjs'
import axios from 'axios'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx.min.js'
import Markdown from "react-markdown"

function App() {
  const [count, setCount] = useState(0)
  const [code,setCode]=useState(`function sum(){
    return 1+1;
  }`)

  const [review,setReview]=useState('')

  useEffect(()=>{
    prismjs.highlightAll()
  })

  async function Reviewcode(){

   const response= await axios.post('https://codereview-backend-ngwe.onrender.com',{code})

  //  console.log(response.data);set
    setReview(response.data)
     console.log(response.data)

  }



  return (
    <>
    <header>CODE REVIEWER</header>
    <main>
      <div className="left">
        <div className="code">
         <Editor
           value={code}
           onValueChange={setCode}
           highlight={code => prismjs.highlight(code, prismjs.languages.jsx, 'jsx')}
           padding={10}
           style={{
             fontFamily: '"Fira code", "Fira Mono", monospace',
             fontSize: 16,
            border:'1px solid #ddd',
             borderRadius:'5px',
             hight:'100%',
             width:'100%'
           }}
         />
        </div>
        <div className="review">
          <button onClick={Reviewcode}>Get Review</button>
        </div>
      </div>
      <div className="right">
        <Markdown style={{fontSize:16}}>{review.result}</Markdown>
        
       

      </div>
    </main>
  
     
    </>
  )
}



export default App
