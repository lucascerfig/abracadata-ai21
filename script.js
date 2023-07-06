document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#btn').addEventListener('click', function(){
    let text = document.querySelector('#texto').value;
    plugin(text);
  }) 
  
  function upper(text){
    return text.toUpperCase();
  }

  function teste(text){
    console.log("ALOOOO");
    return text.toUpperCase();
  }

  async function plugin(text){
    const response = await fetch("https://api.ai21.com/studio/v1/j2-ultra/complete", {
      headers: {
        "Authorization": "Bearer dY6X9604gkkY5xgDADRUTBMEBoiZEfEI",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "prompt": text,
        "numResults": 1,
        "maxTokens": 5000,
        "temperature": 0.8,
        "topKReturn": 0,
        "topP":1,
        "countPenalty": {
          "scale": 0,
          "applyToNumbers": false,
          "applyToPunctuations": false,
          "applyToStopwords": false,
          "applyToWhitespaces": false,
          "applyToEmojis": false
        },
        "frequencyPenalty": {
          "scale": 0,
          "applyToNumbers": false,
          "applyToPunctuations": false,
          "applyToStopwords": false,
          "applyToWhitespaces": false,
          "applyToEmojis": false
        },
        "presencePenalty": {
          "scale": 0,
          "applyToNumbers": false,
          "applyToPunctuations": false,
          "applyToStopwords": false,
          "applyToWhitespaces": false,
          "applyToEmojis": false
        },
        "stopSequences":[]
      }),
      method: "POST"
    });
  
    const data = await response.json();
    const generatedText = data.completions[0].data.text;
    document.querySelector("#result").innerHTML = generatedText;
    // console.log(generatedText);
    return generatedText;
  }
});
