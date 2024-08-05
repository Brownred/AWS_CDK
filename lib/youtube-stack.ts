import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs'; //AWS Service

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class YoutubeStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const S3Bucket = new Bucket(this, 'YoutubeBucket', {
      versioned: true,
    })
  }
}
