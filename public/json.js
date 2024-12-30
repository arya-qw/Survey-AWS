const json = {
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "elements": [
          {
            "type": "text",
            "name": "First Name",
            "title": "First Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "Last Name",
            "title": "Last Name",
            "isRequired": true
          },
          {
            "type": "text",
            "name": "Email",
            "title": "Email",
            "isRequired": true,
            "inputType": "email"
          },
          // {
          //   "type": "text",
          //   "name": "Phone",
          //   "title": "Phone",
          //   "inputType": "tel"
          // }
        ]
      },
      {
        "name": "page2",
        "elements": [
          {
            "type": "radiogroup",
            "name": "Do you own a car",
            "title": "Do you own a car?",
            "choices": [
              {
                "value": "Yes",
                "text": "Yes"
              },
              {
                "value": "No",
                "text": "No"
              }
            ]
          },
          {
            "type": "dropdown",
            "name": "What car brand do you own",
            "visibleIf": "{Do you own a car} = 'Yes'",
            "title": "What car brand do you own?",
            "choices": [
              {
                "value": "Toyota",
                "text": "Toyota"
              },
              {
                "value": "BMW",
                "text": "BMW"
              },
              {
                "value": "Honda",
                "text": "Honda"
              }
            ]
          },
          {
            "type": "text",
            "name": "How many kilometers do you drive per month",
            "visibleIf": "{Do you own a car} = 'Yes'",
            "title": "How many kilometers do you drive per month?",
            "inputType": "number"
          },
          {
            "type": "radiogroup",
            "name": "Do you travel frequently for work",
            "visibleIf": "{Do you own a car} = 'Yes'",
            "title": "Do you travel frequently for work?",
            "choices": [
              {
                "value": "Yes",
                "text": "Yes"
              },
              {
                "value": "No",
                "text": "No"
              }
            ]
          },
          {
            "type": "checkbox",
            "name": "Which mode of transportation do you prefer",
            "visibleIf": "{Do you travel frequently for work} = 'Yes'",
            "title": "Which mode of transportation do you prefer?",
            "choices": [
              {
                "value": "Flight",
                "text": "Flight"
              },
              {
                "value": "Train",
                "text": "Train"
              },
              {
                "value": "Car",
                "text": "Car"
              },
              {
                "value": "Bus",
                "text": "Bus"
              }
            ]
          }
        ]
      },
      {
        "name": "page3",
        "elements": [
          {
            "type": "rating",
            "name": "The survey was easy to understand",
            "title": "The survey was easy to understand",
            "isRequired": true
          },
          {
            "type": "rating",
            "name": "The form interface was intuitive",
            "title": "The form interface was intuitive",
            "isRequired": true
          },
          {
            "type": "file",
            "name": "file",
            "title": "Upload a photo of your car or a travel ticket\n"
          },
          {
            "type": "comment",
            "name": "comment",
            "title": "Do you have any additional feedback?"
          }
        ]
      }
    ]
  }