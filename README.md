# Heeko Frontend Challenge

This is a coding test for evaluating a candidate for frontend skills.

## Process

- There are few tasks listed below that you need to work on in this test.
- You have a time of 1 week starting from the day you receive this assignment. We understand you might already be engaged in your current work and might not have time immediately. In that case, please let us know when would you be able to start the test and if you need longer than a week.
- You should open pull-request for each task. Someone from the dev team will keep a check on your pull-requests and review them timely.
- Once you are done from your side, please reply to our email thread regarding the coding test.

## Tasklist

The tasks listed here are in no order. You are the owner of this project and are required to prioritize on what you think is appropriate.

This is a mini app that can draw rectangle shapes (currently static) like Figma/Sketch. You are required to add some logging when shapes are hovered with the mouse. The app is written in `React` framework.

1. **Bug**: Hovering any shape should show its name (`data-name` attribute). Its implemented, but not working correctly. This needs a fix!
2. **App Design** - https://www.figma.com/file/zmmgUJirmAsIK8OenqZNc5/Frontend-Heeko-Task?node-id=13%3A2

3. **Prototype Link** : https://www.figma.com/proto/zmmgUJirmAsIK8OenqZNc5/Frontend-Heeko-Task?node-id=13%3A2&viewport=831%2C-65%2C0.26043304800987244&scaling=scale-down-width
4. **Feature** - Mouse coordinates: Hovering any shape should also log the realtime x/y coordinates of the mouse relative to the shape dimension. The center for these relative coordinate system should be bottom-left point of the shape. Also, the points should show as integers.
5. **Feature** - Adding Shapes: Here is what should happen after this feature is implemented:
   a. If we click anywhere on the window, a modal should open.
   b. There should be a form inside the modal asking for 4 things: `top`, `left`, `width` and `height` of the shape to be added.
   c. Submitting that form should add a new shape on the page according to the data filled in the form.
6. Do you see any current or potential performance bottlenecks in this app? List them as separate issues on GitHub explaining how exactly they can affect the app.
7. Surprise us! Show us your creativity by improving the current app.

## Points to keep in mind

- We would like you to complete all the tasks mentioned above. But in case you are not able to implement them for any reason, please open an issue on Github and put your notes/reason in the comments of that issue.
- Evaluation is based on how many tasks you are able to complete and the quality of code written. We expect the code to be written with performance and security in mind. At the same time, it should be easy to read. We love clean code :) We hate clever code!
- Keep your commits and pull-requests small so that it is easy for the reviewer to review your pull-request.
- If you are stuck anywhere or have any questions, ask us through Github issues. Just keep us posted on the progress throughout the project duration. Status updates are very important in a remote team :)

## Contact us

You can use the exisiting mail thread for all questions about the hiring process itself. Please use this repo's issues for technical queries regarding the test. Just mention `@proksh` in your message.
