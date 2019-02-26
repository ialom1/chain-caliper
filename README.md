### Process Flow in Hyperledger Caliper
#### Fabcar Network tests

benchmark/simple/main.js {  
    // caliper process begins from main.js

    bench-flow.run(benchmarkConfig, networkConfig){
        // entire process flow is maintained from here

        await execAsync(networkObject.caliper.command.start){
            // start the docker containers
        }

        blockchain = new Blockchain(absNetworkFile);
        // create a corresponding blockchain object from its adapter using the given config

        await blockchain.init(){
            // uses the blockchain object to init the blockchain{
                // create the  channel
                // add the genesis block to the channel
                // join the peers to the channel
            }
        }
        await blockchain.installSmartContract(){
            // uses the blockchain object to init the chaincode{
                // install the chaincode
                // create the chaincode containers
                // instantiate the chaincode into all peers
            }
        }

        numberOfClients = await new client.init(){
            //  get the number of clinets from the benchmark config file for performing tests
        }
        clientArgs = await blockchain.prepareClients(numberOfClients){
            // prepare the clients according to the blockchain requirements
            // BUT method not defined in the Fabric class
        }

        await monitor.start(){
            // starts a mechanism to monitor the resources mentioned in the benchmark config file
        }

        let allTests = configObject.test.rounds;
        for (let test of allTests) {
            ++testIdx;

            await defaultTest(test, clientArgs, (testIdx === testNum)){
                // testing begins here

                // Generate the message containig parameters like arguments, test, callback function etc

                // demo.startWatch(client) {
                    informs the monitor to watch the client
                }                       
            }
        }

        await monitor.stop(){
            // stop the monitoring process
        }
        await report.generate(output){
            // generate benchmark report in html
        }
        await execAsync(networkObject.caliper.command.end){
            // stop the docker containers
        }
    }
}
