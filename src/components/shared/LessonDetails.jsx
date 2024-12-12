import React from 'react';
import { useLoaderData } from 'react-router-dom';

const LessonDetails = () => {
    const lessonData = useLoaderData();

    console.log(lessonData)
    return (
        <div>
            LessonDetails page

        </div>
    );
};

export default LessonDetails;