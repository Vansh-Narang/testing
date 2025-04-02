// Map of countries to their timezones
const countryTimezoneMap = {
    // Add your country to timezone mappings here
    'US': 'America/New_York',
    'UK': 'Europe/London',
    'Australia': 'Australia/Sydney',
    // Add more as needed
};

// Generate available time slots based on India's business hours converted to user's timezone
const intervals = (timezone) => {
    // India business hours (fixed)
    const indiaStartTime = '08:00 AM';
    const indiaEndTime = '08:30 PM';
    
    // Convert India business hours to moments in India timezone
    const indiaStart = moment.tz(indiaStartTime, 'hh:mm A', 'Asia/Kolkata');
    const indiaEnd = moment.tz(indiaEndTime, 'hh:mm A', 'Asia/Kolkata');
    
    // Convert India's business hours to user's timezone
    const userStart = indiaStart.clone().tz(timezone);
    const userEnd = indiaEnd.clone().tz(timezone);
    
    // Round to nearest 30-minute slot
    userStart.minutes(Math.ceil(userStart.minutes() / 30) * 30);
    
    const timeSlots = [];
    const current = userStart.clone();
    
    // Generate 30-minute slots in user's timezone that correspond to India's business hours
    while (current.isBefore(userEnd)) {
        timeSlots.push(current.format('hh:mm A'));
        current.add(30, 'minutes');
    }
    
    return timeSlots;
};

useEffect(() => {
    const selectedDate = moment(val);
    const currentTime = moment(); // Current time in local browser timezone
    
    // Get the timezone of the selected country
    const userTimezone = countryTimezoneMap[formData.country] || "UTC";
    
    // Convert current time to the user's timezone
    const localTime = currentTime.tz(userTimezone);
    
    const updateAvailableSlots = () => {
        // Check if selected date is a weekend (0 = Sunday, 6 = Saturday)
        const selectedDay = selectedDate.day();
        if (selectedDay === 0 || selectedDay === 6) {
            // No slots for weekends
            setSlots([]);
            selectedSlotslength(0);
            return;
        }
        
        // Generate all possible slots for the user's timezone that correspond to India's business hours
        let generatedSlots = intervals(userTimezone);
        
        // If the selected date is today, filter out past slots
        if (selectedDate.isSame(localTime, 'day')) {
            // Filter slots that are in the future (add a small buffer of minutes)
            generatedSlots = generatedSlots.filter(slot => {
                const slotTime = moment.tz(
                    `${selectedDate.format('YYYY-MM-DD')} ${slot}`, 
                    'YYYY-MM-DD hh:mm A', 
                    userTimezone
                );
                return slotTime.isAfter(localTime.add(10, 'minutes'));
            });
        }
        
        setSlots(generatedSlots);
        selectedSlotslength(generatedSlots.length);
        
        // Clear invalid selected slot if it's no longer available
        if (selectedSlot && !generatedSlots.includes(selectedSlot)) {
            setSelectedSlot(null);
        }
    };
    
    updateAvailableSlots();
    
    // Update slots every minute to handle passing time
    const intervalId = setInterval(updateAvailableSlots, 60000);
    
    return () => clearInterval(intervalId);
}, [val, formData.country]);

// Format the selected slot for display
const formatSelectedSlot = (date, slot) => {
    const userTimezone = countryTimezoneMap[formData.country] || "UTC";
    
    // Create a moment for the selected date and time in user's timezone
    const slotStart = moment.tz(
        `${moment(date).format('YYYY-MM-DD')} ${slot}`, 
        'YYYY-MM-DD hh:mm A', 
        userTimezone
    );
    
    const slotEnd = slotStart.clone().add(30, 'minutes');
    
    // Format date and time in user's timezone
    const formattedDate = slotStart.format('Do MMMM YYYY');
    const formattedStartTime = slotStart.format('h:mm A');
    const formattedEndTime = slotEnd.format('h:mm A');
    
    // Also show India time for clarity
    const indiaStart = slotStart.clone().tz('Asia/Kolkata');
    const indiaEnd = slotEnd.clone().tz('Asia/Kolkata');
    const indiaTimeStr = `(${indiaStart.format('h:mm A')} - ${indiaEnd.format('h:mm A')} IST)`;
    
    return `${formattedDate} | ${formattedStartTime} - ${formattedEndTime} ${userTimezone.replace('_', ' ')} ${indiaTimeStr}`;
};
