import React, { useEffect, useState } from 'react'
import Api from './Api'
function Planner() {
  const [workouts_num, setworkouts_num] = useState([1,1,1,1,1,1,1]);
  const [exerciseselect, setexerciseselect] = useState(["","","","","","",""]);
  const [exerciselist, setexerciselist] = useState([[],[],[],[],[],[],[]])
  const [dayon, setdayon] = useState(null);
  const [index, setindex] = useState(null);
  const handleAddWorkout = (index) => {
    const updatedWorkoutsNum = [...workouts_num];
    updatedWorkoutsNum[index]=workouts_num[index] + 1;
    setworkouts_num(updatedWorkoutsNum);
  };
  const handleDeleteWorkout = (day) => {
    if (workouts_num[day] > 1) {
      const updatedWorkoutsNum = [...workouts_num];
      updatedWorkoutsNum[day]=workouts_num[day] - 1;
      setworkouts_num(updatedWorkoutsNum);
    }
  }

  useEffect(() => {
    console.log(workouts_num);
  }, [workouts_num])
  let data=sessionStorage.getItem("set");
    let name="";
    if(data){
      for(let i=0;i<data.length;i++){
        if(data[i]=='@'){
          break;
        }
        name=name+data[i];
      }
    }
  return (
    <div className='mb-14 mt-2'>
      <div className='text-white border'>
        <div className="text-center w-full">
          <p className='text-[2.7vw] font-bold p-2 text-center bg-white text-black'>{`PLANNER FOR ${name.toUpperCase().replace(/[^a-zA-Z]+/g, "")}`}</p>
        </div>
        <div className="title border flex">
          <div className="day_t text-[1.5vw] font-semibold border-r w-1/6 text-center p-3">
            Day
          </div>
          <div className="day_t text-[1.5vw] font-semibold border-r w-1/6 text-center p-3">
            Muscle
          </div>
          <div className="day_t text-[1.5vw] font-semibold border-r w-4/6 text-center p-3">
            Workout
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3 cursor-pointer" onClick={()=>{setdayon("Sunday");setindex(0)}}>
            Sunday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white text-[1.2vw] bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[0]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[0]}`}>
            {new Array(workouts_num.slice(0,1)[0]).fill(0).map((num, index)=> (
                <select key={index} onChange={(e)=>{
                  exerciselist[0].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[0]>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[0]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8 cursor-pointer' onClick={()=>handleAddWorkout(0)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8 cursor-pointer' onClick={()=>handleDeleteWorkout(0)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3" onClick={()=>{setdayon("Monday");setindex(1)}}>
            Monday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[1]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[1]}`}>
            {new Array(workouts_num.slice(1,2)[0]).fill(0).map((num, index)=> (
                <select key={index} onChange={(e)=>{
                  exerciselist[1].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[1]>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[1]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout(1)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout(1)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3" onClick={()=>{setdayon("Tuesday");setindex(2)}}>
            Tuesday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[2]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[2]}`}>
            {new Array(workouts_num.slice(2,3)[0]).fill(0).map((num, index) => (
                <select key={index} onChange={(e)=>{
                  exerciselist[2].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[2]>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[2]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout(2)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout(2)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3" onClick={()=>{setdayon("Wednesday");setindex(3)}}>
            Wednesday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[3]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[3]}`}>
            {new Array(workouts_num.slice(3,4)[0]).fill(0).map((num, index) => (
                <select key={index} onChange={(e)=>{
                  exerciselist[3].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[3]>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[3]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout(3)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout(3)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3" onClick={()=>{setdayon("Thursday");setindex(4)}}>
            Thursday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[4]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[4]}`}>
            {new Array(workouts_num.slice(4,5)[0]).fill(0).map((num, index) => (
                <select key={index} onChange={(e)=>{
                  exerciselist[4].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[4]>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[4]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout(4)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout(4)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3" onClick={()=>{setdayon("Friday");setindex(5)}}>
            Friday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[5]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[5]}`}>
            {new Array(workouts_num.slice(5,6)[0]).fill(0).map((num, index) => (
                <select key={index} onChange={(e)=>{
                  exerciselist[5].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[5]>2>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[5]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout(5)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout(5)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3" onClick={()=>{setdayon("Saturday");setindex(6)}}>
            Saturday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>{
              const updatedexer=[...exerciseselect];
              updatedexer[6]=e.target.value;
              setexerciseselect(updatedexer);
            }}>
              <option selected> Select Muscle </option>
              {Api.filter((muscle, index, self) => (
                self.findIndex((m) => m.muscle === muscle.muscle) === index
              )).map((muscle) => (
                <option key={muscle.muscle} value={muscle.muscle}>
                  {muscle.muscle}
                </option>
              ))}
            </select>
          </div>
          <div className={`w-4/6 p-2 flex relative`}>
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[6]}`}>
            {new Array(workouts_num.slice(6,7)[0]).fill(0).map((num, index) => (
                <select key={index} onChange={(e)=>{
                  exerciselist[6].push(e.target.value);
                  setexerciselist(exerciselist);
                }} className={`bg-black text-white outline-none max-w-${workouts_num[6]>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect[6]).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout(6)} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout(6)} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        {dayon!=null && index!=null && <div className="absolute z-50 top-0 left-0 h-screen w-screen flex items-center justify-center bg-zinc-800 bg-opacity-85">
          <div className='flex relative flex-col align-middle justify-center bg-zinc-800 rounded-lg pt-2 pl-4 pr-4 pb-4'>
            <button onClick={()=>{setdayon(null);setindex(null)}} className='absolute right-0 top-0'><img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/macos-close.png" alt="macos-close"/></button>
            <p className='text-[3vw]'>Schedule for {dayon}</p> 
            <ul><li className='list-disc ml-4 text-xl'>Muscle - {exerciseselect[index].toUpperCase()}</li></ul>
            <div className='flex exercises overflow-x-scroll justify-center items-center'>
              {Api.map((muscle)=>{
                for(let i=0;i<exerciselist[index].length;i++){
                  if(muscle.muscle==exerciseselect[index] && muscle.name==exerciselist[index][i]){
                    return<div className='flex flex-col'>
                      <img className='h-[14vw] w-[20vw]' src={muscle.img}/>
                      <p className='w-full text-center'>{muscle.name}</p>
                    </div> 
                  }
                }
              })}
            </div>
          </div>
        </div>
}
      </div>
    </div>
  )
}

export default Planner
