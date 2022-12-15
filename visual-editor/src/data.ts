const data = {
  "success": true,
  "data": [
    {
      "_id": "2260",
      "data": {
        "machines": {
          "0": {
            "displayName": "/",
            "parent": "",
            "default": "Start",
            "concurrent": "false",
            "history": "false",
            "states": {
              "Start": {
                "displayName": "Start",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "a718ffaf-6fd2-4556-8f1f-061dd7850f7d": {
                    "displayName": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Text" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "a718ffaf-6fd2-4556-8f1f-061dd7850f7d": {
                        "displayName": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "button": "0" },
                        { "button": "2" },
                        { "button": "4" }
                      ]
                    }
                  }
                }
              },
              "Text": {
                "displayName": "Text",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "54ff3e7e-9b20-4cf2-be9b-2655e7954d83": {
                    "displayName": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83",
                    "from": { "machine": "0", "uid": "Text" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "54ff3e7e-9b20-4cf2-be9b-2655e7954d83": {
                        "displayName": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 0 },
                        { "header": 0 },
                        { "text": 0 },
                        { "text": "1" },
                        { "button": "1" }
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      },
      "extraData": {
        "context": {
          "en-CA": {
            "menu": {},
            "title": { "1": { "text": "Big Title" } },
            "header": { "1": { "text": "Cool Header" } },
            "text": {
              "1": "small text",
              "2": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            "button": {
              "1": { "text": "Text state", "actionID": "start-text" },
              "2": { "text": "Return to start", "actionID": "text-start" },
              "3": { "text": "Image state", "actionID": "start-image" },
              "4": { "text": "Return to start", "actionID": "image-start" },
              "5": { "text": "Button state", "actionID": "start-button" },
              "6": { "text": "Return to start", "actionID": "button-start" }
            },
            "image": {},
            "video": {}
          }
        },
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"Start\"},\"position\":{\"x\":300,\"y\":550},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Text\"},\"position\":{\"x\":639.7652352795509,\"y\":381.21263681933755},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Image\"},\"position\":{\"x\":681,\"y\":559},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Button\"},\"position\":{\"x\":612,\"y\":730},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}],\"edges\":[{\"data\":{\"source\":\"Start\",\"target\":\"Text\",\"id\":\"a718ffaf-6fd2-4556-8f1f-061dd7850f7d\",\"label\":\"start-text\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Text\",\"target\":\"Start\",\"id\":\"54ff3e7e-9b20-4cf2-be9b-2655e7954d83\",\"label\":\"text-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Image\",\"id\":\"f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0\",\"label\":\"start-image\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Image\",\"target\":\"Start\",\"id\":\"d980a2e8-86f6-471f-9165-bb039ad35c09\",\"label\":\"image-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Button\",\"id\":\"ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41\",\"label\":\"start-button\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Button\",\"target\":\"Start\",\"id\":\"dee6fd14-9c62-4423-b81b-32107422752f\",\"label\":\"button-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-03T20:48:37.637Z",
      "updatedAt": "2022-05-03T22:04:56.632Z",
      "__v": 0
    },
    {
      "_id": "3177",
      "data": {
        "machines": {
          "0": {
            "displayName": "/",
            "parent": "",
            "default": "Start",
            "concurrent": "false",
            "history": "false",
            "states": {
              "Start": {
                "displayName": "Start",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "a718ffaf-6fd2-4556-8f1f-061dd7850f7d": {
                    "displayName": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Text" }
                  },
                  "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0": {
                    "displayName": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Image" }
                  },
                  "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41": {
                    "displayName": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Button" }
                  },
                  "245a6c06-3deb-4443-8e06-861c9da127c0": {
                    "displayName": "start-form",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Form" }
                  },
                  "851f9fbb-61e7-4522-9aeb-2c85afee238f": {
                    "displayName": "start-list",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "List" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "start-text": {
                        "displayName": "start-text",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d"
                              }
                            ]
                          }
                        ]
                      },
                      "start-image": {
                        "displayName": "start-image",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-button": {
                        "displayName": "start-button",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41"
                              }
                            ]
                          }
                        ]
                      },
                      "start-form": {
                        "displayName": "start-form",
                        "action": [
                          {
                            "condition": true,
                            "events": [
                              {
                                "type": "transition",
                                "do": "245a6c06-3deb-4443-8e06-861c9da127c0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-list": {
                        "displayName": "start-list",
                        "action": [
                          {
                            "condition": true,
                            "events": [
                              {
                                "type": "transition",
                                "do": "851f9fbb-61e7-4522-9aeb-2c85afee238f"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "2" },
                        { "button": "1" },
                        { "button": "3" },
                        { "button": "5" },
                        { "button": 10 },
                        { "button": 12 }
                      ]
                    }
                  }
                }
              },
              "Text": {
                "displayName": "Text",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "54ff3e7e-9b20-4cf2-be9b-2655e7954d83": {
                    "displayName": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83",
                    "from": { "machine": "0", "uid": "Text" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "text-start": {
                        "displayName": "text-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "1" },
                        { "header": "1" },
                        { "text": "1" },
                        { "text": "2" },
                        { "button": "2" }
                      ]
                    }
                  }
                }
              },
              "Image": {
                "displayName": "Image",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "d980a2e8-86f6-471f-9165-bb039ad35c09": {
                    "displayName": "d980a2e8-86f6-471f-9165-bb039ad35c09",
                    "from": { "machine": "0", "uid": "Image" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "image-start": {
                        "displayName": "image-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "d980a2e8-86f6-471f-9165-bb039ad35c09"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "3" },
                        { "image": 1 },
                        { "video": "1" },
                        { "button": "4" }
                      ]
                    }
                  }
                }
              },
              "Button": {
                "displayName": "Button",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "dee6fd14-9c62-4423-b81b-32107422752f": {
                    "displayName": "dee6fd14-9c62-4423-b81b-32107422752f",
                    "from": { "machine": "0", "uid": "Button" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "button-start": {
                        "displayName": "button-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "dee6fd14-9c62-4423-b81b-32107422752f"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "4" },
                        { "button": "7" },
                        { "button": "8" },
                        { "button": "9" },
                        { "button": "6" }
                      ]
                    }
                  }
                }
              },
              "Form": {
                "displayName": "Form",
                "machine": null,
                "composite": false,
                "entry": [],
                "exit": [],
                "transitions": {
                  "4b195169-5a11-48be-9b6c-d8e8f32c4057": {
                    "displayName": "form-start",
                    "from": { "machine": "0", "uid": "Form" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 5 },
                        { "input": 1 },
                        { "button": 11 }
                      ]
                    },
                    "actions": {
                      "form-start": {
                        "displayName": "form-start",
                        "action": [
                          {
                            "condition": true,
                            "events": [
                              {
                                "type": "transition",
                                "do": "4b195169-5a11-48be-9b6c-d8e8f32c4057"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "List": {
                "displayName": "List",
                "machine": null,
                "composite": false,
                "entry": [],
                "exit": [],
                "transitions": {
                  "4399f153-3dcc-438b-b709-b9b0e4665518": {
                    "displayName": "list-start",
                    "from": { "machine": "0", "uid": "List" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 6 },
                        { "list": 1 },
                        { "button": 13 }
                      ]
                    },
                    "actions": {
                      "list-start": {
                        "displayName": "list-start",
                        "action": [
                          {
                            "condition": true,
                            "events": [
                              {
                                "type": "transition",
                                "do": "4399f153-3dcc-438b-b709-b9b0e4665518"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "extraData": {
        "context": "{\n  \"en-CA\": {\n    \"menu\": {},\n    \"title\": {\n      \"1\": {\n        \"text\": \"Big Title\"\n      },\n      \"2\": {\n        \"text\": \"Start\"\n      },\n      \"3\": {\n        \"text\": \"Media examples\"\n      },\n      \"4\": {\n        \"text\": \"Button examples\"\n      },\n      \"5\": {\n        \"text\": \"Form examples\"\n      },\n      \"6\": {\n        \"text\": \"List examples\"\n      }\n    },\n    \"header\": {\n      \"1\": {\n        \"text\": \"Cool Header\"\n      },\n      \"2\": {\n        \"text\": \"Enter form data\"\n      }\n    },\n    \"text\": {\n      \"1\": \"small text\",\n      \"2\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"\n    },\n    \"button\": {\n      \"1\": {\n        \"text\": \"Move to text state\",\n        \"actionID\": \"start-text\"\n      },\n      \"2\": {\n        \"text\": \"Return to start\",\n        \"actionID\": \"text-start\"\n      },\n      \"3\": {\n        \"text\": \"Move to media state\",\n        \"actionID\": \"start-image\"\n      },\n      \"4\": {\n        \"text\": \"Return to start\",\n        \"actionID\": \"image-start\"\n      },\n      \"5\": {\n        \"text\": \"Move to button state\",\n        \"actionID\": \"start-button\"\n      },\n      \"6\": {\n        \"text\": \"Return to start\",\n        \"actionID\": \"button-start\"\n      },\n      \"7\": {\n        \"text\": \"test button 1\",\n        \"actionID\": \"test-1\"\n      },\n      \"8\": {\n        \"text\": \"test button 2\",\n        \"actionID\": \"test-2\"\n      },\n      \"9\": {\n        \"text\": \"test button 3\",\n        \"actionID\": \"test-3\"\n      },\n      \"10\": {\n        \"text\": \"Move to form state\",\n        \"actionID\": \"start-form\"\n      },\n      \"11\": {\n        \"text\": \"Return to start\",\n        \"actionID\": \"form-start\"\n      },\n      \"12\": {\n        \"text\": \"Move to list state\",\n        \"actionID\": \"start-list\"\n      },\n      \"13\": {\n        \"text\": \"Return to start\",\n        \"actionID\": \"list-start\"\n      }\n    },\n    \"input\": {\n      \"1\": {\n        \"type\": \"form\",\n        \"name\": \"request_viewing\",\n        \"inputs\": [\n          {\n            \"type\": \"text\",\n            \"label\": \"text_input\",\n            \"label_text\": \"Text input\",\n            \"placeholder\": \"Enter text\",\n            \"optional\": false,\n            \"data\": {}\n          },\n          {\n            \"type\": \"text\",\n            \"label\": \"optional_text_input\",\n            \"label_text\": \"Optional text input\",\n            \"placeholder\": \"Enter text\",\n            \"optional\": true,\n            \"data\": {}\n          },\n          {\n            \"type\": \"date\",\n            \"label\": \"date_input\",\n            \"label_text\": \"Date input\",\n            \"placeholder\": \"\",\n            \"optional\": false,\n            \"data\": {}\n          },\n          {\n            \"type\": \"time\",\n            \"label\": \"time_input\",\n            \"label_text\": \"Time input\",\n            \"placeholder\": \"\",\n            \"optional\": false,\n            \"data\": {}\n          },\n          {\n            \"type\": \"select\",\n            \"label\": \"select_input\",\n            \"label_text\": \"Select input\",\n            \"placeholder\": \"\",\n            \"optional\": false,\n            \"data\": {\n              \"options\": [\n                \"first option\",\n                \"second option\",\n                \"third option\"\n              ]\n            }\n          },\n          {\n            \"type\": \"tel\",\n            \"label\": \"phone_input\",\n            \"label_text\": \"Phone number input\",\n            \"placeholder\": \"416-123-4567\",\n            \"optional\": false,\n            \"data\": {\n              \"pattern\": \"[0-9]{3}-[0-9]{3}-[0-9]{4}\"\n            }\n          },\n          {\n            \"type\": \"email\",\n            \"label\": \"email_input\",\n            \"label_text\": \"Email input\",\n            \"placeholder\": \"name@email.com\",\n            \"optional\": false,\n            \"data\": {}\n          },\n          {\n            \"type\": \"submit\",\n            \"label\": \"submit_form\",\n            \"label_text\": \"Submit form\",\n            \"placeholder\": null,\n            \"optional\": false,\n            \"data\": {\n              \"actions\": [\n                \"save_object\"\n              ],\n              \"save_object_data\": {\n                \"object_name\": \"form_data\"\n              }\n            }\n          }\n        ]\n      }\n    },\n    \"list\": {\n      \"1\": {\n        \"name\": \"form data\",\n        \"type\": \"object\",\n        \"object_name\": \"form_data\"\n      }\n    },\n    \"image\": {\n      \"1\": {\n        \"alt-text\": \"nature-image\",\n        \"src\": \"https://eskipaper.com/images/cool-nature-1.jpg\"\n      }\n    },\n    \"video\": {\n      \"1\": {\n        \"alt-text\": \"nature-video\",\n        \"src\": \"https://www.youtube.com/watch?v=wu3yk-AiSlE\"\n      }\n    }\n  }\n}",
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"Start\"},\"position\":{\"x\":300,\"y\":550},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Text\"},\"position\":{\"x\":497.7652352795509,\"y\":327.21263681933755},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Image\"},\"position\":{\"x\":656,\"y\":433},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Button\"},\"position\":{\"x\":718,\"y\":557},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Form\"},\"position\":{\"x\":666,\"y\":696},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"List\"},\"position\":{\"x\":481,\"y\":791},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}],\"edges\":[{\"data\":{\"source\":\"Start\",\"target\":\"Text\",\"id\":\"a718ffaf-6fd2-4556-8f1f-061dd7850f7d\",\"label\":\"start-text\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Text\",\"target\":\"Start\",\"id\":\"54ff3e7e-9b20-4cf2-be9b-2655e7954d83\",\"label\":\"text-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Image\",\"id\":\"f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0\",\"label\":\"start-image\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Image\",\"target\":\"Start\",\"id\":\"d980a2e8-86f6-471f-9165-bb039ad35c09\",\"label\":\"image-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Button\",\"id\":\"ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41\",\"label\":\"start-button\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Button\",\"target\":\"Start\",\"id\":\"dee6fd14-9c62-4423-b81b-32107422752f\",\"label\":\"button-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Form\",\"id\":\"245a6c06-3deb-4443-8e06-861c9da127c0\",\"label\":\"start-form\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Form\",\"target\":\"Start\",\"id\":\"4b195169-5a11-48be-9b6c-d8e8f32c4057\",\"label\":\"form-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"List\",\"id\":\"851f9fbb-61e7-4522-9aeb-2c85afee238f\",\"label\":\"start-list\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"List\",\"target\":\"Start\",\"id\":\"4399f153-3dcc-438b-b709-b9b0e4665518\",\"label\":\"list-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-04T16:26:48.275Z",
      "updatedAt": "2022-05-19T13:58:32.764Z",
      "__v": 0
    },
    {
      "_id": "7794",
      "data": {
        "machines": {
          "0": {
            "displayName": "/",
            "parent": "",
            "default": "Start",
            "concurrent": "false",
            "history": "false",
            "states": {
              "Start": {
                "displayName": "Start",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "23a14d23-c21d-494c-8960-8900b155e782": {
                    "displayName": "start-not_for_sale",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Not for sale" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "start-not_for_sale": {
                        "displayName": "start-not_for_sale",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "23a14d23-c21d-494c-8960-8900b155e782"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 1 },
                        { "header": 1 },
                        { "input": 1 }
                      ]
                    }
                  }
                }
              },
              "Not for sale": {
                "displayName": "Not for sale",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "c38535f8-c8ac-4553-94ea-80a62a2cf67b": {
                    "displayName": "not_for_sale-listed_property",
                    "from": { "machine": "0", "uid": "Not for sale" },
                    "to": { "machine": "0", "uid": "Listed Property" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "not_for_sale-listed_property": {
                        "displayName": "list",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "c38535f8-c8ac-4553-94ea-80a62a2cf67b"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 2 },
                        { "list": 1 },
                        { "button": 2 }
                      ]
                    }
                  }
                }
              },
              "Listed Property": {
                "displayName": "Listed Property",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "a4a8a44b-26eb-4817-a8d2-79d1ad083980": {
                    "displayName": "listed_property-not_for_sale",
                    "from": { "machine": "0", "uid": "Listed Property" },
                    "to": { "machine": "0", "uid": "Not for sale" }
                  },
                  "cc410d80-611a-4c59-b76c-a92a6aefbbdd": {
                    "displayName": "listed_property-bid_selected",
                    "from": { "machine": "0", "uid": "Listed Property" },
                    "to": { "machine": "0", "uid": "Bid Selected" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "listed_property-not_for_sale": {
                        "displayName": "listed_property-not_for_sale",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "a4a8a44b-26eb-4817-a8d2-79d1ad083980"
                              }
                            ]
                          }
                        ]
                      },
                      "listed_property-bid_selected": {
                        "displayName": "listed_property-bid_selected",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "cc410d80-611a-4c59-b76c-a92a6aefbbdd"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 3 },
                        { "list": 1 },
                        { "button": 3 },
                        { "input": 2 },
                        { "input": 3 },
                        { "list": 2 },
                        { "list": 3 },
                        { "button": 4 }
                      ]
                    }
                  }
                }
              },
              "Bid Selected": {
                "displayName": "Bid Selected",
                "machine": "",
                "composite": "false",
                "role": {
                  "default-role": {
                    "actions": {},
                    "display": {
                      "description": "",
                      "displayData": [{ "title": 4 }, { "list": 1 }]
                    }
                  }
                }
              }
            }
          }
        }
      },
      "extraData": {
        "context": "{\"en-CA\":{\"menu\":{},\"title\":{\"1\":{\"text\":\"Welcome\"},\"2\":{\"text\":\"Unlisted Property Details\"},\"3\":{\"text\":\"Listed Property Details\"},\"4\":{\"text\":\"Purchased Property Details\"}},\"header\":{\"1\":{\"text\":\"Enter new property details\"},\"2\":{\"text\":\"Request viewing\"},\"3\":{\"text\":\"Make bid\"}},\"text\":{\"1\":\"small text\",\"2\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},\"button\":{\"1\":{\"text\":\"Register property\",\"actionID\":\"start-not_for_sale\"},\"2\":{\"text\":\"List\",\"actionID\":\"not_for_sale-listed_property\"},\"3\":{\"text\":\"Take off market\",\"actionID\":\"listed_property-not_for_sale\"},\"4\":{\"text\":\"Select bid\",\"actionID\":\"listed_property-bid_selected\"},\"5\":{\"text\":\"Request viewing\",\"actionID\":\"request_viewing\"},\"6\":{\"text\":\"Make bid\",\"actionID\":\"make_bid\"}},\"input\":{\"1\":{\"type\":\"form\",\"name\":\"register_property\",\"inputs\":[{\"type\":\"text\",\"label\":\"property_address\",\"label_text\":\"Address\",\"placeholder\":\"123 Address Street\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"property_postal_code\",\"label_text\":\"Postal code\",\"placeholder\":\"A1B2C3\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"unit_number\",\"label_text\":\"Unit number\",\"placeholder\":\"1b\",\"optional\":true,\"data\":{}},{\"type\":\"text\",\"label\":\"bedrooms\",\"label_text\":\"Number of bedrooms\",\"placeholder\":\"4+2\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"bathrooms\",\"label_text\":\"Number of bathrooms\",\"placeholder\":\"3+1\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"property_sq_ft\",\"label_text\":\"Square footage\",\"placeholder\":\"1000\",\"optional\":false,\"data\":{}},{\"type\":\"select\",\"label\":\"property_type\",\"label_text\":\"Property type\",\"placeholder\":\"\",\"optional\":false,\"data\":{\"options\":[\"single-family\",\"multi-family\",\"townhouse\",\"modular home\",\"bungalow\",\"ranch home\",\"condo\",\"apartment\"]}},{\"type\":\"text\",\"label\":\"asking_price\",\"label_text\":\"Asking Price ($)\",\"placeholder\":\"500000\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"owner_name\",\"label_text\":\"Owner name\",\"placeholder\":\"John Smith\",\"optional\":false,\"data\":{}},{\"type\":\"tel\",\"label\":\"owner_phone\",\"label_text\":\"Owner phone number\",\"placeholder\":\"416-123-4567\",\"optional\":false,\"data\":{\"pattern\":\"[0-9]{3}-[0-9]{3}-[0-9]{4}\"}},{\"type\":\"email\",\"label\":\"owner_email\",\"label_text\":\"Owner email\",\"placeholder\":\"owner@gmail.com\",\"optional\":false,\"data\":{}},{\"type\":\"submit\",\"label\":\"submit_form\",\"label_text\":\"Register Property\",\"placeholder\":null,\"optional\":false,\"data\":{\"actions\":[\"save_object\",\"start-not_for_sale\"],\"save_object_data\":{\"object_name\":\"property\"}}}]},\"2\":{\"type\":\"form\",\"name\":\"request_viewing\",\"inputs\":[{\"type\":\"text\",\"label\":\"buyer_name\",\"label_text\":\"Name\",\"placeholder\":\"Alice Bob\",\"optional\":false,\"data\":{}},{\"type\":\"date\",\"label\":\"viewing_date\",\"label_text\":\"Viewing date\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"submit\",\"label\":\"submit_form\",\"label_text\":\"Submit viewing request\",\"placeholder\":null,\"optional\":false,\"data\":{\"actions\":[\"save_object\"],\"save_object_data\":{\"object_name\":\"viewing\"}}}]},\"3\":{\"type\":\"form\",\"name\":\"make_bid\",\"inputs\":[{\"type\":\"text\",\"label\":\"buyer_name\",\"label_text\":\"Name\",\"placeholder\":\"Alice Bob\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"bid_amount\",\"label_text\":\"Bid Amount ($)\",\"placeholder\":\"100000\",\"optional\":false,\"data\":{}},{\"type\":\"submit\",\"label\":\"submit_form\",\"label_text\":\"Submit bid\",\"placeholder\":null,\"optional\":false,\"data\":{\"actions\":[\"save_object\"],\"save_object_data\":{\"object_name\":\"bid\"}}}]}},\"list\":{\"1\":{\"name\":\"property\",\"type\":\"object\",\"object_name\":\"property\"},\"2\":{\"name\":\"viewing_list\",\"type\":\"object\",\"object_name\":\"viewing\"},\"3\":{\"name\":\"bid_list\",\"type\":\"object\",\"object_name\":\"bid\"}},\"image\":{\"1\":{\"alt-text\":\"nature-image\",\"src\":\"https://eskipaper.com/images/cool-nature-1.jpg\"}},\"video\":{\"1\":{\"alt-text\":\"nature-video\",\"src\":\"https://youtu.be/6v2L2UGZJAM\"}}}}",
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"Start\"},\"position\":{\"x\":91,\"y\":288},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Not for sale\"},\"position\":{\"x\":501,\"y\":291.6666666666667},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Listed Property\"},\"position\":{\"x\":951.6666666666667,\"y\":293},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Bid Selected\"},\"position\":{\"x\":962.3333333333333,\"y\":605.3333333333334},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}],\"edges\":[{\"data\":{\"source\":\"Start\",\"target\":\"Not for sale\",\"id\":\"23a14d23-c21d-494c-8960-8900b155e782\",\"label\":\"start-not_for_sale\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Not for sale\",\"target\":\"Listed Property\",\"id\":\"c38535f8-c8ac-4553-94ea-80a62a2cf67b\",\"label\":\"not_for_sale-listed_property\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Listed Property\",\"target\":\"Not for sale\",\"id\":\"a4a8a44b-26eb-4817-a8d2-79d1ad083980\",\"label\":\"listed_property-not_for_sale\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Listed Property\",\"target\":\"Bid Selected\",\"id\":\"cc410d80-611a-4c59-b76c-a92a6aefbbdd\",\"label\":\"listed_property-bid_selected\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-17T16:59:14.985Z",
      "updatedAt": "2022-05-17T19:03:51.828Z",
      "__v": 0
    },
    {
      "_id": "1081",
      "data": {
        "machines": [
          {
            "displayName": "/",
            "parent": "",
            "default": "Start",
            "concurrent": "false",
            "history": "false",
            "states": {
              "Start": {
                "displayName": "Start",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "a718ffaf-6fd2-4556-8f1f-061dd7850f7d": {
                    "displayName": "start-text",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Text" }
                  },
                  "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0": {
                    "displayName": "start-image",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Image" }
                  },
                  "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41": {
                    "displayName": "start-button",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Button" }
                  },
                  "245a6c06-3deb-4443-8e06-861c9da127c0": {
                    "displayName": "start-form",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Form" }
                  },
                  "851f9fbb-61e7-4522-9aeb-2c85afee238f": {
                    "displayName": "start-list",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "List" }
                  },
                  "09989ada-fb33-4776-ab89-0cca2aeb7c7e": {
                    "displayName": "start-menu",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Menu" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "start-text": {
                        "displayName": "start-text",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d"
                              }
                            ]
                          }
                        ]
                      },
                      "start-image": {
                        "displayName": "start-image",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-button": {
                        "displayName": "start-button",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41"
                              }
                            ]
                          }
                        ]
                      },
                      "start-form": {
                        "displayName": "start-form",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "245a6c06-3deb-4443-8e06-861c9da127c0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-list": {
                        "displayName": "start-list",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "851f9fbb-61e7-4522-9aeb-2c85afee238f"
                              }
                            ]
                          }
                        ]
                      },
                      "start-menu": {
                        "displayName": "start-menu",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "09989ada-fb33-4776-ab89-0cca2aeb7c7e"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Text": {
                "displayName": "Text",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "54ff3e7e-9b20-4cf2-be9b-2655e7954d83": {
                    "displayName": "text-start",
                    "from": { "machine": "0", "uid": "Text" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "text-start": {
                        "displayName": "text-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Image": {
                "displayName": "Image",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "d980a2e8-86f6-471f-9165-bb039ad35c09": {
                    "displayName": "image-start",
                    "from": { "machine": "0", "uid": "Image" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "image-start": {
                        "displayName": "image-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "d980a2e8-86f6-471f-9165-bb039ad35c09"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Button": {
                "displayName": "Button",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "dee6fd14-9c62-4423-b81b-32107422752f": {
                    "displayName": "button-start",
                    "from": { "machine": "0", "uid": "Button" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "button-start": {
                        "displayName": "button-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "dee6fd14-9c62-4423-b81b-32107422752f"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Form": {
                "displayName": "Form",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "4b195169-5a11-48be-9b6c-d8e8f32c4057": {
                    "displayName": "form-start",
                    "from": { "machine": "0", "uid": "Form" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "form-start": {
                        "displayName": "form-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "4b195169-5a11-48be-9b6c-d8e8f32c4057"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "List": {
                "displayName": "List",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "4399f153-3dcc-438b-b709-b9b0e4665518": {
                    "displayName": "list-start",
                    "from": { "machine": "0", "uid": "List" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "list-start": {
                        "displayName": "list-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "4399f153-3dcc-438b-b709-b9b0e4665518"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Menu": {
                "displayName": "Menu",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "f0eec259-3719-4c08-8f50-26cc9d61a047": {
                    "displayName": "menu-start",
                    "from": { "machine": "0", "uid": "Menu" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "menu-start": {
                        "displayName": "menu-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "f0eec259-3719-4c08-8f50-26cc9d61a047"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "extraData": {
        "context": "{\"en-CA\":{\"menu\":{\"1\":{\"type\":\"menu\",\"name\":\"regular_menu\",\"menu-items\":[{\"type\":\"link\",\"label\":\"first_link\",\"label_text\":\"First link\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"second_link\",\"label_text\":\"Second link\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"third_link\",\"label_text\":\"Third link\",\"icon\":null,\"data\":{}}]},\"2\":{\"type\":\"menu\",\"name\":\"divided_menu_with_icons\",\"menu-items\":[{\"type\":\"divider\",\"label\":\"first_divider\",\"label_text\":\"First section\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"first\",\"label_text\":\"One\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"second\",\"label_text\":\"Two\",\"icon\":null,\"data\":{}},{\"type\":\"divider\",\"label\":\"second_divider\",\"label_text\":\"Second section\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"third\",\"label_text\":\"1\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"fourth\",\"label_text\":\"2\",\"icon\":null,\"data\":{}}]}},\"title\":{\"1\":{\"text\":\"Big Title\"},\"2\":{\"text\":\"Start\"},\"3\":{\"text\":\"Media examples\"},\"4\":{\"text\":\"Button examples\"},\"5\":{\"text\":\"Form examples\"},\"6\":{\"text\":\"List examples\"},\"7\":{\"text\":\"Menu examples\"}},\"header\":{\"1\":{\"text\":\"Cool Header\"},\"2\":{\"text\":\"Enter form data\"},\"3\":{\"text\":\"First menu\"},\"4\":{\"text\":\"Second menu\"}},\"text\":{\"1\":\"small text\",\"2\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"},\"button\":{\"1\":{\"text\":\"Move to text state\",\"actionID\":\"start-text\"},\"2\":{\"text\":\"Return to start\",\"actionID\":\"text-start\"},\"3\":{\"text\":\"Move to media state\",\"actionID\":\"start-image\"},\"4\":{\"text\":\"Return to start\",\"actionID\":\"image-start\"},\"5\":{\"text\":\"Move to button state\",\"actionID\":\"start-button\"},\"6\":{\"text\":\"Return to start\",\"actionID\":\"button-start\"},\"7\":{\"text\":\"test button 1\",\"actionID\":\"test-1\"},\"8\":{\"text\":\"test button 2\",\"actionID\":\"test-2\"},\"9\":{\"text\":\"test button 3\",\"actionID\":\"test-3\"},\"10\":{\"text\":\"Move to form state\",\"actionID\":\"start-form\"},\"11\":{\"text\":\"Return to start\",\"actionID\":\"form-start\"},\"12\":{\"text\":\"Move to list state\",\"actionID\":\"start-list\"},\"13\":{\"text\":\"Return to start\",\"actionID\":\"list-start\"},\"14\":{\"text\":\"Move to menu state\",\"actionID\":\"start-menu\"},\"15\":{\"text\":\"Return to start\",\"actionID\":\"menu-start\"}},\"input\":{\"1\":{\"type\":\"form\",\"name\":\"request_viewing\",\"inputs\":[{\"type\":\"text\",\"label\":\"text_input\",\"label_text\":\"Text input\",\"placeholder\":\"Enter text\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"optional_text_input\",\"label_text\":\"Optional text input\",\"placeholder\":\"Enter text\",\"optional\":true,\"data\":{}},{\"type\":\"date\",\"label\":\"date_input\",\"label_text\":\"Date input\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"time\",\"label\":\"time_input\",\"label_text\":\"Time input\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"select\",\"label\":\"select_input\",\"label_text\":\"Select input\",\"placeholder\":\"\",\"optional\":false,\"data\":{\"options\":[\"first option\",\"second option\",\"third option\"]}},{\"type\":\"tel\",\"label\":\"phone_input\",\"label_text\":\"Phone number input\",\"placeholder\":\"416-123-4567\",\"optional\":false,\"data\":{\"pattern\":\"[0-9]{3}-[0-9]{3}-[0-9]{4}\"}},{\"type\":\"email\",\"label\":\"email_input\",\"label_text\":\"Email input\",\"placeholder\":\"name@email.com\",\"optional\":false,\"data\":{}},{\"type\":\"submit\",\"label\":\"submit_form\",\"label_text\":\"Submit form\",\"placeholder\":null,\"optional\":false,\"data\":{\"actions\":[\"save_object\"],\"save_object_data\":{\"object_name\":\"form_data\"}}}]}},\"list\":{\"1\":{\"name\":\"form data\",\"type\":\"object\",\"object_name\":\"form_data\"}},\"image\":{\"1\":{\"alt-text\":\"nature-image\",\"src\":\"https://eskipaper.com/images/cool-nature-1.jpg\"}},\"video\":{\"1\":{\"alt-text\":\"nature-video\",\"src\":\"https://youtu.be/6v2L2UGZJAM\"}}}}",
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"Start\"},\"position\":{\"x\":202,\"y\":500},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Text\"},\"position\":{\"x\":437.7652352795509,\"y\":283.21263681933755},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Image\"},\"position\":{\"x\":612,\"y\":385},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Button\"},\"position\":{\"x\":700,\"y\":482},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Form\"},\"position\":{\"x\":693,\"y\":593},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"List\"},\"position\":{\"x\":670,\"y\":700},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Menu\"},\"position\":{\"x\":472,\"y\":774},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}],\"edges\":[{\"data\":{\"source\":\"Start\",\"target\":\"Text\",\"id\":\"a718ffaf-6fd2-4556-8f1f-061dd7850f7d\",\"label\":\"start-text\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Text\",\"target\":\"Start\",\"id\":\"54ff3e7e-9b20-4cf2-be9b-2655e7954d83\",\"label\":\"text-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Image\",\"id\":\"f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0\",\"label\":\"start-image\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Image\",\"target\":\"Start\",\"id\":\"d980a2e8-86f6-471f-9165-bb039ad35c09\",\"label\":\"image-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Button\",\"id\":\"ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41\",\"label\":\"start-button\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Button\",\"target\":\"Start\",\"id\":\"dee6fd14-9c62-4423-b81b-32107422752f\",\"label\":\"button-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Form\",\"id\":\"245a6c06-3deb-4443-8e06-861c9da127c0\",\"label\":\"start-form\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Form\",\"target\":\"Start\",\"id\":\"4b195169-5a11-48be-9b6c-d8e8f32c4057\",\"label\":\"form-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"List\",\"id\":\"851f9fbb-61e7-4522-9aeb-2c85afee238f\",\"label\":\"start-list\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"List\",\"target\":\"Start\",\"id\":\"4399f153-3dcc-438b-b709-b9b0e4665518\",\"label\":\"list-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Menu\",\"id\":\"09989ada-fb33-4776-ab89-0cca2aeb7c7e\",\"label\":\"start-menu\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Menu\",\"target\":\"Start\",\"id\":\"f0eec259-3719-4c08-8f50-26cc9d61a047\",\"label\":\"menu-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-20T17:54:57.839Z",
      "updatedAt": "2022-05-20T17:55:33.568Z",
      "__v": 0
    },
    {
      "_id": "3850",
      "data": {
        "machines": {
          "0": {
            "displayName": "/",
            "parent": "",
            "default": "Start",
            "concurrent": "false",
            "history": "false",
            "states": {
              "Start": {
                "displayName": "Start",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "a718ffaf-6fd2-4556-8f1f-061dd7850f7d": {
                    "displayName": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Text" }
                  },
                  "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0": {
                    "displayName": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Image" }
                  },
                  "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41": {
                    "displayName": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Button" }
                  },
                  "245a6c06-3deb-4443-8e06-861c9da127c0": {
                    "displayName": "start-form",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Form" }
                  },
                  "851f9fbb-61e7-4522-9aeb-2c85afee238f": {
                    "displayName": "start-list",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "List" }
                  },
                  "70a85f74-5914-415c-af65-991e6c024a7e": {
                    "displayName": "start-menu",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Menu" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "start-text": {
                        "displayName": "start-text",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d"
                              }
                            ]
                          }
                        ]
                      },
                      "start-image": {
                        "displayName": "start-image",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-button": {
                        "displayName": "start-button",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41"
                              }
                            ]
                          }
                        ]
                      },
                      "start-form": {
                        "displayName": "start-form",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "245a6c06-3deb-4443-8e06-861c9da127c0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-list": {
                        "displayName": "start-list",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "851f9fbb-61e7-4522-9aeb-2c85afee238f"
                              }
                            ]
                          }
                        ]
                      },
                      "start-menu": {
                        "displayName": "start-menu",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "70a85f74-5914-415c-af65-991e6c024a7e"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "2" },
                        { "button": "1" },
                        { "button": "3" },
                        { "button": "5" },
                        { "button": "10" },
                        { "button": "12" },
                        { "button": 14 }
                      ]
                    }
                  }
                }
              },
              "Text": {
                "displayName": "Text",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "54ff3e7e-9b20-4cf2-be9b-2655e7954d83": {
                    "displayName": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83",
                    "from": { "machine": "0", "uid": "Text" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "text-start": {
                        "displayName": "text-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "1" },
                        { "header": "1" },
                        { "text": "1" },
                        { "text": "2" },
                        { "button": "2" }
                      ]
                    }
                  }
                }
              },
              "Image": {
                "displayName": "Image",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "d980a2e8-86f6-471f-9165-bb039ad35c09": {
                    "displayName": "d980a2e8-86f6-471f-9165-bb039ad35c09",
                    "from": { "machine": "0", "uid": "Image" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "image-start": {
                        "displayName": "image-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "d980a2e8-86f6-471f-9165-bb039ad35c09"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "3" },
                        { "image": "1" },
                        { "video": "1" },
                        { "button": "4" }
                      ]
                    }
                  }
                }
              },
              "Button": {
                "displayName": "Button",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "dee6fd14-9c62-4423-b81b-32107422752f": {
                    "displayName": "dee6fd14-9c62-4423-b81b-32107422752f",
                    "from": { "machine": "0", "uid": "Button" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "button-start": {
                        "displayName": "button-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "dee6fd14-9c62-4423-b81b-32107422752f"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "4" },
                        { "button": "7" },
                        { "button": "8" },
                        { "button": "9" },
                        { "button": "6" }
                      ]
                    }
                  }
                }
              },
              "Form": {
                "displayName": "Form",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "4b195169-5a11-48be-9b6c-d8e8f32c4057": {
                    "displayName": "form-start",
                    "from": { "machine": "0", "uid": "Form" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "5" },
                        { "input": "1" },
                        { "button": "11" }
                      ]
                    },
                    "actions": {
                      "form-start": {
                        "displayName": "form-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "4b195169-5a11-48be-9b6c-d8e8f32c4057"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "List": {
                "displayName": "List",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "4399f153-3dcc-438b-b709-b9b0e4665518": {
                    "displayName": "list-start",
                    "from": { "machine": "0", "uid": "List" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": "6" },
                        { "list": "1" },
                        { "button": "13" }
                      ]
                    },
                    "actions": {
                      "list-start": {
                        "displayName": "list-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "4399f153-3dcc-438b-b709-b9b0e4665518"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Menu": {
                "displayName": "Menu",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "0675fc37-010c-4ab7-880e-7733345df6d9": {
                    "displayName": "menu-start",
                    "from": { "machine": "0", "uid": "Menu" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "menu-start": {
                        "displayName": "menu-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "0675fc37-010c-4ab7-880e-7733345df6d9"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 7 },
                        { "header": 3 },
                        { "menu": 1 },
                        { "header": 4 },
                        { "menu": 2 },
                        { "button": 15 }
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      },
      "extraData": {
        "context": "{\"en-CA\":{\"menu\":{\"1\":{\"type\":\"menu\",\"name\":\"Regular menu\",\"menu_items\":[{\"type\":\"link\",\"label\":\"first_link\",\"label_text\":\"First link\",\"icon\":\"home\",\"data\":{\"link_url\":\"https://www.google.ca/\"}},{\"type\":\"link\",\"label\":\"second_link\",\"label_text\":\"Second link\",\"icon\":\"endorsed\",\"data\":{\"link_url\":\"https://ca.yahoo.com/\"}},{\"type\":\"link\",\"label\":\"third_link\",\"label_text\":\"Third link\",\"icon\":\"git-branch\",\"data\":{\"link_url\":\"https://github.com/\"}}]},\"2\":{\"type\":\"menu\",\"name\":\"Menu with dividers and submenus\",\"menu_items\":[{\"type\":\"divider\",\"label\":\"first_divider\",\"label_text\":\"First section\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"first\",\"label_text\":\"One\",\"icon\":\"help\",\"data\":{}},{\"type\":\"link\",\"label\":\"second\",\"label_text\":\"Two\",\"icon\":\"clean\",\"data\":{}},{\"type\":\"divider\",\"label\":\"second_divider\",\"label_text\":\"Second section\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"third\",\"label_text\":\"1\",\"icon\":\"comment\",\"data\":{}},{\"type\":\"submenu\",\"label\":\"submenu\",\"label_text\":\"Submenu\",\"icon\":\"menu\",\"data\":{\"menu_items\":[{\"type\":\"link\",\"label\":\"cool\",\"label_text\":\"Cool\",\"icon\":\"draw\",\"data\":{}},{\"type\":\"submenu\",\"label\":\"submenu2\",\"label_text\":\"anotha one\",\"icon\":\"menu-open\",\"data\":{\"menu_items\":[{\"type\":\"link\",\"label\":\"ok\",\"label_text\":\"ok\",\"icon\":\"highlight\",\"data\":{}},{\"type\":\"link\",\"label\":\"nice\",\"label_text\":\"nice\",\"icon\":\"history\",\"data\":{}}]}}]}},{\"type\":\"submenu\",\"label\":\"submenu_2\",\"label_text\":\"Extra submenu\",\"icon\":\"menu\",\"data\":{\"menu_items\":[{\"type\":\"link\",\"label\":\"cooler\",\"label_text\":\"Cooler\",\"icon\":\"draw\",\"data\":{}}]}}]}},\"text\":{\"1\":{\"text\":\"Big Title\",\"variant\":\"subtitle1\"},\"2\":{\"text\":\"Start\",\"variant\":\"subtitle2\"},\"3\":{\"text\":\"Media examples\",\"variant\":\"subtitle2\"},\"4\":{\"text\":\"Button examples\",\"variant\":\"subtitle2\"},\"5\":{\"text\":\"Form examples\",\"variant\":\"subtitle2\"},\"6\":{\"text\":\"List examples\",\"variant\":\"subtitle2\"},\"7\":{\"text\":\"Menu examples\",\"variant\":\"subtitle2\"},\"8\":{\"text\":\"Cool Header\",\"variant\":\"h3\"},\"9\":{\"text\":\"Enter form data\",\"variant\":\"h3\"},\"10\":{\"text\":\"First menu\",\"variant\":\"h3\"},\"11\":{\"text\":\"Second menu\",\"variant\":\"h3\"},\"12\":{\"text\":\"small text 1\",\"variant\":\"body2\"},\"13\":{\"text\":\"sm txt\",\"variant\":\"body2\"},\"14\":{\"text\":\"Little Bigger Text\",\"variant\":\"body1\"},\"15\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"variant\":\"body1\"},\"16\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"variant\":\"body2\"}},\"button\":{\"1\":{\"text\":\"Move to text state\",\"actionID\":\"start-text\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"small\"},\"2\":{\"text\":\"Return to start\",\"actionID\":\"text-start\",\"variant\":\"contained\",\"color\":\"primary\",\"size\":\"medium\"},\"3\":{\"text\":\"Move to media state\",\"actionID\":\"start-image\",\"variant\":\"outlined\",\"color\":\"secondary\",\"size\":\"medium\"},\"4\":{\"text\":\"Return to start\",\"actionID\":\"image-start\",\"variant\":\"outlined\",\"color\":\"success\",\"size\":\"medium\"},\"5\":{\"text\":\"Move to button state\",\"actionID\":\"start-button\",\"variant\":\"outlined\",\"color\":\"error\",\"size\":\"medium\"},\"6\":{\"text\":\"Return to start\",\"actionID\":\"button-start\",\"variant\":\"outlined\",\"color\":\"warning\",\"size\":\"medium\"},\"7\":{\"text\":\"test button 1\",\"actionID\":\"test-1\",\"variant\":\"outlined\",\"color\":\"info\",\"size\":\"medium\"},\"8\":{\"text\":\"test button 2\",\"actionID\":\"test-2\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"9\":{\"text\":\"test button 3\",\"actionID\":\"test-3\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"10\":{\"text\":\"Move to form state\",\"actionID\":\"start-form\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"11\":{\"text\":\"Return to start\",\"actionID\":\"form-start\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"12\":{\"text\":\"Move to list state\",\"actionID\":\"start-list\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"13\":{\"text\":\"Return to start\",\"actionID\":\"list-start\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"14\":{\"text\":\"Move to menu state\",\"actionID\":\"start-menu\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"15\":{\"text\":\"Return to start\",\"actionID\":\"menu-start\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"large\"}},\"input\":{\"1\":{\"type\":\"form\",\"name\":\"request_viewing\",\"inputs\":[{\"type\":\"text\",\"label\":\"text_input\",\"label_text\":\"Text input\",\"placeholder\":\"Enter text\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"optional_text_input\",\"label_text\":\"Optional text input\",\"placeholder\":\"Enter text\",\"optional\":true,\"data\":{}},{\"type\":\"date\",\"label\":\"date_input\",\"label_text\":\"Date input\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"time\",\"label\":\"time_input\",\"label_text\":\"Time input\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"select\",\"label\":\"select_input\",\"label_text\":\"Select input\",\"placeholder\":\"\",\"optional\":false,\"data\":{\"options\":[\"first option\",\"second option\",\"third option\"]}},{\"type\":\"tel\",\"label\":\"phone_input\",\"label_text\":\"Phone number input\",\"placeholder\":\"416-123-4567\",\"optional\":false,\"data\":{\"pattern\":\"[0-9]{3}-[0-9]{3}-[0-9]{4}\"}},{\"type\":\"email\",\"label\":\"email_input\",\"label_text\":\"Email input\",\"placeholder\":\"name@email.com\",\"optional\":false,\"data\":{}},{\"type\":\"submit\",\"label\":\"submit_form\",\"label_text\":\"Submit form\",\"placeholder\":null,\"optional\":false,\"data\":{\"actions\":[\"save_object\"],\"save_object_data\":{\"object_name\":\"form_data\"}}}]}},\"list\":{\"1\":{\"name\":\"form data\",\"type\":\"object\",\"object_name\":\"form_data\"}},\"image\":{\"1\":{\"alt_text\":\"nature-image\",\"src\":\"https://eskipaper.com/images/cool-nature-1.jpg\"}},\"video\":{\"1\":{\"alt_text\":\"nature-video\",\"src\":\"https://youtu.be/6v2L2UGZJAM\"}}}}",
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"Start\",\"label\":\"Start\"},\"position\":{\"x\":300,\"y\":569},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Text\",\"label\":\"Text\"},\"position\":{\"x\":449.7652352795509,\"y\":310.21263681933755},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Image\",\"label\":\"Image\"},\"position\":{\"x\":640,\"y\":391},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Button\",\"label\":\"Button\"},\"position\":{\"x\":732,\"y\":489},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Form\",\"label\":\"Form\"},\"position\":{\"x\":750,\"y\":602},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"List\",\"label\":\"List\"},\"position\":{\"x\":728,\"y\":713},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Menu\",\"label\":\"Menu\"},\"position\":{\"x\":527,\"y\":781},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}],\"edges\":[{\"data\":{\"source\":\"Start\",\"target\":\"Text\",\"id\":\"a718ffaf-6fd2-4556-8f1f-061dd7850f7d\",\"label\":\"start-text\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Text\",\"target\":\"Start\",\"id\":\"54ff3e7e-9b20-4cf2-be9b-2655e7954d83\",\"label\":\"text-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Image\",\"id\":\"f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0\",\"label\":\"start-image\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Image\",\"target\":\"Start\",\"id\":\"d980a2e8-86f6-471f-9165-bb039ad35c09\",\"label\":\"image-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Button\",\"id\":\"ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41\",\"label\":\"start-button\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Button\",\"target\":\"Start\",\"id\":\"dee6fd14-9c62-4423-b81b-32107422752f\",\"label\":\"button-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Form\",\"id\":\"245a6c06-3deb-4443-8e06-861c9da127c0\",\"label\":\"start-form\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Form\",\"target\":\"Start\",\"id\":\"4b195169-5a11-48be-9b6c-d8e8f32c4057\",\"label\":\"form-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"List\",\"id\":\"851f9fbb-61e7-4522-9aeb-2c85afee238f\",\"label\":\"start-list\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"List\",\"target\":\"Start\",\"id\":\"4399f153-3dcc-438b-b709-b9b0e4665518\",\"label\":\"list-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Menu\",\"id\":\"70a85f74-5914-415c-af65-991e6c024a7e\",\"label\":\"start-menu\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Menu\",\"target\":\"Start\",\"id\":\"0675fc37-010c-4ab7-880e-7733345df6d9\",\"label\":\"menu-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-24T13:32:21.400Z",
      "updatedAt": "2022-05-24T14:14:20.808Z",
      "__v": 0
    },
    {
      "_id": "7806",
      "data": {
        "machines": {
          "0": {
            "displayName": "/",
            "parent": null,
            "default": "First",
            "concurrent": false,
            "history": false,
            "transitions": {},
            "actions": {},
            "states": {
              "First": {
                "displayName": "First",
                "machine": null,
                "composite": false,
                "entry": [],
                "exit": [],
                "transitions": {},
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "title": 1 },
                        { "header": 1 },
                        { "text": 1 },
                        { "button": 1 },
                        { "input": 1 },
                        { "menu": 1 },
                        { "image": 1 },
                        { "video": 1 }
                      ]
                    },
                    "actions": {}
                  }
                }
              }
            }
          }
        }
      },
      "extraData": {
        "context": "{\"en-CA\":{\"menu\":{\"1\":{\"type\":\"menu\",\"name\":\"Cool Menu\",\"menu_items\":[{\"type\":\"link\",\"label\":\"first\",\"label_text\":\"First\",\"icon\":\"home\",\"data\":{}},{\"type\":\"link\",\"label\":\"second\",\"label_text\":\"Second\",\"icon\":\"git-branch\",\"data\":{}},{\"type\":\"link\",\"label\":\"empty\",\"label_text\":\"Empty\",\"icon\":\"null\",\"data\":{}}]}},\"title\":{\"1\":{\"text\":\"Title\"}},\"header\":{\"1\":{\"text\":\"Headersssss\"}},\"text\":{\"1\":\"texting\"},\"button\":{\"1\":{\"text\":\"cool button\",\"actionID\":\"cool\"}},\"input\":{\"1\":{\"type\":\"form\",\"name\":\"Input form\",\"inputs\":[{\"type\":\"text\",\"label\":\"text_input\",\"label_text\":\"text_input\",\"placeholder\":\"Text in\",\"optional\":\"false\",\"data\":{}},{\"type\":\"text\",\"label\":\"not_needed\",\"label_text\":\"not required\",\"placeholder\":\"enter something\",\"optional\":\"true\",\"data\":{}},{\"type\":\"date\",\"label\":\"dating\",\"label_text\":\"Dating\",\"placeholder\":\"\",\"optional\":\"false\",\"data\":{}}]}},\"list\":{},\"image\":{\"1\":{\"alt-text\":\"house\",\"src\":\"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500\"}},\"video\":{\"1\":{\"alt-text\":\"funny\",\"src\":\"https://www.youtube.com/watch?v=seDX-MwoMJc\"}}}}",
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"First\"},\"position\":{\"x\":300,\"y\":550},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-26T17:42:23.905Z",
      "updatedAt": "2022-05-26T17:44:45.248Z",
      "__v": 0
    },
    {
      "_id": "9999",
      "data": {
        "machines": {
          "0": {
            "displayName": "/",
            "parent": "",
            "default": "Start",
            "concurrent": "false",
            "history": "false",
            "states": {
              "Start": {
                "displayName": "Start",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "a718ffaf-6fd2-4556-8f1f-061dd7850f7d": {
                    "displayName": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Text" }
                  },
                  "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0": {
                    "displayName": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Image" }
                  },
                  "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41": {
                    "displayName": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Button" }
                  },
                  "245a6c06-3deb-4443-8e06-861c9da127c0": {
                    "displayName": "start-form",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Form" }
                  },
                  "851f9fbb-61e7-4522-9aeb-2c85afee238f": {
                    "displayName": "start-list",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "List" }
                  },
                  "70a85f74-5914-415c-af65-991e6c024a7e": {
                    "displayName": "start-menu",
                    "from": { "machine": "0", "uid": "Start" },
                    "to": { "machine": "0", "uid": "Menu" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "start-text": {
                        "displayName": "start-text",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "a718ffaf-6fd2-4556-8f1f-061dd7850f7d"
                              }
                            ]
                          }
                        ]
                      },
                      "start-image": {
                        "displayName": "start-image",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-button": {
                        "displayName": "start-button",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41"
                              }
                            ]
                          }
                        ]
                      },
                      "start-form": {
                        "displayName": "start-form",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "245a6c06-3deb-4443-8e06-861c9da127c0"
                              }
                            ]
                          }
                        ]
                      },
                      "start-list": {
                        "displayName": "start-list",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "851f9fbb-61e7-4522-9aeb-2c85afee238f"
                              }
                            ]
                          }
                        ]
                      },
                      "start-menu": {
                        "displayName": "start-menu",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "70a85f74-5914-415c-af65-991e6c024a7e"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": "2" },
                        { "button": "1" },
                        { "button": "3" },
                        { "button": "5" },
                        { "button": "10" },
                        { "button": "12" },
                        { "button": 14 }
                      ]
                    }
                  }
                }
              },
              "Text": {
                "displayName": "Text",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "54ff3e7e-9b20-4cf2-be9b-2655e7954d83": {
                    "displayName": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83",
                    "from": { "machine": "0", "uid": "Text" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "text-start": {
                        "displayName": "text-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "54ff3e7e-9b20-4cf2-be9b-2655e7954d83"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": "1" },
                        { "text": "1" },
                        { "text": "1" },
                        { "text": "2" },
                        { "button": "2" }
                      ]
                    }
                  }
                }
              },
              "Image": {
                "displayName": "Image",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "d980a2e8-86f6-471f-9165-bb039ad35c09": {
                    "displayName": "d980a2e8-86f6-471f-9165-bb039ad35c09",
                    "from": { "machine": "0", "uid": "Image" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "image-start": {
                        "displayName": "image-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "d980a2e8-86f6-471f-9165-bb039ad35c09"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": "3" },
                        { "image": "1" },
                        { "video": "1" },
                        { "button": "4" }
                      ]
                    }
                  }
                }
              },
              "Button": {
                "displayName": "Button",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "dee6fd14-9c62-4423-b81b-32107422752f": {
                    "displayName": "dee6fd14-9c62-4423-b81b-32107422752f",
                    "from": { "machine": "0", "uid": "Button" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "button-start": {
                        "displayName": "button-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "dee6fd14-9c62-4423-b81b-32107422752f"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": "4" },
                        { "button": "7" },
                        { "button": "8" },
                        { "button": "9" },
                        { "button": "6" }
                      ]
                    }
                  }
                }
              },
              "Form": {
                "displayName": "Form",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "4b195169-5a11-48be-9b6c-d8e8f32c4057": {
                    "displayName": "form-start",
                    "from": { "machine": "0", "uid": "Form" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": "5" },
                        { "input": "1" },
                        { "button": "11" }
                      ]
                    },
                    "actions": {
                      "form-start": {
                        "displayName": "form-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "4b195169-5a11-48be-9b6c-d8e8f32c4057"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "List": {
                "displayName": "List",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "4399f153-3dcc-438b-b709-b9b0e4665518": {
                    "displayName": "list-start",
                    "from": { "machine": "0", "uid": "List" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": "6" },
                        { "list": "1" },
                        { "button": "13" }
                      ]
                    },
                    "actions": {
                      "list-start": {
                        "displayName": "list-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "4399f153-3dcc-438b-b709-b9b0e4665518"
                              }
                            ]
                          }
                        ]
                      }
                    }
                  }
                }
              },
              "Menu": {
                "displayName": "Menu",
                "machine": "",
                "composite": "false",
                "transitions": {
                  "0675fc37-010c-4ab7-880e-7733345df6d9": {
                    "displayName": "menu-start",
                    "from": { "machine": "0", "uid": "Menu" },
                    "to": { "machine": "0", "uid": "Start" }
                  }
                },
                "role": {
                  "default-role": {
                    "actions": {
                      "menu-start": {
                        "displayName": "menu-start",
                        "action": [
                          {
                            "condition": "true",
                            "events": [
                              {
                                "type": "transition",
                                "do": "0675fc37-010c-4ab7-880e-7733345df6d9"
                              }
                            ]
                          }
                        ]
                      }
                    },
                    "display": {
                      "description": "",
                      "displayData": [
                        { "text": 7 },
                        { "text": 3 },
                        { "menu": 1 },
                        { "text": 4 },
                        { "menu": 2 },
                        { "button": 15 }
                      ]
                    }
                  }
                }
              }
            }
          }
        }
      },
      "extraData": {
        "context": "{\"en-CA\":{\"menu\":{\"1\":{\"type\":\"menu\",\"name\":\"Regular menu\",\"menu_items\":[{\"type\":\"link\",\"label\":\"first_link\",\"label_text\":\"First link\",\"icon\":\"home\",\"data\":{\"link_url\":\"https://www.google.ca/\"}},{\"type\":\"link\",\"label\":\"second_link\",\"label_text\":\"Second link\",\"icon\":\"endorsed\",\"data\":{\"link_url\":\"https://ca.yahoo.com/\"}},{\"type\":\"link\",\"label\":\"third_link\",\"label_text\":\"Third link\",\"icon\":\"git-branch\",\"data\":{\"link_url\":\"https://github.com/\"}}]},\"2\":{\"type\":\"menu\",\"name\":\"Menu with dividers and submenus\",\"menu_items\":[{\"type\":\"divider\",\"label\":\"first_divider\",\"label_text\":\"First section\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"first\",\"label_text\":\"One\",\"icon\":\"help\",\"data\":{}},{\"type\":\"link\",\"label\":\"second\",\"label_text\":\"Two\",\"icon\":\"clean\",\"data\":{}},{\"type\":\"divider\",\"label\":\"second_divider\",\"label_text\":\"Second section\",\"icon\":null,\"data\":{}},{\"type\":\"link\",\"label\":\"third\",\"label_text\":\"1\",\"icon\":\"comment\",\"data\":{}},{\"type\":\"submenu\",\"label\":\"submenu\",\"label_text\":\"Submenu\",\"icon\":\"menu\",\"data\":{\"menu_items\":[{\"type\":\"link\",\"label\":\"cool\",\"label_text\":\"Cool\",\"icon\":\"draw\",\"data\":{}},{\"type\":\"submenu\",\"label\":\"submenu2\",\"label_text\":\"anotha one\",\"icon\":\"menu-open\",\"data\":{\"menu_items\":[{\"type\":\"link\",\"label\":\"ok\",\"label_text\":\"ok\",\"icon\":\"highlight\",\"data\":{}},{\"type\":\"link\",\"label\":\"nice\",\"label_text\":\"nice\",\"icon\":\"history\",\"data\":{}}]}}]}},{\"type\":\"submenu\",\"label\":\"submenu_2\",\"label_text\":\"Extra submenu\",\"icon\":\"menu\",\"data\":{\"menu_items\":[{\"type\":\"link\",\"label\":\"cooler\",\"label_text\":\"Cooler\",\"icon\":\"draw\",\"data\":{}}]}}]}},\"text\":{\"1\":{\"text\":\"Big Title\",\"variant\":\"subtitle1\"},\"2\":{\"text\":\"Start\",\"variant\":\"subtitle2\"},\"3\":{\"text\":\"Media examples\",\"variant\":\"subtitle2\"},\"4\":{\"text\":\"Button examples\",\"variant\":\"subtitle2\"},\"5\":{\"text\":\"Form examples\",\"variant\":\"subtitle2\"},\"6\":{\"text\":\"List examples\",\"variant\":\"subtitle2\"},\"7\":{\"text\":\"Menu examples\",\"variant\":\"subtitle2\"},\"8\":{\"text\":\"Cool Header\",\"variant\":\"h3\"},\"9\":{\"text\":\"Enter form data\",\"variant\":\"h3\"},\"10\":{\"text\":\"First menu\",\"variant\":\"h3\"},\"11\":{\"text\":\"Second menu\",\"variant\":\"h3\"},\"12\":{\"text\":\"small text 1\",\"variant\":\"body2\"},\"13\":{\"text\":\"sm txt\",\"variant\":\"body2\"},\"14\":{\"text\":\"Little Bigger Text\",\"variant\":\"body1\"},\"15\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"variant\":\"body1\"},\"16\":{\"text\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\",\"variant\":\"body2\"}},\"button\":{\"1\":{\"text\":\"Move to text state\",\"actionID\":\"start-text\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"small\"},\"2\":{\"text\":\"Return to start\",\"actionID\":\"text-start\",\"variant\":\"contained\",\"color\":\"primary\",\"size\":\"medium\"},\"3\":{\"text\":\"Move to media state\",\"actionID\":\"start-image\",\"variant\":\"outlined\",\"color\":\"secondary\",\"size\":\"medium\"},\"4\":{\"text\":\"Return to start\",\"actionID\":\"image-start\",\"variant\":\"outlined\",\"color\":\"success\",\"size\":\"medium\"},\"5\":{\"text\":\"Move to button state\",\"actionID\":\"start-button\",\"variant\":\"outlined\",\"color\":\"error\",\"size\":\"medium\"},\"6\":{\"text\":\"Return to start\",\"actionID\":\"button-start\",\"variant\":\"outlined\",\"color\":\"warning\",\"size\":\"medium\"},\"7\":{\"text\":\"test button 1\",\"actionID\":\"test-1\",\"variant\":\"outlined\",\"color\":\"info\",\"size\":\"medium\"},\"8\":{\"text\":\"test button 2\",\"actionID\":\"test-2\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"9\":{\"text\":\"test button 3\",\"actionID\":\"test-3\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"10\":{\"text\":\"Move to form state\",\"actionID\":\"start-form\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"11\":{\"text\":\"Return to start\",\"actionID\":\"form-start\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"12\":{\"text\":\"Move to list state\",\"actionID\":\"start-list\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"13\":{\"text\":\"Return to start\",\"actionID\":\"list-start\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"14\":{\"text\":\"Move to menu state\",\"actionID\":\"start-menu\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"medium\"},\"15\":{\"text\":\"Return to start\",\"actionID\":\"menu-start\",\"variant\":\"text\",\"color\":\"primary\",\"size\":\"large\"}},\"input\":{\"1\":{\"type\":\"form\",\"name\":\"request_viewing\",\"inputs\":[{\"type\":\"text\",\"label\":\"text_input\",\"label_text\":\"Text input\",\"placeholder\":\"Enter text\",\"optional\":false,\"data\":{}},{\"type\":\"text\",\"label\":\"optional_text_input\",\"label_text\":\"Optional text input\",\"placeholder\":\"Enter text\",\"optional\":true,\"data\":{}},{\"type\":\"date\",\"label\":\"date_input\",\"label_text\":\"Date input\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"time\",\"label\":\"time_input\",\"label_text\":\"Time input\",\"placeholder\":\"\",\"optional\":false,\"data\":{}},{\"type\":\"select\",\"label\":\"select_input\",\"label_text\":\"Select input\",\"placeholder\":\"\",\"optional\":false,\"data\":{\"options\":[\"first option\",\"second option\",\"third option\"]}},{\"type\":\"tel\",\"label\":\"phone_input\",\"label_text\":\"Phone number input\",\"placeholder\":\"416-123-4567\",\"optional\":false,\"data\":{\"pattern\":\"[0-9]{3}-[0-9]{3}-[0-9]{4}\"}},{\"type\":\"email\",\"label\":\"email_input\",\"label_text\":\"Email input\",\"placeholder\":\"name@email.com\",\"optional\":false,\"data\":{}},{\"type\":\"submit\",\"label\":\"submit_form\",\"label_text\":\"Submit form\",\"placeholder\":null,\"optional\":false,\"data\":{\"actions\":[\"save_object\"],\"save_object_data\":{\"object_name\":\"form_data\"}}}]}},\"list\":{\"1\":{\"name\":\"form data\",\"type\":\"object\",\"object_name\":\"form_data\"}},\"image\":{\"1\":{\"alt_text\":\"nature-image\",\"src\":\"https://eskipaper.com/images/cool-nature-1.jpg\"}},\"video\":{\"1\":{\"alt_text\":\"nature-video\",\"src\":\"https://youtu.be/6v2L2UGZJAM\"}}}}",
        "builder": "{\"nodes\":[{\"data\":{\"id\":\"Start\",\"label\":\"Start\"},\"position\":{\"x\":300,\"y\":569},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Text\",\"label\":\"Text\"},\"position\":{\"x\":449.7652352795509,\"y\":310.21263681933755},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Image\",\"label\":\"Image\"},\"position\":{\"x\":640,\"y\":391},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Button\",\"label\":\"Button\"},\"position\":{\"x\":732,\"y\":489},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Form\",\"label\":\"Form\"},\"position\":{\"x\":750,\"y\":602},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"List\",\"label\":\"List\"},\"position\":{\"x\":728,\"y\":713},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"},{\"data\":{\"id\":\"Menu\",\"label\":\"Menu\"},\"position\":{\"x\":527,\"y\":781},\"group\":\"nodes\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":false,\"classes\":\"\"}],\"edges\":[{\"data\":{\"source\":\"Start\",\"target\":\"Text\",\"id\":\"a718ffaf-6fd2-4556-8f1f-061dd7850f7d\",\"label\":\"start-text\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Text\",\"target\":\"Start\",\"id\":\"54ff3e7e-9b20-4cf2-be9b-2655e7954d83\",\"label\":\"text-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Image\",\"id\":\"f6e42d5f-46e7-4b7f-96de-4c5fd7d3adc0\",\"label\":\"start-image\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Image\",\"target\":\"Start\",\"id\":\"d980a2e8-86f6-471f-9165-bb039ad35c09\",\"label\":\"image-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Button\",\"id\":\"ec3acaa1-0b8b-4b8b-9e84-fd088fb20d41\",\"label\":\"start-button\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Button\",\"target\":\"Start\",\"id\":\"dee6fd14-9c62-4423-b81b-32107422752f\",\"label\":\"button-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Form\",\"id\":\"245a6c06-3deb-4443-8e06-861c9da127c0\",\"label\":\"start-form\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Form\",\"target\":\"Start\",\"id\":\"4b195169-5a11-48be-9b6c-d8e8f32c4057\",\"label\":\"form-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"List\",\"id\":\"851f9fbb-61e7-4522-9aeb-2c85afee238f\",\"label\":\"start-list\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"List\",\"target\":\"Start\",\"id\":\"4399f153-3dcc-438b-b709-b9b0e4665518\",\"label\":\"list-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Start\",\"target\":\"Menu\",\"id\":\"70a85f74-5914-415c-af65-991e6c024a7e\",\"label\":\"start-menu\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"},{\"data\":{\"source\":\"Menu\",\"target\":\"Start\",\"id\":\"0675fc37-010c-4ab7-880e-7733345df6d9\",\"label\":\"menu-start\"},\"position\":{\"x\":0,\"y\":0},\"group\":\"edges\",\"removed\":false,\"selected\":false,\"selectable\":true,\"locked\":false,\"grabbable\":true,\"pannable\":true,\"classes\":\"\"}]}"
      },
      "createdAt": "2022-05-24T13:32:21.400Z",
      "updatedAt": "2022-05-24T14:14:20.808Z",
      "__v": 0
    }
  ]
}
export default data