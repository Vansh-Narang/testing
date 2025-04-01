// Modify your handleNext function to handle this case
const handleNext = () => {
    // Check if current question is answered
    if (!isCurrentQuestionAnswered()) {
        return;
    }

    // Special case for "Others" option in question 6
    if (questionsData[currentQuestionIndex].id === 6 && 
        selectedAnswers[6] === "Others (Please Specify)" && 
        !otherText.trim()) {
        return;
    }

    // Handle special case: if we're not on the last question, always go to next question
    if (currentQuestionIndex < questionsData.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        return;
    }

    // If we're on the last question and it's answered, move to next step
    if (currentQuestionIndex === questionsData.length - 1) {
        // All questions are answered, proceed to next step
        setCurrentStep(prevStep => prevStep + 1);
        // Update progress for next step
        setProgress(100); // Or whatever progress value for step 2
    }
};
