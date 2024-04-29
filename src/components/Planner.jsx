import React, { useEffect, useState } from 'react'
import Api from './Api'
function Planner() {
  const [workouts_num, setworkouts_num] = useState([1,1,1,1,1,1,1]);
  const [exerciseselect, setexerciseselect] = useState("");
  const handleAddWorkout = () => {
    const updatedWorkoutsNum = [...workouts_num];
    updatedWorkoutsNum[0]=workouts_num[0] + 1;
    setworkouts_num(updatedWorkoutsNum);
  };
  const handleDeleteWorkout = (day) => {
    if (workouts_num.length > 1) {
      const updatedWorkoutsNum = [...workouts_num];
      updatedWorkoutsNum[day]=workouts_num[day] - 1;
      setworkouts_num(updatedWorkoutsNum);
    }
  }

  useEffect(() => {
    console.log(workouts_num);
  }, [workouts_num])
  return (
    <>
      <div className='text-white border'>
        <div className="text-center w-full">
          <p className='text-4xl font-bold p-2 text-center bg-white text-black'>PLANNER FOR VIDHAN</p>
        </div>
        <div className="title border flex">
          <div className="day_t text-xl font-semibold border-r w-1/6 text-center p-3">
            Day
          </div>
          <div className="day_t text-xl font-semibold border-r w-1/6 text-center p-3">
            Muscle
          </div>
          <div className="day_t text-xl font-semibold border-r w-4/6 text-center p-3">
            Workout
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Sunday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num[0].length}`}>
            {new Array(workouts_num.slice(0,1)[0]).fill(0).map((num, index)=> (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num[0].length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Monday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num.length}`}>
            {new Array(workouts_num.slice(1,2)[1]).fill(0).map((num, index)=> (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num.length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Tuesday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num.length}`}>
            {new Array(workouts_num.slice(2,3)[2]).fill(0).map((num, index) => (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num.length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Wednesday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num.length}`}>
            {new Array(workouts_num.slice(3,4)[3]).fill(0).map((num, index) => (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num.length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Thursday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num.length}`}>
            {new Array(workouts_num.slice(4,5)[4]).fill(0).map((num, index) => (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num.length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Friday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num.length}`}>
            {new Array(workouts_num.slice(5,6)[5]).fill(0).map((num, index) => (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num.length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
        <div className="day border flex relative">
          <div className="dayname text-[1.5vw] border-r w-1/6 text-center p-3">
            Saturday
          </div>
          <div className='flex align-middle justify-center w-1/6 border-r px-4'>
            <select className='w-full text-black text-white bg-black outline-none' onChange={(e)=>setexerciseselect(e.target.value)}>
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
            <div className={`exercises overflow-x-scroll grid grid-flow-col gap-2 w-[90%] h-full grid-cols-${workouts_num.length}`}>
            {new Array(workouts_num.slice(0,7)[6]).fill(0).map((num, index) => (
                <select key={index} className={`bg-black text-white outline-none max-w-${workouts_num.length>2 && 44}`}>
                  <option className='text-center' defaultValue>Select exercise</option>
                  {Api.filter((exercise) => exercise.muscle === exerciseselect).map((exercise) => (
                    <option className='text-center' key={exercise.name}>{exercise.name}</option>
                  ))}
                </select>
              ))}
            </div>
            <div className="flex justify-center align-middle relative top-[6px]">
              <div>
                <img className='h-8' onClick={()=>handleAddWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/plus--v1.png" alt="plus--v1"/>
              </div>
              <div>
                <img className='h-8' onClick={()=>handleDeleteWorkout()} src="https://img.icons8.com/ios/50/FFFFFF/trash--v1.png" alt="trash--v1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Planner
