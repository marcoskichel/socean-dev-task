
## Project challenges:

Implementing the static website was not a very difficult task. Even though I had a few challenges here and there, I will try to go through them one by one:

-   Server-side rendering cache for styles: To cache the MUI/Emotion styles was not straight forward as I initially imagined it would be, but I am glad they had [an example](https://github.com/mui/material-ui/blob/81b2659a4573fc70044542b6dafd85829c300654/examples/nextjs) of how to achieve this in their official docs:.
-   Stretch goal (on-chain data): The first time I read the notion task, I thought it would be a breeze to implement the on-chain communication as I had already played around with some blockchain dapps in the past (Ethereum and Polygon). However, the truth is that Solana has a lot of different concepts, and to be honest, I'm pretty new to staking protocols, so that ended up being quite a challenge. I managed to get the stake pool account data using the provided resources, but I could not figure out how to correctly get the total deposits made to that account. I tried to call Solana RPC to retrieve all the confirmed transaction signatures and then load the transactions for those signatures, but it didn't work well because there were too many records, so I realized that probably wasn't the right path. In the end, I decided to revert it as it was a stretch goal, and I didn't have too much time to spare because of my daily activities and work + I didn't want to delay delivering this too much.

## Technical decisions:

### Folder structure

I decided to code the website as if it were something that would be expanded in the future and tried to showcase some design patterns that I like, even though some would not be necessary for a POC like this.

I decided to use the following folder structure:

***/components:*** Hold "dumb" components which only care about their props.

***/containers:*** Hold "smart" components that interact with the application data.

***/providers:*** Hold data providers to be used across the app, these were not necessary for the app's current state, but I wanted to showcase how I would build something real.

***/pages:*** Hold the app pages.

***/styles:*** Style related files.

***/types:*** Typescript type definitions shared across the project.

### Design choices

The app is fully responsive, even though I didn't know if that was a requirement.

One thing that I implemented differently than the designs is the text centered in the tabs (sorry, but I could not help myself).

  

## Feedback

I had a lot of fun coding this little website; however, I have mixed feelings about it as a test. Here is what I believe could be improved:  

-   ***It could have more feature specs:*** I was doing minor customizations on MUI components most of the time, which is time-consuming, and IMO doesn't prove a point about someone's skills as a developer. Having more feature specs would help you understand someone's coding skills and style.
-   ***It could be smaller:*** As a screening test, it could be a lot smaller and more focused, I spent around 15 hours implementing this, and I think it is a lot of time for this kind of project. IMO it could be a lot smaller. Maybe implementing only the "staker" component with some feature specs would suffice.
- ***The spec could be better specified:*** Maybe it was on purpose, but I think the specs could be more precise about what was expected from the outcome. For instance: Being or not responsive, whether the text input should or not be functional, whether the balance should have or not a fake value, etc.