import React from "react";

export const infoContent = [
  <h3 key="heading1">What do I need to do?</h3>,
  <p key="paragraph1">
    In this level you need to add logic to a form with the help of React JS.
  </p>,
  <h3 key="heading2">What is React JS?</h3>,
  <p key="paragraph2">
    React JS is a JavaScript library used in web development to build
    interactive elements on websites.
  </p>,
  <h3 key="heading3">What is JavaScript?</h3>,
  <p key="paragraph3">
    JavaScript is a super important coding language used to add animated and
    interactive features to websites or web applications (on top of the basic,
    static structures created by languages like HTML and CSS).
  </p>,
  <h3 key="heading4">Why do JavaScript developers use React JS?</h3>,
  <p key="paragraph4">
    React is a JavaScript library that specializes in helping developers build
    user interfaces, or UIs. In terms of websites and web applications, UIs are
    the collection of on-screen menus, search bars, buttons, and anything else
    someone interacts with to USE a website or app.
  </p>,
  <p key="paragraph41">
    Before React JS, developers were stuck building UIs by hand with “vanilla
    JavaScript” (developer speak for the raw JavaScript language on its own) or
    with less UI-focused React predecessors like jQuery. That meant longer
    development times and plenty of opportunities for errors and bugs. So, in
    2011, Facebook engineer Jordan Walke created React JS specifically to
    improve UI development. In addition to providing reusable React library code
    (saving development time and cutting down on the chance for coding errors),
    React comes with two key features that add to its appeal for JavaScript
    developers:{" "}
  </p>,
  <ul>
    <li>JSX</li> <li>Virtual DOM</li>
  </ul>,
  <h3 key="heading5">What is JSX?</h3>,
  <p key="paragraph5">
    JSX (short for JavaScript eXtension) is a React extension that makes it easy
    for web developers to modify their DOM by using simple, HTML-style code.
    This isn’t just a matter of convenience, though—using JSX to update a DOM
    leads to significant site performance improvements and development
    efficiency. How? It’s all about the next React feature, the Virtual DOM.
  </p>,
  <h3 key="heading6">What is Virtual DOM?</h3>,
  <p key="paragraph6">
    The Virtual DOM (like the name implies) is a copy of the site’s DOM, and
    React JS uses this copy to see what parts of the actual DOM need to change
    when an event happens (like a user clicking a button). Let’s say a user
    enters a comment in a blog post form and pushes the “Comment” button.
    Without using React JS, the entire DOM would have to update to reflect this
    change (using the time and processing power it takes to make this update).
    React, on the other hand, scans the Virtual DOM to see what changed after a
    user action (in this case, a comment being added) and selectively updates
    that section of the DOM only. This kind of selective updating takes less
    computing power and less loading time.
  </p>,
  <h3 key="heading7">What does React JS code look like?</h3>,
  <p key="paragraph7">
    In src/quiz/level3.jsx you can see an example of React component. Components
    are the building blocks of any React app and a typical React app will have
    many of these. Simply put, a component is a JavaScript class or function
    that optionally accepts inputs i.e. properties(props) and returns a React
    element that describes how a section of the UI (User Interface) should
    appear. Our component is called QuizLevel3 and it has the following props:
    sendName, sendPhone, sendCookingDone, sendProgrammingDone, sendWashingDone,
    sendStylingDone.
    <code>
      <p>&#47;&#47; lines 3-11</p>
      export const QuizLevel3 = &#40;&#123;sendName, sendPhone, sendCookingDone,
      sendProgrammingDone, sendWashingDone, sendStylingDone&#125;&#41; => &#123;
      ... &#125;
    </code>
    All the props for this component are callbacks (simply put, functions), that
    you will need to execute passing correct arguments inside round brackets,
    like this
    <code>
      <p>&#47;&#47; lines 19-20</p>
      <p>sendName(nameRef.current.value);</p>
      <p>sendCookingDone(cookingRef.current.checked);</p>
    </code>
    Let's look closer at what our component returns (lines 23-54, everything
    after 'return' word). This is JSX (HTML-style code) that describes a UI
    element (more concretly a form with submit button and several labels and
    fields: inputs and checkboxes). Clicking on submit button will call
    applyFormData function.
    <code>
      <p>&#47;&#47; lines 23 - 54</p>
      return &#40;
      <p>
        &#00;&#60;form className="document-input" onSubmit=&#123;e =>
        applyFormData&#40;e&#41;&#125;&#62;{" "}
      </p>
      <p>&#00;&#00;&#60;label htmlFor="name-input">Name:&#60;/label&#62;</p>
      <p>
        &#00;&#00;&#60;input id="name-input" placeholder="Teddy Brown"
        ref=&#123;nameRef&#125; /&#62;
      </p>
      <p>&#00;&#00;... </p>
      <p>
        &#00;&#00;&#60;input type="submit" value="Apply" id="apply-button"
        /&#62;
      </p>
      <p>&#00;&#60;/form&#62; </p>
      <p>&#41;;</p>
    </code>
    As you see, input with id="name-input" has ref attribute called nameRef.
    Refs are a function provided by React to access the DOM element. With the
    help of refs you can get values of the inputs and states of checkboxes
    (checked or not checked) like this
    <code>
      <p>&#47;&#47; lines 19-20</p>
      <p>nameRef.current.value</p>
      <p>cookingRef.current.checked</p>
    </code>
    Before addding ref attributes to the fields, you need to create refs with
    the help of useRef function:
    <code>
      <p>&#47;&#47; lines 13 - 14</p>
      <p>const nameRef = useRef(); </p>
      <p>const cookingRef = useRef();</p>
    </code>
  </p>,
  <h3 key="heading8">Learn more</h3>,
  <p key="paragraph81">
    <a
      href="https://skillcrush.com/blog/what-is-react-js/"
      rel="noopener noreferrer"
      target="_blank"
    >
      What is React?
    </a>
  </p>,
  <p key="paragraph82">
    <a
      href="https://reactjs.org/tutorial/tutorial.html"
      rel="noopener noreferrer"
      target="_blank"
    >
      React Tutorial
    </a>
  </p>,
  <p key="paragraph8">
    <a
      href="https://www.w3schools.com/js/default.asp"
      rel="noopener noreferrer"
      target="_blank"
    >
      JavaScript Tutorial
    </a>
  </p>
];
