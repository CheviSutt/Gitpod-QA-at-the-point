# WebdriverIO (WDIO) with Javascript

## Setup

> 💡 Skip to `Step 2` if using Gitpod

1. Initialize WDIO in the project

    ```bash
    # defaults
    npm init wdio . -- --yes
    ```

    ```bash
    # or go through the Setup Wizard manually
    npm init wdio
    ```

2. Run the example tests

    ```bash
    npm run wdio --spec example.e2e.js
    ```

    > 💡 If using Gitpod, open Port `6080` to see the test(s) running

## Where to look first

Opening an existing project can be daunting, but there are a few places to look first to get a handle on what's going on.

> 💡 By default, WDIO uses the `PageObject` and `spec` patterns along with the `Mocha` test framework for their Automation.

- The `/test` directory would be the first place to look for things that matter:
  - `/pageobjects` - the "Page Object" files
  - `/specs` - the test files that use the Page Objects

- The `wdio.conf.js` configuration file is where you can define settings for your test automation
