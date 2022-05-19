# DDHUB Client Gateway

DDHUB Client Gateway is a set of applications to communicate with [DDHUB Message Broker](https://github.com/energywebfoundation/ddhub-message-broker).  
This repository contains several applications.

### Frontend
![img.png](docs/images/img.png)

This application allows us to configure client gateway backend

### API

Communicates directly with message broker for topics, messaging etc.

### Scheduler

Retrieves and caches data for performance purposes

## Environment variables

### API

| KEY                                      	| TYPE    	| DEFAULT VALUE                              	| ALLOWED VALUES                                                     	| DESCRIPTION                                                                                                                 	| DEPENDENCY KEY               	|
|------------------------------------------	|---------	|--------------------------------------------	|--------------------------------------------------------------------	|-----------------------------------------------------------------------------------------------------------------------------	|------------------------------	|
| NODE_ENV                                 	| String  	| null                                       	| production, development, test                                      	|                                                                                                                             	|                              	|
| PORT                                     	| Number  	| 3333                                       	| Any positive integer                                               	| Port on which application should listen                                                                                     	|                              	|
| RPC_URL                                  	| String  	| https://volta-rpc.energyweb.org/           	| Any string (URL)                                                   	| RPC network                                                                                                                 	|                              	|
| DSB_BASE_URL                             	| String  	| https://dsb-demo.energyweb.org             	| Any string (URL)                                                   	| Message broker URL. Note that this key will change to MB_URL                                                                	|                              	|
| CLIENT_ID                                	| String  	| WS-CONSUMER                                	| Any string                                                         	| Client ID used for WebSocket messaging                                                                                      	|                              	|
| EVENTS_MAX_PER_SECOND                    	| Number  	| 2                                          	| Any positive integer                                               	| Maximum amount of messages to receive                                                                                       	|                              	|
| PARENT_NAMESPACE                         	| String  	| dsb.apps.energyweb.iam.ewc                 	| Any string                                                         	| Default namespace for enrolment configuration                                                                               	|                              	|
| EVENT_SERVER_URL                         	| String  	| identityevents-dev.energyweb.org           	| Any string (URL)                                                   	| Events URL on which application should listen during enrolment                                                              	|                              	|
| NATS_ENV_NAME                            	| String  	| ewf-dev                                    	| Any string                                                         	|                                                                                                                             	|                              	|
| CHAIN_ID                                 	| Number  	| 73799                                      	| 73799 - development network (VOLTA) 456 - production network (EWC) 	| RPC Network chain id                                                                                                        	|                              	|
| CACHE_SERVER_URL                         	| String  	| https://identitycache-dev.energyweb.org/v1 	| Any string (URL)                                                   	| IAM Cache Server URL                                                                                                        	|                              	|
| CLAIM_MANAGER_ADDRESS                    	| String  	| 0x5339adE9332A604A1c957B9bC1C6eee0Bcf7a031 	| Any string (address)                                               	| Overridden claim manager address                                                                                            	|                              	|
| EVENTS_EMIT_MODE                         	| String  	| BULK                                       	| Any string (BULK, SINGLE)                                          	| Should emit websocket messages in bulk or single message                                                                    	| WEBSOCKET != 'NONE'          	|
| DID_TTL                                  	| Number  	| 60                                         	| Any positive integer                                               	| How long DID should be cached for messaging purposes (seconds)                                                              	|                              	|
| WEBSOCKET                                	| String  	| NONE                                       	| Any string (NONE, SERVER, CLIENT)                                  	| Determines if WebSocket is enabled (only for SERVER and CLIENT we enable WS)  and how it should run (client or server mode) 	|                              	|
| WEBSOCKET_URL                            	| String  	| null                                       	| Any string (URL)                                                   	| Determines to which WS Server should application connect                                                                    	| WEBSOCKET = 'CLIENT'         	|
| WEBSOCKET_PROTOCOL                       	| String  	| dsb-protocol                               	| Any string                                                         	| Which protocol should use when connecting to WS Server                                                                      	| WEBSOCKET = 'CLIENT'         	|
| WEBSOCKET_RECONNECT_TIMEOUT              	| Number  	| 5000                                       	| Any positive integer                                               	| How long application should wait to reconnect                                                                               	| WEBSOCKET = 'CLIENT'         	|
| WEBSOCKET_RECONNECT                      	| Boolean 	| true                                       	| Boolean                                                            	| Should WS attempt to reconnect to server                                                                                    	| WEBSOCKET = 'CLIENT'         	|
| WEBSOCKET_RECONNECT_MAX_RETRIES          	| Number  	| 10                                         	| Any positive integer                                               	| How many times WS should attempt reconnecting                                                                               	| WEBSOCKET = 'CLIENT'         	|
| WEBSOCKET_POOLING_TIMEOUT                	| Number  	| 5000                                       	| Any positive integer                                               	| How often server should poll for messages                                                                                   	|                              	|
| SECRETS_ENGINE                           	| String  	| vault                                      	| Any string (vault)                                                 	| Which secrets engine it should use to store secret data                                                                     	|                              	|
| VAULT_ENDPOINT                           	| String  	| null                                       	| Any string (URL)                                                   	| Vault endpoint                                                                                                              	| SECRETS_ENGINE = 'VAULT'     	|
| VAULT_TOKEN                              	| String  	| root                                       	| Any string                                                         	| Vault token                                                                                                                 	| SECRETS_ENGINE = 'VAULT'     	|
| USERNAME                                 	| String  	| null                                       	| Any string                                                         	| Username for API authentication. Not implemented YET.                                                                       	|                              	|
| PASSWORD                                 	| String  	| null                                       	| Any string                                                         	| Password for API authentication. Not implemented YET.                                                                       	|                              	|
| MAX_RETRIES                              	| Number  	| 3                                          	| Any positive integer                                               	| How many times application should attempt to make a request to message broker                                               	|                              	|
| DID_CLAIM_NAMESPACE                      	| String  	| message.broker.app.namespace               	| Any string                                                         	| Namespace for fetching applications                                                                                         	|                              	|
| MAX_FILE_SIZE                            	| Number  	| 100000000                                  	| Any positive integer                                               	| Maximum file size for large data messaging (100 MB)                                                                         	|                              	|
| SYMMETRIC_KEY_CLIENT_ID                  	| String  	| test                                       	| Any string                                                         	| Client ID for fetching Symmetric Keys.                                                                                      	|                              	|
| AMOUNT_OF_SYMMETRIC_KEYS_FETCHED         	| Number  	| 100                                        	| Any positive integer                                               	| How many symmetric keys should be fetched                                                                                   	|                              	|
| OPENTELEMETRY_ENABLED                    	| Boolean 	| false                                      	| Boolean                                                            	| Should enable OTEL                                                                                                          	|                              	|
| OTEL_IGNORED_ROUTES                      	| String  	| health,api/v2/health                       	| Any string separated by `,`                                        	| Ignored routes for tracing                                                                                                  	| OPENTELEMETRY_ENABLED = true 	|
| OTEL_TRACING_URL                         	| String  	| http://localhost:4318/v1/traces            	| Any string (URL)                                                   	| OTEL Collector tracing URL                                                                                                  	| OPENTELEMETRY_ENABLED = true 	|
| OTEL_SERVICE_NAME                        	| String  	| ddhub-client-gateway                       	| Any string                                                         	| OTEL service name identifier                                                                                                	| OPENTELEMETRY_ENABLED = true 	|
| OTEL_ENVIRONMENT                         	| String  	| local                                      	| Any string                                                         	| OTEL environment                                                                                                            	| OPENTELEMETRY_ENABLED = true 	|
| APPLICATION_NAMESPACE_REGULAR_EXPRESSION 	| String  	| `\\ w.apps.* \\ w.iam.ewc`                 	| Any string (regular expression)                                    	|                                                                                                                             	|                              	|
| DB_NAME                                  	| String  	| local.db                                   	| Any string (path)                                                  	| Where database file should be created                                                                                       	|                              	|

### Frontend
| KEY                         	| TYPE             	| DEFAULT VALUE 	| ALLOWED VALUES 	| DESCRIPTION                                                                 	| DEPENDENCY KEY 	|
|-----------------------------	|------------------	|---------------	|----------------	|-----------------------------------------------------------------------------	|----------------	|
| NEXT_PUBLIC_SERVER_BASE_URL 	| Any string (URL) 	|               	|                	|                                                                             	|                	|
| NEXT_PUBLIC_MOCK            	| Boolean          	| false         	| Boolean        	| Should mock DDHUB Client GW server. Use this only for development purposes. 	|                	|

## How to run

After configuring environment variables (in `.env` file) run following commands

### Development mode

```shell
$ npm ci

$ nx serve dsb-client-gateway-scheduler
$ nx serve dsb-client-gateway-api
$ nx serve dsb-client-gateway-frontend
```

### Production mode

```shell
$ npm ci

$ nx build dsb-client-gateway-scheduler
$ nx build dsb-client-gateway-api

$ node dist/apps/dsb-client-gateway-api/main.js
$ node dist/apps/dsb-client-gateway-scheduler/main.js
```

Running pure `node` in production is not recommended. Use any process manager (pm2, docker etc.) for stability.  
You can find docker images in `ci` directory.

## Swagger
Swagger is available on route `{{API_HOST}}/docs`.    
Postman collection to import is available under `${{API_HOST}}/docs-json`

## Helpful links

- [HELM](https://github.com/energywebfoundation/dsb-client-gateway-helm)
- [Message Broker](https://github.com/energywebfoundation/ddhub-message-broker)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
