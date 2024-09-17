# Introduction

This is a SPike for running Flutterflow within React JS App

# Steps to run the App

npm install
npm run prebuild
npm run start

Note: There are 2 Flutter Apps present in the Repo - ./flutter and ./test_web_integration. You can update the ./package.json's 'prebuild' script to build them inside React App.

    "prebuild": "cd flutter && flutter clean && flutter build web  --no-tree-shake-icons --base-href $PUBLIC_URL/flutter/ --output=../public/flutter && cd -",
