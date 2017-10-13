## Mind Hypertrophy
### Development server
```commandline
git clone git@github.com:ameier38/mindhypertrophy-web.git
cd mindhypertrophy-web
yarn start
```

### Deploy to production
```commandline
yarn run build && aws s3 sync build/ s3://[my-s3-bucket]
```