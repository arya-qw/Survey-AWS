const survey = new Survey.Model(json);

survey.onComplete.add((sender, options) => {
    const surveyData = JSON.stringify(sender.data, null, 3);

    // Log the survey data
    console.log(surveyData);

    // API details
    const apiUrl = `https://apim.quickwork.co/Demo-app/form/v1/path1?apikey=ZlV1xQcRnFkAiCUjELphxdp96xMgubOs`;

    // Send data to Quickwork API
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: surveyData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Data sent successfully:", data);
    })
    .catch(error => {
        console.error("Error sending data:", error);
    });
});

// Render the survey
$("#surveyElement").Survey({ model: survey });
