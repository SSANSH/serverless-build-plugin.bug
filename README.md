# Step to reproduce
# Install dep
```
yarn
```
# Build package and check artifacts
```
yarn sls package
cd .serverless/artifacts && unzip *.zip
Archive:  bug-hello-1536572322011.zip
  inflating: functions/handler.js    
  inflating: functions/handler.js.map  
  inflating: node_modules/test/package.json  => test is here
  inflating: node_modules/test/index.js  
```
# Link test folder.
```
cd ./test && yarn link && cd - && yarn link ./test
```
# Check symlink (node_modules/test -> ../test)
```
l -d node_modules/test 
```
# Build package
```
yarn sls package
```
# Check package
```
cd .serverless/artifacts && unzip *.zip
Archive:  bug-hello-1536572498098.zip
  inflating: functions/handler.js    
  inflating: functions/handler.js.map  
==> no test folder
```
# => As you can see test modules is not on the bundle.
