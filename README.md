# NextJs And AWS Amplify From Scratch Example 1

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
| 2/18/25 | 8:30 PM | 24 min 35 seconds |

## Notes Or Errors Seen
