import React from 'react';

const AllSponsorTable = ({ singleSponsor,i }) => {
    const { user, sponsors } = singleSponsor
    console.log(singleSponsor);
    return (
        <tr className="border-2 rounded text-white bg-slate-600 font-semibold">
            <td className="p-2 text-sm text-center">{user.name
            }</td>
            <td className="p-2 text-sm text-center">{user.userID
            }</td>
            <td className="p-2 text-sm text-center">{user.email}</td>
            <td className="p-2 text-sm text-center">{sponsors.length}</td>
        </tr>
    );
};
export default AllSponsorTable;