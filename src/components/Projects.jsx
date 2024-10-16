import data from '../json_files/data.json';


// export const Projects = () => {
//   return (
//     <div>
//       <h1>Our Projects</h1>
//       {data.map((project) => (
//         <div className="flex flex-row justify-center" key={project.id}>
//           <h3>{project.title}</h3>
//           <img className="h-[300px] w-[250px] hover:opacity-5" src={project.image} alt={project.title}  />
//           <p className="h-[300px] w-[250px] hover:opacity-100 opacity-0">{project.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };


export const Projects = () => {
  return (
    <div id="projDiv" className="flex flex-col justify-center m-auto">
      <div>
      <h1 className="text-[70px] mt-[15px] text-center">
        Our Projects
      </h1>
      </div>
      <div className="flex gap=[50px]">
        {
          data.map((project)=>{
return(
            <div className="flex flex-col p-[50px] animate-float ">
              <h5 className="text-serif text-[30px]" >{project.title}</h5>
              <div className="relative group">
              <img  src={project.image} className="h-[300px] w-[200px]group-hover:opacity-0 transition-opacity"></img>
              <p className="flex flex-col items-center justify-center border-[2px] border-gray-500 text-center absolute inset-0 group-hover:opacity-100 opacity-0 bg-white transition-opacity text-mono text-[20px] "> {project.description} <br/><br/><a href={project.github} target="_blank" className="hover:bg-black hover:text-white">GitHub</a></p>
              </div>
            </div>)
          }
          )
        }

      </div>

    </div>
  );
};
