### Process Flow in Caliper

benchmark/simple/main.js{
    // caliper process begins from main.js

    bench-flow.run(benchmarkConfig, networkConfig){
        // entire process flow is maintained from here

        await execAsync(networkObject.caliper.command.start){
            // starts the docker containers;
        }

        blockchain = new Blockchain(absNetworkFile);
        // creates a corresponding blockchain object from its adapter using the given config

        await blockchain.init(){
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
        
        numberOfClients = await new client.init(){
            //  get the number of clinets for performing tests
        }
        await new blockchain.prepareClients(numberOfClients){
            // method not defined in the Fabric class
        }

        await monitor.start(){
            // starts the resource monitor
        }
    }
}
