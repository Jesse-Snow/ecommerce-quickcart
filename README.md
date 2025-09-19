# Ecommerce App

## Authentication
https://dashboard.clerk.com
### Configuration
1. Webhooks
Add endpoint
Select ingest
Create plataform on ingest
Crete event key and sign in key
Go to clerk, connect to ingest
and create button
#### Ingest
Handle clerk webhook
npx inngest-cli@latest dev
 quickly send and view events events and function runs

In apps
Sync new app
Add app url/api/inngest ( pointing to the api/inngest endpoint)
In Webhook session, in the webhook integration being used,
chane the webhook-integration/ to clerk/
like: name: `clerk/${evt.type || evt.name || evt...}

## Deploy
https://vercel.com
Added github repo

## Database
https://cloud.mongodb.com/v2/
In Network Address, remove any, and add ip address option: accept any ip address