const core = require('@actions/core');

async function run() {
  /**
   * 1. Parse Inputs:
   *  1.1. base-brach from which to check updates
   *  1.2. target-brach to use to create PR
   *  1.3. Github token for authentication purposes (to create PRs)
   *  1.4. Working directory for which to check dependencies.
   * 2. Execute the npm update command within the working directory
   * 3. Check where there are modified package.json files
   * 4. If there are modified files
   *  4.1. Add and commit files to the target branch
   *  4.2 Create a PR to the base-branch using octakit API
   * 5. Otherwise conclude the custom action
   */
  core.info('I am a custom JS action');
}

run();