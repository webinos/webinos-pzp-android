/* Used by Ant build script task under project root directory */

importClass(java.io.File);
importClass(java.io.FileReader);
importClass(java.io.BufferedReader);
importClass(org.apache.tools.ant.taskdefs.condition.Os);

var br = new BufferedReader(new FileReader(basedir + "/config_profiles.json"));
var json = "";
var line = br.readLine();
while(line != null) {
    json += line;
    line = br.readLine();
}
br.close();

var target_profile = eval("(" + json + ")")[device];
if(target_profile === undefined) {
    var fail = project.createTask("fail");
    fail.setMessage("Device profile " + device + " is undefined. Please use a valid profile in config_profiles.json.");
    fail.perform();
}

for(var api in target_profile) {
    var exec = project.createTask("exec");
    exec.setDir(new File(basedir + "/node_modules/webinos-pzp"));
    if (Os.isFamily("windows")) {
        exec.setExecutable("cmd");
        exec.createArg().setValue("/c");
        exec.createArg().setValue("npm.cmd");
    } else {
        exec.setExecutable("npm");
    }
    exec.createArg().setValue("install");
    exec.createArg().setValue(target_profile[api]);
    exec.createArg().setValue("--save");
    exec.perform();
}
