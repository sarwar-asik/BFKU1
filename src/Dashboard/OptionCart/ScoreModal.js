import React from 'react';

const ScoreModal = ({id, data,score,setScore}) => {

    return (
        <div>
            <input type="checkbox" id={id} className="modal-toggle" />
                <div className="modal">
                <div className="modal-box md:w-[50%] w-[90%] h-[300px] relative">
                    <label htmlFor={id} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                     <h1 className="text-center font-bold text-2xl mt-8">Add Score</h1>
                     <input
                     onChange={(e)=>setScore(e.target.value)}
                      placeholder='add your score' type="tell" className='mt-6 bg-[#525c6f3f] mx-auto w-full rounded py-2 border-2 border-[#380082] px-2' />
                    <label htmlFor={id} className='mt-3 bg-blue-600 text-white absolute bottom-[20px]  right-[20px]  opacity-[100%] py-2 px-3 rounded'>+ Add</label>
                </div>
                </div>
        </div>
    );
};

export default ScoreModal;