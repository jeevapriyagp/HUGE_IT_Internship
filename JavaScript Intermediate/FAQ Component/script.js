// sample FAQ data
const faqs = [
    { question: "What is your return policy?", answer: "You can return any item within 30 days." },
    { question: "How do I track my order?", answer: "You can track it using the tracking link sent to your email." },
    { question: "Do you offer customer support?", answer: "Yes, we offer 24/7 customer support via chat and email." }
  ];

const faqList = document.querySelector('.faq-list'); // find html container where FAQs will go
  
for (let i = 0; i < faqs.length; i++) 
{
    let faqItem = document.createElement('div');    // create a container for each FAQ
    faqItem.className = 'faq-item';
  
    // creating question part
    let question = document.createElement('div');
    question.className = 'faq-question';
    question.textContent = faqs[i].question;
  
    // creating answer part which is hidden by default
    let answer = document.createElement('div');
    answer.className = 'faq-answer';
    answer.textContent = faqs[i].answer;
    answer.style.display = 'none'; // hide answer at first
  
    question.addEventListener('click', function() // click to show answers
    {
        if (answer.style.display === 'none') 
        {
            answer.style.display = 'block';
        }
        else 
        {
            answer.style.display = 'none';
        }
    });
  
    // adding both question and answer inside the FAQ item
    faqItem.appendChild(question);
    faqItem.appendChild(answer);
  
    faqList.appendChild(faqItem); // adding the FAQ item to the main list
}
  