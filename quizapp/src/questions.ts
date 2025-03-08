type Question = {
    question: string;
    options: string[];
    answer: string;
  }
  
  const questions: Question[] = [
  {
    
    question: "HTML stands for HyperText __________ Language.",
    answer: "Markup",
    options: ["Mark-up", "Marker", "Markup", "Marking"],
  },
  {
    
    question: "A markup language is a set of interpretation to text that describes how it is to be structured, laid out or formatted.",
    answer: "True",
    options: ["True", "False", "Maybe True", "Maybe False"],
  },
  {
    
    question: "Texts that are enclosed on a <title> tag are all displayed in which part of the browser?",
    answer: "Title Bar",
    options: ["Title Bar", "Tab", "Menu Bar", "Tool Bar"],
  },
  {
    
    question: "__________ is software that displays web pages and allows you to interact with text, images, music, video and other resources found on a website on the World Wide Web.",
    answer: "Web Browser",
    options: ["Device Driver", "Web Browser", "Operating System", "Computer Aided Instruction"],
  },
  {
    
    question: "This is where you could create an HTML document.",
    answer: "Notepad",
    options: ["VBA", "VisiCalc", "MS Word", "Notepad"],
  },
  {
    
    question: "These are the basic units or building blocks of an HTML file.",
    answer: "Tag",
    options: ["Tag", "HTTP", "Value", "Attribute"],
  },
  {
    
    question: "Tags that can stand alone are called…",
    answer: "Empty Tag",
    options: ["Empty Tag", "Markup Tag", "Container Tag", "Standalone Tag"],
  },
  {
    
    question: "Tags that cannot stand alone are called…",
    answer: "Container Tag",
    options: ["Empty Tag", "Markup Tag", "Container Tag", "Standalone Tag"],
  },
  {
    
    question: "__________ are used to provide additional information about the tag and go in name-value pairs separated by an equal sign =",
    answer: "Attribute",
    options: ["Tag", "HTTP", "Value", "Attribute"],
  },
  {
    
    question: "__________ are assigned property to an attribute.",
    answer: "Value",
    options: ["Tag", "HTTP", "Value", "Attribute"],
  },
  {
    
    question: "HTML files are divided into 2 parts: the head and the __________.",
    answer: "Body",
    options: ["Attribute", "Body", "Title", "HTML"],
  },
  {
    
    question: "Everything that appears on your webpage may it be texts, images, videos and others should then be put on the body which is enclosed in…",
    answer: "Body",
    options: ["Head", "Title", "Body", "Html"],
  },
  {
    
    question: "__________ tag inside the head tag is used to denote the title of the webpage and display the title of the webpage on the title bar.",
    answer: "Title",
    options: ["Head", "Title", "Body", "Html"],
  },
  {
    
    question: "This attribute can be used under the declaration of the <body> tag if you want to add a background image on the web page.",
    answer: "Background",
    options: ["Background", "Bgcolor", "Text", "Link"],
  },
  {
    
    question: "This attribute can be used under the declaration of the <body> tag if you want to customize the background color of your webpage.",
    answer: "Bgcolor",
    options: ["Background", "Bgcolor", "Text", "Link"],
  },
  {
    
    question: "This attribute can be used under the declaration of the <body> tag if you want to change the color of all the hyperlinks in the webpage",
    answer: "Text",
    options: ["Background", "Bgcolor", "Text", "Link"],
  },
  {
    
    question: "This attribute can be used under the declaration of the <body> tag if you want to change the color of the hyperlinks in the webpage.",
    answer: "Link",
    options: ["Background", "Bgcolor", "Text", "Link"],
  },
  {
    
    question: "This attribute indicates the color of the visited hyperlinks in the web page.",
    answer: "Vlink",
    options: ["Link", "Alink", "Vlink", "Xlink"],
  },
  {
    
    question: "This attribute indicates the color of the active hyperlinks (when clicked) in the web page.",
    answer: "Alink",
    options: ["Link", "Alink", "Vlink", "Xlink"],
  },
  {
    
    question: "Headings contains ____ levels.",
    answer: "6",
    options: ["2", "4", "6", "8"],
  },
];

export default questions;