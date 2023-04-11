import React from 'react';
import { PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const Statistics = () => {
    const marksData = [
        { name: 'Assignment 1', value: 60 },
        { name: 'Assignment 2', value: 60 },
        { name: 'Assignment 3', value: 60 },
        { name: 'Assignment 4', value: 60 },
        { name: 'Assignment 5', value: 60 },
        { name: 'Assignment 6', value: 60 },
        { name: 'Assignment 7', value: 60 },
        { name: 'Assignment 8', value: 60 }
    ];

    return (
        <div>
            <h1 className='bg-gray-50 text-center p-20 text-3xl font-bold'>Assignment Marks Statistics</h1>
            <div className='flex justify-center gap-40 my-20'>
                <div>
                    <h1 className='text-3xl font-bold text-center my-10'>Pie Chart</h1>
                    <PieChart width={600} height={600} className='mx-auto'>
                        <Pie
                            dataKey="value"
                            startAngle={180}
                            endAngle={0}
                            data={marksData}
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            label
                        />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
                <div>
                    <h1 className='text-center text-3xl font-bold my-10'>Area Chart</h1>
                    <AreaChart className='mx-auto'
                        width={500}
                        height={400}
                        data={marksData}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="black" fill="#8884d8" />
                    </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Statistics;