'use client'
import BottomBar from '@/components/BottomBar';
import React, { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

export default function Leaderboard({ leaders ,handleOnClick}) {
  

  const isMobile = useIsMobile();
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  useEffect(() => {
    fetchDataLeader();
  }, []);

  return (
    <div className="bg-black fixed p-4 backdrop-blur-lg h-full w-1/5 right-0 overflow-y-auto scrollbar-thin no-scrollbar"> 
      <h2 className="font-bold  m-2 text-white">Leaderboard</h2>
      <ul>
        {leaders.map((leader, i) => (
          <li key={i} onClick={()=>{handleOnClick(leader._id)}} className=" rounded-lg border border-gray-900 m-2 px-5 py-2 flex justify-between items-center text-white">
            <div className="flex flex-col">

            <p className="font-bold text-xl">
              <span className="text-[#c084fc]">#</span>{leader.position} 
              </p>
              <span className="text-gray-400 text-md mt-1 ">
              {leader.Title}


  return (
    <div className="flex min-h-screen bg-gradient-to-r from-black to-blue-900">
      {!isMobile }
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center text-white">Leaderboard</h1>
          <ul>
            {leaders.map((leader, index) => (
              <li key={index} className="text-white mb-2">
                {index + 1}. {leader.name} - {leader.points} points
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isMobile && (
        <>
          <BottomBar showLeaderboard={showLeaderboard} setShowLeaderboard={setShowLeaderboard} />
          {showLeaderboard && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 p-4">
              <button onClick={() => setShowLeaderboard(false)} className="absolute top-4 right-4 text-white">
                Close
              </button>
              <Leaderboard leaders={leaders} />
            </div>

              <span className="text-gray-400 text-xs mt-1 ">
              

               <span className="text-white"> 
                {leader.Upvotes}
                </span>
                 {leader.Upvotes==1?" Upvote":" Upvotes"}
              </span>
          </li>
        ))}
      </ul>
      {isMobile && (
        <>
          <BottomBar showLeaderboard={showLeaderboard} setShowLeaderboard={setShowLeaderboard} />
          {showLeaderboard && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 p-4">
              <button onClick={() => setShowLeaderboard(false)} className="absolute top-4 right-4 text-white">
                Close
              </button>
              <Leaderboard leaders={leaders} />
            </div>

          )}
        </>
      )}
    </div>
  );
}

export default LeaderboardPage;