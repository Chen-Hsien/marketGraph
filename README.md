# MarketplaceV3 Subgraph

This subgraph indexes events from the MarketplaceV3 contract on the Polygon Amoy network.

## Deployment Information
- Network: polygon-amoy
- Contract Address: 0x3dd99A2Cb8d7e9B6F8f959F73Ed67Cc8e88742A3
- Start Block: 17835264

## Entities Overview

### Market Base Events
- **ContractURIUpdated**: Tracks changes in contract URI
- **Initialized**: Records contract initialization
- **RoyaltyEngineUpdated**: Monitors royalty engine updates

### Extension Management
- **ExtensionAdded**: Records new extension additions
- **ExtensionRemoved**: Tracks extension removals
- **ExtensionReplaced**: Monitors extension replacements
- **FunctionEnabled**: Records function enablement
- **FunctionDisabled**: Tracks function disablement

### Fee Management
- **FlatPlatformFeeUpdated**: Tracks updates to flat platform fees
- **PlatformFeeInfoUpdated**: Records changes in platform fee information
- **PlatformFeeTypeUpdated**: Monitors platform fee type changes

### Role Management
- **RoleAdminChanged**: Tracks changes in role administrators
- **RoleGranted**: Records role assignments
- **RoleRevoked**: Monitors role revocations

## Common Fields
All entities include these base fields:
- `id: Bytes!`
- `blockNumber: BigInt!`
- `blockTimestamp: BigInt!`
- `transactionHash: Bytes!`

## Primary Functions
This subgraph serves to:
1. Track marketplace contract extension management
2. Monitor fee configuration changes
3. Record role permission changes
4. Track contract configuration updates

## Development

### Prerequisites
- Node.js
- Graph CLI (`@graphprotocol/graph-cli`)
- Access to a Graph node

### Installation
bash
Install dependencies
npm install
Install Graph CLI globally
npm install -g @graphprotocol/graph-cli

### Project Structure
text
market_test/
├── abis/ # Contract ABIs
│ └── MarketplaceV3.json
├── src/ # AssemblyScript mappings
│ └── marketplace-v-3.ts
├── schema.graphql # GraphQL schema
├── subgraph.yaml # Subgraph manifest
├── networks.json # Network configurations
└── package.json

### Configuration Files

#### subgraph.yaml
The manifest defines:
- Data sources
- Smart contract ABIs
- Event handlers
- Entities to track

#### schema.graphql
Defines the data structure for:
- Event entities
- Relationships between entities
- Field types and requirements

#### networks.json
Contains deployment-specific information:
- Contract addresses
- Start blocks
- Network configurations