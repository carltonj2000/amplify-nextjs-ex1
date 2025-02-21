# NextJs And AWS Amplify From Scratch Example 1

Stop watched in the video after adding sign-in/out functionality.
Wanted to go with AWS Amplify because of simpler user auth and db integration.
When doing the tutorial discoverd the following.

- the `aws ss login` user setup is complicated
- the `npx ampx sandbox` command failed and solving the failure was not easy
- setting up the 'cdk' setup in the cloud was non trivial
- documentation to solve the above issues was sparse and difficult to find
- the overhead for setting up aws user and the amplify software

Bottom line was that the simplification of aws user auth and db integration
was outweighed by the complication of setting up the aws tool, cloud and users.
Where you lose out more with AWS is that the aws API and programming tool
knowledge is not transferable away from aws and end up locking you into aws.

So it is better to spend more time on user auth and db integration up front with
"universal" tool and better documentation that spending time learning amazon specific
tools and go solving not a well documented issues.

## Creation History

The code in this repository is based on the following.

- [Create a Full Stack App with AWS Amplify Gen 2: End-to-End Type Safety and Serverless Backend](https://aws.amazon.com/awstv/watch/6be0b8fcebd/)

## Code History

```bash
npx create-next-app@latest
cd amplify-nextjs-ex1
npm create amplify@latest
aws sso login
npx ampx sandbox # failed initially, did stuff below and it worked
npx ampx sandbox delete
```

I delete s3 ckd stuff while clean up and then needed the policy below to remove and reinstall
in aws console -> iam identity Center -> permision sets -> amplify-policy added AWSCloudFormationFullAccess
Delete CDKToolkit via https://console.aws.amazon.com/cloudformation/
Ran the bootstrapped via https://us-west-1.console.aws.amazon.com/amplify/create/bootstraping

```bash
npm install -g aws-cdk
aws cloudformation delete-stack --stack-name CDKToolkit
cdk bootstrap aws://{YOUR_ACCOUNT_ID}/{YOUR_REGION}
```

Not sure I need the stuff below.

```bash
npm i @aws-amplify/ui-react @aws-amplify/adapter-nextjs
```

## Progress

| Day     | Time    | Completed To      |
| ------- | ------- | ----------------- |
| 2/20/25 | 3:15 PM | 29 min 10 seconds |
| 2/18/25 | 8:30 PM | 24 min 35 seconds |

## Notes Or Errors Seen
