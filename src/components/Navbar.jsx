export const Navbar=()=>
{
    return(
        <div className="flex flex-row justify-center items-center mx-auto gap-20 h-[70px] max-w-[1000px] rounded-bl-[10px] rounded-br-[10px]  bg-[#491236] text-white text-[20px] font-serif">
           <a href="#aboutDiv" className="hover:bg-[#f6f3f5] hover:border-black hover:text-black px-2 py-1 rounded">
               About
          </a>
          {/* <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black px-2 py-1 rounded">
                Current Learning
          </a> */}
             <a href="#projDiv" className="hover:bg-[#f6f3f5] hover:border-black hover:text-black px-2 py-1 rounded">
                Projects
             </a>
             <a href="#contactDiv" className="hover:bg-[#f6f3f5] hover:border-black hover:text-black px-2 py-1 rounded">
                Our Team
             </a>
             <a href="#contactDiv" className="hover:bg-[#f6f3f5] hover:border-black hover:text-black px-2 py-1 rounded">
                Contact Us
             </a>
        </div>
    );
}