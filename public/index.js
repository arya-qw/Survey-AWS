document.addEventListener('DOMContentLoaded', function () {
    // Initialize the survey model from the JSON object (make sure json.js defines the survey structure)
    const survey = new Survey.Model(json);

    // Add an event listener when the survey is completed
    survey.onComplete.add((sender, options) => {
        const surveyData = JSON.stringify(sender.data, null, 3);

        // Log the survey data to the console
        // console.log(surveyData);

        // API details
        const apiUrl = `https://apim.quickwork.co/Demo-app/form/v1/path1?apikey=ZlV1xQcRnFkAiCUjELphxdp96xMgubOs`;

        // Send the collected survey data to the Quickwork API
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

    // Render the survey inside the #surveyElement div
    $("#surveyElement").Survey({ model: survey });
});
