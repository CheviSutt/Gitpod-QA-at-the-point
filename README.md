# WebdriverIO (WDIO) with Javascript

## Setup

> 💡 Skip to `Step 2` if using Gitpod

1. After cloning, install dependencies:

    ```bash
    npm install
    ```

2. Run the example tests

    ```bash
    npm run wdio
    ```

    > 💡 If using Gitpod, open Port `6080` to see the test(s) running

## Where to look first

Opening an existing project can be daunting, but there are a few places to look first to get a handle on what's going on.

> 💡 By default, WDIO uses the `PageObject` and `spec` patterns along with the `Mocha` test framework for their Automation.

- The `/test` directory would be the first place to look for things that matter:
  - `/specs` - the test files that use the Page Objects

- In this project, we are testing [DemoQA.com](https://demoqa.com/books), so look at the `/demoqa` directory
  - `/demoqa` - any files, like Page Objects, that are relevant to our web app

- The `wdio.conf.js` configuration file is where you can define settings for your test automation

## Debug Mode

In VS Code, you can turn on debugging via the Command Palette:

1. Open Command Palette
    - Mac: `SHIFT + COMMAND + P`
    - Windows: `SHIFT + CTRL + P`

2. Search for `Debug: Toggle Auto Attach`
3. Select `Always`

💡 Now you can add breakpoints to your test! Run the test normally and observe the test stops at your breakpoint with controls to `Continue`, `Step Over`, and even inspect variables!
