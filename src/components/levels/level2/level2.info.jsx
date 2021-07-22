import React from "react";

export const infoContent = [
  <h3 key="heading1">What do I need to do?</h3>,
  <p key="paragraph1">
    In this level you need to create styles with the help of CSS for different
    subjects in the room.
  </p>,
  <h3 key="heading2">What is CSS?</h3>,
  <p key="paragraph2">
    CSS stands for Cascading Style Sheets with an emphasis placed on “Style.”
    While HTML is used to structure a web document (defining things like
    headlines and paragraphs, and allowing you to embed images, video, and other
    media), CSS comes through and specifies your document’s style—page layouts,
    colors, and fonts are all determined with CSS. Think of HTML as the
    foundation (every house has one), and CSS as the aesthetic choices (there’s
    a big difference between a Victorian mansion and a mid-century modern home).
  </p>,
  <h3 key="heading3">How Does CSS Work?</h3>,
  <p key="paragraph3">
    CSS brings style to your web pages by interacting with HTML elements.
    Elements are the individual HTML components of a web page—for instance a
    paragraph—which in HTML might look like this:{" "}
    <code>&#60;p&#62;This is my paragraph!&#60;/p&#62;</code> If you wanted to
    make this paragraph appear pink and bold to people viewing your web page
    through a web browser, you’d use CSS code that looks like this:
    <code>p &#123; color:pink; font-weight:bold; &#125;</code>
    In this case, “p” (the paragraph) is called the “selector”—it’s the part of
    CSS code specifying which HTML element the CSS styling will effect. In CSS,
    the selector is written to the left of the first curly bracket. The
    information between curly brackets is called a declaration, and it contains
    properties and values that are applied to the selector. Properties are
    things like font size, color, and margins, while values are the settings for
    those properties. In the example above, “color” and “font-weight” are both
    properties, and “pink” and “bold” are values. The full bracketed set of is
    the declaration, and again, “p” (meaning the HTML paragraph) is the
    selector. These same basic principles can be applied to change font sizes,
    background colors, margin indentations, and more. For instance...
    <code>body &#123; background-color:lightblue; &#125;</code>
    ...would make your page’s background light blue, or...
    <code>p &#123; font-size:20px; color:red; &#125;</code>
    ...will create a 20 point font paragraph with red letters.
  </p>,
  <h3 key="heading4">Which selectors should I use?</h3>,
  <p key="paragraph4">
    In level2.css file you have all needed selectors. For example such
    selector...
    <code>.room &#123; . . . &#125;</code>
    ...means that styles will be applied to HTML element with class attribute
    "room", for example:
    <code>&#60;div class="room"&#62;&#60;/div&#62;</code>
    And such selector...
    <code>.room .cactus &#123; . . . &#125;</code>
    ...means that styles will be applied to HTML element with class attribute
    "cactus" and this element is an inheritor of another HTML element with class
    attribute "room", for example:
    <code>
      &#60;div class="room"&#62; &#60;div class="cactus"&#62;&#60;/div&#62;
      &#60;/div&#62;
    </code>
  </p>,
  <h3 key="heading5">Learn more</h3>,
  <p key="paragraph5">
    <a
      href="https://skillcrush.com/blog/css/"
      rel="noopener noreferrer"
      target="_blank"
    >
      THE ULTIMATE GUIDE TO CSS
    </a>
  </p>,
  <p key="paragraph51">
    <a
      href="https://www.w3schools.com/css/default.asp"
      rel="noopener noreferrer"
      target="_blank"
    >
      CSS Tutorial
    </a>
  </p>
];
