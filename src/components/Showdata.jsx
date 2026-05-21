import React, { useState } from "react";

function Showdata9({ users, loading }) {
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-purple-900 p-8">
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {users.map((user) => (
            <div
              key={user.albumId}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl hover:scale-105 transition duration-300"
            >
             

              <h2 className="text-2xl font-bold text-white text-center mb-4">
                {user.title}
              </h2>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Showdata9;