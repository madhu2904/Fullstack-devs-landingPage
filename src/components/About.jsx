export const About=()=>{

return(
      
    <div id='aboutDiv' className='  flex flex-col sm:flex-row items-center justify-center min-h-screen gap-[150px]'>
        <div className='w-[550px]'>
          <h1 className='text-[70px] text-bold font-serif py-[20px]'>Fullstack Devs</h1>
          <p className='text-[20px] font-mono text-justify'>
          We are a collaborative group of individuals united by our passion for fullstack development, specifically focusing on the MERN stack with a strong emphasis on React. Our mission is to enhance our skills through hands-on project building and collective learning.
          
          </p>
          <p className='text-[20px] font-mono font-bold pt-[10px]'> As fellow beginners, we are excited to embark on this learning journey together. </p> 
        </div>
        <div >
          <img src='src/assets/logo.png' className='h-[350px] w-[350px] rounded-[200px] animate-float'></img>
        </div>
        
      
      </div>

);

}