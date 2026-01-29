

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');

const RANDOM_QUOTE_API_URL = 'https://api.adviceslip.com/advice';

async function fetchAndDisplayNewQuote() {
    console.log("Attempting API fetch for new quote...");
    
    if (quoteText) quoteText.textContent = "Fetching motivation...";
    if (quoteAuthor) quoteAuthor.textContent = "Source: Internet API"; 

    try {
       
        const response = await fetch(RANDOM_QUOTE_API_URL);
        
        if (!response.ok) {
           
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        
      
        const data = await response.json();
        
       
        const text = data.slip.advice;
        const author = "Source: Advice Slip API"; 

     
        if (quoteText && quoteAuthor) {
           
            quoteText.textContent = "“" + text + "”"; 
            quoteAuthor.textContent = "— " + author;
            console.log(`SUCCESS: Quote updated - ${text.substring(0, 30)}...`);
        }
        
    } catch (error) {
 
        console.error('API Integration Failed. Displaying fallback:', error);
        if (quoteText) quoteText.textContent = "“Hope is the strongest medicine. Early detection saves lives.”";
        if (quoteAuthor) quoteAuthor.textContent = "— Cancer Awareness Initiative (Fallback)";
    }
}



document.addEventListener('DOMContentLoaded', () => {
    
   
    if (newQuoteBtn) {
        
        newQuoteBtn.addEventListener('click', fetchAndDisplayNewQuote);
        console.log("Event listener attached to 'New Quote' button.");
    }
    
    
    fetchAndDisplayNewQuote();

    
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all fields.");
                return;
            }
            if (successMessage) {
                successMessage.style.display = 'block';
            }
            contactForm.reset();
            setTimeout(() => {
                if (successMessage) {
                    successMessage.style.display = 'none';
                }
            }, 5000);
        });
    }
});