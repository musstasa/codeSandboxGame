import React from "react";

export const instructions = [
  <p>You are in the office. How about writing a report of what has been done today? Click on the computer.</p>,
  <p>In the left you can see a report form which must be filled. After clicking on apply button the data from this form should appear in the right document.</p>,
  <p>Unfortunately the functionality is broken now. Only information from name field and cooking checkbox is sent to the document.</p>,
  <p>You should add some logic to src/quiz/level3.js file in order to repaire it.</p>,
  <p>Follow the next steps to achieve the goal. Use implementation of fields that already work correctly as an example.</p>,
  <p>Step 1: create references for all fields (lines 13-14).</p>,
  <p>Step 2: add ref attributes for all input tags (lines 27-58).</p>,
  <p>Step 3: finish logic inside applyFormData method (lines 21-25) using functions from lines 4-10.</p>,
  <p>Step 4: add prefix '+375' for phone number before passing it to setPhone function (lines 23-28).</p>,
  <p>After finishing these steps, fill the form with correct data and click on apply button.</p>
]

export const acceptedInstructions = [
  <p>Well done! The report is ready!</p>
]