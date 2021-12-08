const core = require('@actions/core');
const github = require('@actions/github');


try{
    const name = core.getInput('who-to-greet');
    console.log(`Hello ${name}`);

    const time = new Date();

    console.log(`Current Time : ${ time.toTimeString() }`);
    core.setOutput("time", time.toTimeString());

    console.log(`Github Object : ${JSON.stringify(github, null, '\t')}`);
}
catch(error){
    core.setFailed(error.message);
}


