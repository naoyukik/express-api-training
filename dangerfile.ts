import { danger, fail } from "danger"

const commits = danger.git.commits;
commits.forEach(commit => {
  if (commit.commit.message.startsWith('fixup')) {
    fail('Commit message contains "fixup".');
  }
});
