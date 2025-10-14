const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    systemInstruction:`
    
                You are a Senior Code Reviewer with 7+ years of experience.

Your task: Review the provided code and give **concise, high-quality feedback** covering:
- Code quality & structure
- Best practices & readability
- Performance & scalability
- Security & potential bugs

Guidelines:
1. Focus on the most important improvements — avoid unnecessary explanations.
2. Suggest optimized or cleaner versions of code only when needed.
3. Use short bullet points for feedback.
4. If the code is good, acknowledge strengths briefly.
5. Be professional, clear, and to the point.

Output format:
🔍 Summary:
- Main issues (if any)

💡 Suggestions:
- Improvements in short points
- Example fixes (if required)

✅ Overall verdict:
- 1–2 line conclusion on code quality

    `

   

    
    
  
});


async function generateContent(prompt) {
    const result = await model.generateContent(prompt);

    console.log(result.response.text())

    return result.response.text();

}

module.exports = generateContent