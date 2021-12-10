const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
  try {
    const token = core.getInput("token");
    const tittle = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const ocktokit = new github.getOctokit(token);

    const response = await ocktokit.issue.create({
      ...github.context.repo,
      tittle,
      body,
      assignees: assignees ? assignees.split(",") : undefined,
    });

    core.setOutput("issue", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
