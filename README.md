# Zendesk-Ticket-Viewer

# Guide to run the project

- Download both Zendesk_React and Zendesk_Node folders.
- Zendesk_Node consist the backend files which fetches the response from the Zendesk API and sends it to React to render our frontend.
- In index.js file under Zendesk_Node we can fetch data either by API or the local tickets.json file.
- To fetch data for local file comment the code from line 49-59 and uncomment line 62.
- Build project and start our node server using npm start.
- Now, to render the front end build and start the react server as well using nom start.
- Browse the localhost url in any browser to view the Tivket Viewer.
- You can click on individual tickets to view their details and click Next button at the bottom to view next set of Tickets.

# ScreenShot of Data fetched from API

{![screenshot](/images/outputAPI.png)}

# ScreenShot of Data fetched from tickets.json

{![screenshot](/images/outputLocal.png)}
