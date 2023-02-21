import React from 'react';

const BalanceTransfer = () => {
    return (
        <div className='md:w-[80%] w-[97%] mx-auto mt-4'>
             <h1 className='font-bold text-lg'>Balance Transfer</h1>
             {/* display statement */}
            <div className="overflow-x-auto">
                <table className="table table-compact w-full mt-4">
                    <thead>
                    <tr className="">
                        <th className="bg-[#169e8c] text-white">To</th> 
                        <th className="bg-[#169e8c] text-white">From</th> 
                        <th className="bg-[#169e8c] text-white">Amount</th> 
                        <th className="bg-[#169e8c] text-white">Notes</th> 
                        <th className="bg-[#169e8c] text-white">Requested At</th> 
                        <th className="bg-[#169e8c] text-white">Action At</th> 
                        <th className="bg-[#169e8c] text-white">Status</th>
                        
                    </tr>
                    </thead> 
                    <tbody>
                    <tr className='border-t border-gray-400'>
                      <td className="bg-gray-600 text-white">To</td> 
                      <td className="bg-gray-600 text-white">From</td> 
                      <td className="bg-gray-600 text-white">Amount</td> 
                      <td className="bg-gray-600 text-white">Notes</td> 
                      <td className="bg-gray-600 text-white">Requested At</td> 
                      <td className="bg-gray-600 text-white">Action At</td> 
                      <td className="bg-gray-600 text-white">Status</td>
                    </tr>
                    <tr className='border-t border-gray-400'>
                      <td className="bg-gray-600 text-white">To</td> 
                      <td className="bg-gray-600 text-white">From</td> 
                      <td className="bg-gray-600 text-white">Amount</td> 
                      <td className="bg-gray-600 text-white">Notes</td> 
                      <td className="bg-gray-600 text-white">Requested At</td> 
                      <td className="bg-gray-600 text-white">Action At</td> 
                      <td className="bg-gray-600 text-white">Status</td>
                    </tr> 
                 
                    </tbody> 
                </table>
                </div>
                            
        </div>
    );
};

export default BalanceTransfer;