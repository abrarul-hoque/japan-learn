import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const useLessons = () => {
    const axiosPublic = useAxiosPublic();

    const { data: lessons = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['lessons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/lessons');

            return res?.data;
        }
    })
    return [lessons, loading, refetch]
};

export default useLessons;
