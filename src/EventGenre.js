import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

export const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
   const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length; 
      return { name: genre, value };
    });
    return data; 
  };
  setData(() => getData()); }, [events]);

  /* useEffect(() => { setData(() => getData()); }, [getData]); */
    /* export const EventGenre = ({ events }) => {
      const [data, setData] = useState([]); */
    /* useEffect(() => {
      const getData = () => {
        const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS'];

        const data = genres.map((genre) => {
        
            const value = events.filter ((event) =>
            
            event.summary.split(' ').includes(genre)
          ).length;
          return { name: genre, value };
        });
        return data;
      };
      setData(() => getData());
    }, [events]); */

    /* old code const value = events.filter(({summary}) => event.summary.split(' ').includes(genre)).length; */
    /* new code const value = events.filter((event) => event.summary.split(' ').includes(genre)).length; */

    return (
        <ResponsiveContainer height={400} >
            <PieChart margin-left={200}  height={400} width={400}>
                <Pie
                    data={data}
                    cx={200}
                    cy={200}
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => ` ${name} ${(percent * 100).toFixed(0)}%`}
                >
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
};

export default EventGenre;