import React from 'react';
import { useForm } from 'react-hook-form';

const SetOption = () => {
    const { register, handleSubmit } = useForm();
    const handleLiveSetOption = data => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(handleLiveSetOption)} className="mt-5">
            <h3 className='text-2xl mb-3 text-center font-semibold'>Set Option</h3>
            <div>
                <input {...register("optionHeader")} type="text" placeholder="name of option header" className="text-white input input-bordered w-full bg-gray-600 mb-2" />
                <input {...register("position")} type="text" placeholder="Type your position" className="text-white input input-bordered w-full bg-gray-600 border-green-300 mb-2" />
                <input {...register("rate")} type="text" placeholder="Type position rate" className="text-white input input-bordered w-full bg-gray-600 border-green-300 mb-2" />
                <input {...register("TypeYourPosition")} type="text" placeholder="Type position rate" className="text-white input input-bordered w-full bg-gray-600 border-green-300 mb-2"/>
                <input {...register("TypePositionRate")} type="text" placeholder="Type position rate" className="text-white input input-bordered w-full bg-gray-600 border-green-300 mb-2" />
            </div>
            <div className='flex justify-end mt-2'>
                <div>
                <p className='font-semibold'>+ Add more options</p>
                <div className='flex items-center gap-2 justify-end'>
                    <p>is it toss</p>
                    <input type="checkbox" className="checkbox checkbox-xs mt-1" />
                </div>
                </div>
            </div>
            <input {...register("timeDuration")} type="text" placeholder="Time duration" className="text-white input input-bordered w-full bg-gray-600 border-green-300" />
            <div className='flex justify-start mt-3'>
                <input type="submit" value="save" className='btn' />
            </div>
        </form>
    );
};

export default SetOption;