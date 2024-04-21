import React, { useState } from 'react';
import './Bicep.css';
import Api from './Api';
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, Link } from 'react-router-dom';

export default function Bicep() {
  const [selectedExercise, setSelectedExercise] = useState(false);
  const { musclename } = useParams();
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [sort, setSort] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [selectedMuscle, setSelectedMuscle] = useState(null);
  const [popup, setpopup] = useState(false)

  const filteredExercises = Api.filter((exercise) => {
    const matchesMuscle = exercise.muscle.toLowerCase() === musclename.toLowerCase().replace(/\s/g, '');
    if (selectedDifficulties.length === 0) {
      return matchesMuscle;
    } else {
      return matchesMuscle && selectedDifficulties.includes(exercise.difficulty.toLowerCase());
    }
  });

  const handleDifficultyChange = (event) => {
    const difficulty = event.target.value;
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(selectedDifficulties.filter((d) => d !== difficulty));
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  // const openExerciseModal = (exercise) => {
  //   setSelectedExercise(exercise);
  // };

  // const closeExerciseModal = () => {
  //   setSelectedExercise(null);
  // };
  return (
    <div className='flex relative'>
        {!sidebarVisible && <button className='absolute top-[1vw] left-5 cursor-pointer z-50' onClick={toggleSidebar}>
        <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/circled-menu--v2.png" alt="circled-menu--v2"/>
        </button>}

      {sidebarVisible && (
        <div className="difficulty-filter w-1/5 h-[100vh] border-r-4 pr-2 sticky top-28 flex flex-col items-center min-w-44">
            {window.innerWidth>1300 ? <button className='absolute right-2 top-4' onClick={toggleSidebar}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/macos-close.png" alt="macos-close"/></button> : <button onClick={toggleSidebar}><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/macos-close.png" alt="macos-close"/></button>}
            <button className='bg-white text-black py-2 px-4 rounded-lg text-base mb-4 mt-2 w-36' onClick={() => setSort(!sort)}>
            Sort & Filter
            </button>

          
          {sort && (
            <div className='h-full flex flex-col items-center text-white'>
              <ul className='mb-2 flex flex-col justify-center'>
                <li>
                  <input
                    type="checkbox"
                    value="beginner"
                    checked={selectedDifficulties.includes('beginner')}
                    onChange={handleDifficultyChange}
                  />
                  Beginner
                </li>
                <li>
                  <input
                    type="checkbox"
                    value="intermediate"
                    checked={selectedDifficulties.includes('intermediate')}
                    onChange={handleDifficultyChange}
                  />
                  Intermediate
                </li>
              </ul>
            </div>
          )}
          <div className='w-full'>
            {work.map((muscle) => (
              <div key={muscle.muscle}>
                <Link to={`/Bicep/${muscle.muscle}`}>
                  <div
                    onClick={() => setSelectedMuscle(muscle.muscle)}
                    className={`cursor-pointer mb-2 text-lg p-2 w-full text-white ${
                      selectedMuscle === muscle.muscle ? 'bg-zinc-800' : 'bg-transparent'
                    }`}
                  >
                    {muscle.muscle}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      {sidebarVisible && document.querySelector('.bic').addEventListener('click',function(){
        setSidebarVisible(false);
      })}
      {/* {selectedExercise &&
      (
        <div className="exercise-modal absolute top-[0vw] p-4 rounded-lg left-[30vw] z-10 bg-zinc-800 text-white w-96">
          <div className="modal-content">
            <img src={selectedExercise.img} alt={selectedExercise.name} />
            <p>{selectedExercise.instructions}</p>
            <button onClick={closeExerciseModal}>Close</button>
          </div>
        </div>
      )
      } */}
      <div className='bic container-fluid relative'>
        <h1 className='w-full text-center font-semibold text-3xl mb-2'>Exercises for {musclename.toUpperCase()}</h1>
        <div className="row gap-2 flex justify-center text-center">
          {filteredExercises.map((exercise) => (
            <div key={exercise.name} className='bics col-lg-3 col-md-8 col-sm-8 col-xs-12 mb-4'>
              <img className='cursor-pointer' src={exercise.img} alt={exercise.name} onClick={()=>{setSelectedExercise(true)}}/>
              <p>{exercise.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const work=[
  {
    "muscle":"Biceps",
    "img":"https://cdn.mos.cms.futurecdn.net/zkrwxQVtsn3Yi2Pgmh89eN-1200-80.jpg",
  },
  {
    "muscle":"Calves",
    "img":"https://exercise.co.uk/wp-content/uploads/2023/02/5-of-the-best-exercises-for-your-calves-banner.jpg",
  },
  {
    "muscle":"Chest",
    "img":"https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/05/Chest-exercise.jpg",
  },
  {
    "muscle":"Forearms",
    "img":"https://www.healthkart.com/connect/wp-content/uploads/2023/07/Forearm-exercises_900-1.jpg",

  },
  {
    "muscle":"Glutes",
    "img":"https://cdn.muscleandstrength.com/sites/default/files/styles/400x250/public/taxonomy/image/workouts/gluteworkouts.jpg?itok=9YNMOvjw",

  },
  {
    "muscle":"Hamstrings",
    "img":"https://media.istockphoto.com/id/504247240/photo/sporty-legs-hamstrings.jpg?s=612x612&w=0&k=20&c=7r0fzIKgJASrlY42Kn-tfGSVGZi4_1DKWgPIkIRyKWg=",

  },
  {
    "muscle":"Lats",
    "img":"https://uppper.com/cdn/shop/articles/lat-exercises.jpg?v=1647903101",

  },
  {
    "muscle":"Lower Back",
    "img":"https://149874912.v2.pressablecdn.com/wp-content/uploads/2023/12/lower-back-exercises-scaled.jpg",

  },
  {
    "muscle":"Middle Back",
    "img":"https://images-prod.healthline.com/hlcmsresource/images/topic_centers/2018-6/Back_Dumbbell_Workout_Weights-1296x728-Header.jpg",

  },
  {
    "muscle":"Quadriceps",
    "img":"https://www.mensjournal.com/.image/t_share/MTk2MTM2OTM1NTEwNTE2ODgx/lunge.jpg",

  },
  {
    "muscle":"Traps",
    "img":"https://i.shgcdn.com/8659db64-2d40-4e04-bd30-7113a142ab0a/-/format/auto/-/preview/3000x3000/-/quality/lighter/g",
    
  },
  {
    "muscle":"Triceps",
    "img":"https://www.transparentlabs.com/cdn/shop/articles/best_triceps_workout_1.jpeg?v=1653436238",

  },
]