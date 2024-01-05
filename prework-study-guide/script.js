document.addEventListener("DOMContentLoaded", function () {
    var topics = ["HTML", "CSS", "Git", "JavaScript"];
    var suggestion = "Consider starting with HTML to understand the basics of web development.";
    var mainElement = document.querySelector("main");
    var topicsList = document.createElement("ul");
  
    topics.forEach(function (topic) {
      var listItem = document.createElement("li");
      listItem.textContent = topic;
      topicsList.appendChild(listItem);
    });
  
    mainElement.appendChild(topicsList);
  
    var suggestionParagraph = document.createElement("p");
    suggestionParagraph.textContent = suggestion;
  
    mainElement.appendChild(suggestionParagraph);
  });
  