import React, { useState, useCallback } from 'react'
import "./BookDemo.css"
import tick from "../assets/Ticks.svg"
import grdp from "../assets/1.svg"
import soc from "../assets/2.svg"
import iso from "../assets/3.svg"
import zoom from "../assets/zoom.svg"
import reuters from "../assets/reuters.svg"
import heineken from "../assets/heineken.svg"
import logo from "../assets/NexaStack.svg"
import arrow from "../assets/Vector.svg"
import "../Pages/Button.css"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import styled from "styled-components";
import ProgressBar from '../Components/ProgressBar'

const StyledSpan = styled.span`
  color: red;
`;

const questionsData = [
    { id: 1, text: "Which segment does your company belongs to?", options: ["Startup", "Scale Startup", "SME", "Mid Enterprises", "Large Enterprises", "Public Sector", "Non-Profit Organizations"] },
    { id: 2, text: "How many technical teams will be working with NexaStack?", options: ["0-10", "11-50", "51-100", "More Than 100", "Only Me"] },
    { id: 3, text: "Does your team have in-house AI/ML expertise, or do you need support?", options: ["We have an in-house AI/ML team", "We need external AI/ML support", "Need additional support", "Not sure yet, exploring options"] },
    { id: 4, text: "Do you have specific compliance requirements (e.g., GDPR, HIPAA)?", options: ["GDRP", "HIPAA", "None", "Not Sure"] },
    { id: 5, text: "Where do you plan to deploy NexaStack for Unified Inference, and what are your infrastructure needs? (you can select multiple)", options: ["On-Premises – We have enterprise-grade hardware", "On-Premises - Need hardware recommendations", "Amazon", "Microsoft Azure", "Google Cloud", "Multi Cloud", "Not sure yet, need guidance"] },
    { id: 6, text: "What is your primary use case for NexaStack?", options: ["Agentic AI Development & Deployment", "AI Model Inference & Optimization", "Enterprise AI Operations", "MLOps & Model Lifecycle Management", "AI-Powered Applications & Services", "Others (Please Specify)"] },
    { id: 7, text: "Are there specific AI models you plan to operate using NexaStack?", options: ["LLMs (Large Language Models)", "Vision Models", "Recommendation Systems", "Speech & Audio Models", "Custom AI/ML Models", "Not Sure, Need Guidance"] },
];

const BookDemo = () => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentStep, setCurrentStep] = useState(1);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');
    const [isLastQuestionAnswered, setIsLastQuestionAnswered] = useState(false);
    const [pendingAnswer, setPendingAnswer] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        industry: '',
        department: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleAnswer = useCallback((questionId, option) => {
        // Set the pending answer to create a visual selection effect
        setPendingAnswer({ questionId, option });

        // After a short delay, proceed to the next question
        setTimeout(() => {
            setSelectedAnswers((prev) => ({
                ...prev,
                [questionId]: option
            }));

            // Reset pending answer
            setPendingAnswer(null);

            // Move to next question
            if (currentQuestionIndex < questionsData.length - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
            }
            // Enable next step for last question
            else if (currentQuestionIndex === questionsData.length - 1) {
                setIsLastQuestionAnswered(true);
            }
        }, 500); // 500ms delay to show the selection
    }, [currentQuestionIndex]);

    // Rest of the code remains the same as in your original component...

    return (
        <div className='w-full md:flex md:flex-row flex-col justify-between mx-auto h-screen font-inter overflow-x-hidden'>
            {/* ... other parts of your existing JSX ... */}

            {currentStep === 1 && (
                <div>
                    {/* ... other parts of your existing JSX ... */}
                    <div className="w-full mt-14">
                        <div key={questionsData[currentQuestionIndex].id} className="mb-6 flex flex-col">
                            <h2 className="text-sm md:text-xl font-semibold mb-2 text-start ml-6 md:ml-12 text-[22px] text-[#000000]">
                                {questionsData[currentQuestionIndex].text} <StyledSpan>*</StyledSpan>
                            </h2>
                            <div className="flex flex-wrap gap-5 md:gap-6 md:gap-y-8 mx-4 md:ml-12 my-6 md:text-[15px]">
                                {questionsData[currentQuestionIndex].options.map((option) => (
                                    <button
                                        key={option}
                                        className={`px-4 py-2 md:px-8 md:py-3 rounded-full border font-normal text-sm 
                                            ${selectedAnswers[questionsData[currentQuestionIndex].id] === option ? "bg-blue-500 text-white" : 
                                            pendingAnswer && pendingAnswer.option === option ? "bg-blue-300 text-white" : 
                                            "bg-[#F6F6F6]"}`}
                                        onClick={() => handleAnswer(questionsData[currentQuestionIndex].id, option)}
                                        disabled={pendingAnswer !== null} // Prevent multiple selections during delay
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ... rest of your existing JSX ... */}
                </div>
            )}

            {/* Rest of your component remains the same */}
        </div>
    );
};

export default BookDemo;
