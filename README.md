# serverless-demo

https://serverless.com/framework/docs/providers/aws/guide/quick-start/

安装serverless

$npm install -g serverless

$mkdir serverless-demo

$cd serverless-demo/

$serverless create -t aws-nodejs

从aws里找到"My Security Credentials'

https://serverless.com/framework/docs/providers/aws/guide/credentials/#create-an-iam-user-and-access-key





Add credential to your local laptop:

$serverless config credentials --provider aws --key AKIAIDEXAZA --secret xxxEL5xFZYxxx49nuu

$cat ~/.aws/credentials 

发布测试环境

$serverless deploy

Serverless: Packaging service...

Serverless: Excluding development dependencies...

Serverless: Uploading CloudFormation file to S3...

Serverless: Uploading artifacts...

Serverless: Uploading service lambda-test.zip file to S3 (417 B)...

Serverless: Validating template...

Serverless: Updating Stack...

Serverless: Checking Stack update progress...

................................

Serverless: Stack update finished...

Service Information

service: lambda-test

stage: dev

region: us-east-1

stack: lambda-test-dev

resources: 17

api keys:

  None

endpoints:

  GET - https://xxx.execute-api.us-east-1.amazonaws.com/dev/users/create

  GET - https://xxx.execute-api.us-east-1.amazonaws.com/dev/imageResize

functions:

  hello: lambda-test-dev-hello

  imageResize: lambda-test-dev-imageResize

layers:

  None

Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.



发布到正式环境的命令：

$ serverless deploy --stage production

Serverless: Packaging service...

Serverless: Excluding development dependencies...

Serverless: Creating Stack...

Serverless: Checking Stack create progress...

.....

Serverless: Stack create finished...

Serverless: Uploading CloudFormation file to S3...

Serverless: Uploading artifacts...

Serverless: Uploading service lambda-test.zip file to S3 (417 B)...

Serverless: Validating template...

Serverless: Updating Stack...

Serverless: Checking Stack update progress...

...................................................

Serverless: Stack update finished...

Service Information

service: lambda-test

stage: production

region: us-east-1

stack: lambda-test-production

resources: 17

api keys:

  None

endpoints:

  GET - https://xxx.execute-api.us-east-1.amazonaws.com/production/users/create

  GET - https://xxx.execute-api.us-east-1.amazonaws.com/production/imageResize

functions:

  hello: lambda-test-production-hello

  imageResize: lambda-test-production-imageResize

layers:

  None

Serverless: Run the "serverless" command to setup monitoring, troubleshooting and testing.

