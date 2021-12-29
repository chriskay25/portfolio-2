import rubyLogo from './ruby.png'
import railsLogo from './rails-logo-2.png'
import jsLogo from './js-logo.png'
import cssLogo from './css-logo-1.png'
import htmlLogo from './html-logo.png'
import nodeLogo from './node-logo-3.png'
import reactLogo from './react-logo.png'
import reduxLogo from './redux-logo.png'
import pythonLogo from './python_logo.png'

export const stackData = [
    {
        id: 1,
        name: 'Ruby',
        img: rubyLogo,
        alt: 'ruby logo',
        description: "Ruby is a high level general purpose programming language with a focus on object orientation. Ruby was written with the goal to make programmers happy by providing flexibility. This is the first language I learned, and I still have a particular fondness for it."
    },
    {
        id: 2,
        name: 'Rails',
        img: railsLogo,
        alt: 'rails logo',
        description: "Rails is a framework for developing web applications. Ruby and Rails have a dedicated following and a very active community, which is a big reason they're still popular today."
    },
    {
        id: 3,
        name: 'JavaScript',
        img: jsLogo,
        alt: 'javascript logo',
        description: "JavaScript is a prototype-based dynamic language, supporting object-oriented, imperative, and declarative styles. The uses for JS have grown over the years, but it is most well known as the scripting language for the web."
    },
    {
        id: 4,
        name: 'Python',
        img: pythonLogo,
        alt: 'python logo',
        description: "Known best for its use in machine learning and AI development, Python is a high-level general-purpose programming language with a design philosophy that emphasizes code readability."
    },
    {
        id: 5,
        name: 'React',
        img: reactLogo,
        alt: 'react logo',
        description: "React is a free and open-source front-end JavaScript library developed by Facebook. It allows developers to build user interfaces with reusable components written in JSX (a mixture of JavaScript and HTML)."
    },
    {
        id: 6,
        name: 'Redux',
        img: reduxLogo,
        alt: 'redux logo',
        description: "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React for building user interfaces. The main benefit of using Redux is centralizing an application's state and logic."
    },
    {
        id: 7,
        name: 'Node.js',
        img: nodeLogo,
        alt: 'node logo',
        description: "Node.js is a free, open source server environment. Node.js allows developers to run JavaScript on the server. Due to its ease of use, npm has helped the Node.js ecosystem to proliferate."
    },
    {
        id: 8,
        name: 'CSS',
        img: cssLogo,
        alt: 'css logo',
        description: "CSS (Cascading Style Sheets) is a stylesheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the web, alongside JS and HTML."
    },
    {
        id: 9,
        name: 'HTML',
        img: htmlLogo,
        alt: 'html logo',
        description: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It is the most basic building block of the web, defining the meaning and structure of web content."
    }
]

export const proficiencyData = [
    {
        proficiency: 'Object Oriented Programming (OOP)'
    },
    {
        proficiency: 'Relational Databases'
    },
    {
        proficiency: "Authentication (Rails, JWT's, OAuth)"
    },
    {
        proficiency: 'Single Page Applications'
    },
    {
        proficiency: 'MVC Frameworks'
    },
    {
        proficiency: 'RESTFUL Applications'
    },
    {
        proficiency: 'Test Driven Design (TDD)'
    },
    {
        proficiency: 'Responsive Design'
    },
    {
        proficiency: "API's"
    },
    {
        proficiency: 'SQL'
    },
    {
        proficiency: 'JSON'
    },
    {
        proficiency: 'Git'
    },
    {
        proficiency: 'Thunk'
    }
]

export const projectData = [
    {
        id: 1,
        name: 'React Game',
        link: 'https://github.com/chriskay25/juke',
        frontend: 'React',
        backend: 'Ruby on Rails',
        description: 'This is a game built using mostly pure React and state management for frontend operations. Game stats and high scores are saved to user accounts on the backend.'
    },
    {
        id: 2,
        name: 'Flashcards',
        link: 'https://github.com/chriskay25/react-flashcards',
        frontend: 'React',
        backend: 'Ruby on Rails',
        description: 'A web app that allows users to create their own flashcard decks which they can use to study and quiz themselves.'
    },
    {
        id: 3,
        name: 'Notepod',
        link: 'https://github.com/chriskay25/notepod',
        frontend: 'Embedded Ruby (ERB) & CSS',
        backend: 'Ruby on Rails',
        description: 'Web app created to allow users to make and share notes about their favorite podcast episodes.'
    },
    {
        id: 4,
        name: 'Bucket List',
        link: 'https://github.com/chriskay25/bucket_list',
        frontend: 'Embedded Ruby (ERB) & CSS',
        backend: 'Sinatra',
        description: 'A web app that lets users track and remember travel destinations that are on their bucket list.'
    },
    {
        id: 5,
        name: 'Brewery Finder',
        link: 'https://github.com/chriskay25/cheers',
        frontend: null,
        backend: null,
        description: 'This is a project that scrapes the web for information about breweries in the Atlanta area. Users can interact with the app through a Command Line Interface.'
    }
]