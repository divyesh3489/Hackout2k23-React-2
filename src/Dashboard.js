import React from 'react'
import Chart from "chart.js/auto";
import Linechart from './Linechart';
import Barchart from './Barchart';
function Dashboard() {

    return (
        <>
            <div className='m-5 bg-white p-5 rounded-md  grid lg:gap-20 gap-5 lg:grid-cols-4 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-4'>

                <div className='p-5 bg-orange-500 rounded-md'>

                    <label for="month" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a month</label>
                    <select id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Jan">January</option>
                        <option value="Feb">Feburary</option>
                        <option value="Mar">March</option>
                        <option value="Apr">April</option>
                        <option value="May">May</option>
                        <option value="Jun">June</option>
                        <option value="Jul">July</option>
                        <option value="Aug">Augest</option>
                        <option value="Sep">September</option>
                        <option value="Oct">October	</option>
                        <option value="Nov">November</option>
                        <option value="Dec">December</option>
                    </select>
                </div>
                <div className='p-5 bg-orange-500 rounded-md'>
                    <div className='text-black-700'>
                        30%
                    </div>
                    <div class="mb-1 text-base font-medium text-black-500">Pending product</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-red-700 h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>

                </div>

                <div className='p-5 bg-orange-500 rounded-md'>
                    <div className='text-black-700'>
                        60%
                    </div>
                    <div class="mb-1 text-base font-medium text-black-500">Completed product</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-red-700 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>

                </div><div className='p-5 bg-orange-500 rounded-md'>
                    <div className='text-black-700'>
                        90%
                    </div>
                    <div class="mb-1 text-base font-medium text-black-500">Overall product</div>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                        <div class="bg-red-700 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                    </div>

                </div>
            </div>
            <div className=' grid lg:gap-20 gap-5 lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2'>
                <div className='m-5 bg-white p-5 rounded-md '>
                    <Linechart label="Efficiency" />
                </div>
                <div className='m-5 bg-white p-5 rounded-md '>
                    <Linechart label="Pending" />
                </div>
                <div className='m-5 bg-white p-5 rounded-md '>
                    <Barchart label="Pending" />
                </div>
            </div>
        </>
    )
}

export default Dashboard