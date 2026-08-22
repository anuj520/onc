import { useEffect, useRef, useState } from "react"
import { useAuth } from "../ContextAPI/ContextAPI"
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { VeriLoad } from "./veriLoad";

export const Verfication = () => {
  const { data: authData, AuthToken,userData } = useAuth();
  const navigate = useNavigate()
  const [inputs, setInputs] = useState(new Array(4).fill(""));
  const [inputArr, setInputArr] = useState(inputs)
  const refs = [useRef(),useRef(),useRef(),useRef()] 
  const[count1,setCount] = useState(1)


  const handleInput = (event,index) =>{
    console.log(event.target.value);
    const val = event.target.value;

    if(!Number(val))
    return;
  
    const copyArray = [...inputArr];
    copyArray[index] = val
    setInputArr(copyArray)

    if (index < inputArr.length-1) {
      refs[index + 1].current.focus()
    }
}

const handleKeyDown = (event,index) =>{
if (event.keyCode == 8) {
  const copyArray = [...inputArr]
  copyArray[index] = ""
  setInputArr(copyArray)
 if (index > 0) {
  refs[index - 1].current.focus()
 }
}

if (event.keyCode == 39) {
if (index < 3) {
  refs[index+1].current.focus()
}
}
if (event.keyCode == 37) {
if (index > 0) {
  refs[index - 1].current.focus()
}
}
}

const handlePaste = (e) =>{
 const data = e.clipboardData.getData("text")
 setInputArr(data.split(""))
 refs[inputArr.length-1].current.focus() 
}

  const handleverfication = async (e) => {
    e.preventDefault();
if (count1 <= 5) {
  setCount(count1 + 1)
}
      const response = await fetch(
        `https://orion2-0.onrender.com/admin/verficationAD/${authData._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthToken,
          },
          body: JSON.stringify({num : parseInt(inputArr.join('')),count1}) 
        }
      );


      const data = await response.json();
  if(response.ok){
    navigate("/Admin")
    toast.success(data.msg); // Log response for debugging
    userData()
    window.location.reload()
  }else{
    toast.error(data.msg); 
    if (count1 == 6) {
      navigate("/Home");
      window.location.reload()
    }
  }
  };
  
  useEffect(() => {
    if (authData.isAdmin === false) {
      navigate("/Home");
    }
    if (authData.verfication === true) {
      navigate("/admin");
    }
    setTimeout(() => refs[0].current?.focus(), 0);
  }, [authData.isAdmin]);

  if (authData.length == 0 || authData == []) {
    return <Loading/>
  }
  

  return (   
    <main>
   <section className="VerficationAd">
 <VeriLoad/>
      
        <form onSubmit={(e) => handleverfication(e)}> {/* Use onSubmit */}
        <h2><FaArrowLeft/> Back</h2>
          <h1>Enter 4 Digts Pin</h1>
     <ul>   
   {
    inputs?.map((curr,index)=>{
    return(
      <div key={index}>
          <input
      type="text"
      key={index}
      required
      maxLength={1}
      ref={refs[index]}
      value={inputArr[index]}
      onPaste={handlePaste}
      onKeyDown={(event)=>handleKeyDown(event,index)}
      onChange={(event) => handleInput(event,index)}
    />  
      </div>
    )
})
   }
    </ul> 
    <p
    style={{color: count1 == 6 ? "red" : "" }}
    >{7 - count1} chances have arrived!</p>
          <button type="submit">Continue <IoIosArrowForward/></button> {/* Correct spelling */} 
        </form>

      </section>
    </main>
  );
};