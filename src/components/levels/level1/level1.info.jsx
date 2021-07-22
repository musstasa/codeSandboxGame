import React from "react";

export const infoContent = [
  <h3 key="heading1">What do I need to do?</h3>,
  <p key="paragraph1">
    In this level you need to create burgers with the help of HTML elements.
  </p>,
  <h3 key="heading2">What is HTML?</h3>,
  <p key="paragraph2">
    HTML (Hypertext Markup Language) is not a programming language. It is a
    markup language that tells web browsers how to structure the web pages you
    visit. HTML consists of a series of elements, which you use to enclose,
    wrap, or mark up different parts of content to make it appear or act in a
    certain way.
  </p>,
  <h3 key="heading3">What is HTML element?</h3>,
  <p key="paragraph3">
    An HTML element is defined by a start tag, some content, and an end tag:
    <code>&#60;tagname&#62;Content goes here...&#60;/tagname&#62;</code>
    The HTML element is everything from the start tag to the end tag:
    <code>&#60;h1&#62;My First Heading&#60;/h1&#62;</code>
    In this level you will need to use only div elements without any content
    inside them. Div element is the basic block element of any markup.
  </p>,
  <p key="paragraph4">
    We have prepared styles written in CSS for all the elements of burgers. You
    need to add class attributes to your div elements to target the elements
    with style information.
  </p>,
  <h3 key="heading4">What is attribute?</h3>,
  <p key="paragraph5">
    Elements can have attributes. Attributes look like this:
    <code>&#60;div class="class-name"&#62;&#60;/div&#62;</code>
    Attributes contain extra information about the element that won't appear in
    the content.
  </p>,
  <h4 key="heading5">
    Note: There is not pure HTML in level1.jsx file. This is JSX, and it is a
    syntax extension to JavaScript. Everything you need to know now about
    differences between JSX and HTML is that attribute 'class' is called
    'className' in jsx. That's why in this level use <em>'className'</em> but
    know that you need to use <em>'class'</em> while writing in pure HTML.
  </h4>,
  <h3 key="heading6">Learn more</h3>,
  <p key="paragraph6">
    <a
      href="https://www.computerhope.com/jargon/h/html.htm"
      rel="noopener noreferrer"
      target="_blank"
    >
      What is HTML?
    </a>
  </p>,
  <p key="paragraph61">
    <a
      href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
      rel="noopener noreferrer"
      target="_blank"
    >
      HTML Basics
    </a>
  </p>,
  <p key="paragraph62">
    <a
      href="https://www.w3schools.com/html/default.asp"
      rel="noopener noreferrer"
      target="_blank"
    >
      HTML Tutorial
    </a>
  </p>
];
