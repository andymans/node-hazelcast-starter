# hazelcast-server-basic
This is a fully functional, but minimalistic Hazelcast server, configured using Spring. For those new to Hazelcast projects, I've used Spring's XML configuration (see resources/beans.xml) so that you can see in one place how all the pieces fit together.
## Building the server
Once you've cloned / downloaded this project, open up a terminal and cd into 'node-hazelcast-starter/hazelcast-server-basic'. To build the Hazelcast server, just type ```mvn clean package install``` at the command prompt. Maven will retrive all your dependencies, and build the executable, and deploy it to a new folder called ```target```
## Running the server
To run the server on an unix-based OS, you just need to type ```sh target/bin/hz``` which will execute the "hz" executable created in the build step. On MS Windows, you can run the hz.bat file in the target/bin directory.
