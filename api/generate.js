export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;

  const userPrompt = req.body.prompt;

  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: userPrompt,
      max_tokens: 150,
    }),
  });

  const data = await response.json();
  res.status(200).json({ result: data.choices[0].text });
}
