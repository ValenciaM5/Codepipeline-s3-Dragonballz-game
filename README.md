Continuous Deployment of a Dragon Ball Z Matching Game using AWS CodePipeline and S3

This repository contains the source code for a fun Dragon Ball Z themed memory matching game, as well as the infrastructure setup to enable continuous deployment using AWS services.

---

TL;DR

A static website matching game built with HTML, CSS, and JavaScript. The source code is hosted on GitHub. The game is automatically deployed to an Amazon S3 bucket configured for static website hosting via an AWS CodePipeline.

Whenever a change is pushed to the repository, the CodePipeline fetches the update and redeploys the website.

---

 The Game

This is a simple memory matching game featuring iconic Dragon Ball Z characters. The player flips two cards at a time to try and find matching pairs.

Game Features:

🎮 Game Features

- Flip cards to reveal Dragon Ball Z characters
- Match identical pairs to score points
- Built with HTML, CSS, and JavaScript


Tech Stack:
- HTML
- CSS
- JavaScript

---


🌐 Deployment Environment

The game is hosted as a static website using  Amazon S3.

---

🔄 Deployment Pipeline

- AWS CodePipeline is used to automate deployments.
- The pipeline is triggered when changes are pushed to the GitHub repository.
- CodePipeline pulls the code and deploys the new version to the S3 bucket.

---

Cost

All services used (S3, CodePipeline) are part of the [AWS Free Tier](https://aws.amazon.com/free/).  
However, usage beyond the free tier limits may incur charges.

👉 Be sure to delete or pause resources when not in use.**

Curious how it all comes together? Watch the completed game demo and walkthrough here.# Codepipeline-s3-Dragonballz-game
