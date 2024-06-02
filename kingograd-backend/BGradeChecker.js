//../kingograd-backend/BGradeCjecler.js

/**
 * checks if stud has at least B grade in at least three req courses
 * @param {opbject} grades - obj containing course names as keys and grades as vals
   @return {bool} - true of stud meets req.
*/

const checkMinBGrades = (grades) => {
    const reqCourses = [
        'introduction_to_database',
        'operating_system',
        'introduction_to_computer_architecture',
        'computer_networks',
        'programming_languages'
    ];

    const validGrades = ['A+', 'A', 'B+', 'B'];

    const eligibleCourses = reqCourses.filter(course => {
        return grades[course] && validGrades.includes(grades[course].toUpperCase());
    });

    return bGradeCourses.length >= 3;
};

module.exports = { checkMinBGrades };