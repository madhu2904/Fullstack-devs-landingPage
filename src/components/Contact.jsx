import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export const Contact=()=>
{
    return(
    <div id="contactDiv" className="bg-[#491236] h-[300px] w-screen flex justify-around">
     <div className="flex flex-col  text-white">
        <h className="text-serif text-white text-[30px]">Our Team</h>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="https://www.linkedin.com/in/hrishab59/" target="_blank" >Rishab H</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="www.linkedin.com/in/madhumitha-velusamy-80a209254" target="_blank">Jannt S</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="https://www.linkedin.com/in/monisha-v-b83917249/" target="_blank">Monisha V</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="https://www.linkedin.com/in/janani-m-815710275/" target="_blank">Janani M</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="www.linkedin.com/in/madhumitha-velusamy-80a209254" target="_blank">Madhumitha V</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="https://www.linkedin.com/in/nandhana-selvaraju-0887b027b/" target="_blank">Nandhana Selvaraju</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="https://www.linkedin.com/in/harini-venkatesan-1a782b278/" target="_blank">Harini V</a>
        <a className="hover:bg-[#f6f3f5] hover:border-black hover:text-black rounded-[3px]" href="https://www.linkedin.com/in/priyankagajendran/" target="_blank">Priyanka G</a>
       
     </div>
     <div>
        <div className="grid grid-cols-2 gap-5">
            <h className="col-span-2 text-white text-[30px] font-serif">Reach Us</h>
            <a href="https://www.linkedin.com/in/hrishab59/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-blue-700" /> 
      </a>
      <a href="https://www.linkedin.com/in/hrishab59/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-pink-600" /> 
      </a>
      <a href="https://www.linkedin.com/in/hrishab59/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-green-500" /> 
      </a>
      <a href="https://www.linkedin.com/in/hrishab59/">
        <FontAwesomeIcon icon={['fas', 'envelope']} className="h-6 w-6 text-black" /> 
      </a>

        </div>
     </div>
    </div>)
}