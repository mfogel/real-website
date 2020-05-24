# REAL-Website

The REAL-Website

## Initialization

Run `yarn install` in the root of the repository to install required packages.

For deployment, you will need command-line access to the AWS environment you wish to deploy to. This is usually this is done by setting up the appropriate [AWS credentials file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).

## Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn deploy`

Deploys the website from the `build` folder. See the [serverless documentation](https://serverless.com/framework/docs/providers/aws/cli-reference/deploy/) for the full set of options available. Note that `--stage` defaults to **production** if unset.

At the end of each deploy, cloudfront invalidations are kicked off for non-versioned files. The list of files is declared in `serverless.yml` and needs to be updated as new non-versioned files are added.

If changes are made to the CloudFront Distribution config in `serverless.yml`, the deployment will take +15 minutes to complete.

Note that the following two sections of `serverless.yml` are specific to deployments to the primary AWS Account. If you want to deploy this project to a different AWS Account, you will need to remove or comment out those sections.
  - `resources.Resources.WebsiteCloudFrontDistribution.Properties.DistributionConfig.Aliases`
  - `resources.Resources.WebsiteCloudFrontDistribution.Properties.DistributionConfig.ViewerCertificate`
