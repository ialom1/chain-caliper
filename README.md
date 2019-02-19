Process Flow in Caliper:

main.js(benchmarkConfig, networkConfig){
    bench-flow.run(benchmarkConfig, networkConfig){

        await execAsync(networkObject.caliper.command.start){
            // starts the docker containers;
        }

        // creates a corresponding blockchain object from its adapter using the given config

        await new blockchain.init(){
            // uses the blockchain object to init the blockchain{
                // creates the  channel
                // adds the genesis block to the channel
                // joins the peers to the channel
            }
        }
        await blockchain.installSmartContract(){
            // uses the blockchain object to init the chaincode{
                // installs the chaincode
                // creates the chaincode containers
                // instantiates the chaincode into all peers
            }
        }
        
        await new client.init();
        await new blockchain.prepareClients(numberOfClients);
    }
}