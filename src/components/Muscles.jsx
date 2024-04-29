import React, { useState } from 'react';
import './Muscles.css';
import { Link } from 'react-router-dom';

const Muscles = ({ searchTerm }) => {
  const [selectedMuscle, setSelectedMuscle] = useState(null);

  const work = [
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
  ];

  const filteredMuscles = work.filter((muscle) =>
    muscle.muscle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='musc container mb-4'>
      <div className='row overflow-hidden'>
        <h1 className='items-center text-white font-bold mb-4'>Workout Categories</h1>
        {filteredMuscles.map((muscle) => (
          <div key={muscle.muscle} className='muscs col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-4'>
            <Link
              to={`/Bicep/${muscle.muscle}`}
              onClick={() => {
                setSelectedMuscle(muscle.muscle);
              }}
            >
              <img
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className='min-w-72 min-h-48'
                src={muscle.img}
                alt=''
              />
            </Link>
            <div className='text-white text-xl'>{muscle.muscle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Muscles;

