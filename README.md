# madden-fantasy
Attempt at Fantasy Football API for Madden CFM Leagues

High-level explanation at how this thing is intended to work:

1) Export Madden data to AWS Lambda microservice (https://54o76hvxy6.execute-api.us-east-2.amazonaws.com/default/madden-ffl-ms), a lightweight Serverless controller that simply tags and uploads Madden export data to an S3 bucket. 
2) Behind the scenes, this will need to call an endpoint on the Node server running in Heroku to fetch new data and process it into a DB. The reason for this is that Heroku enforces a 30s timeout on all web requests, so the data would not process in time.
3) Pushes to master on this repository automatically deploy new code to Heroku (https://madden-ffl.herokuapp.com/).
4) The plan at the moment is to generate a random string for each new league, and let that be the identifier for each fantasy league's CFM league. For now, let's plan a 1:1 relationship between a fantasy league and a single CFM season. Going forward in season will cause the league to be in a completed state, with a new league to be created.

More info to follow.