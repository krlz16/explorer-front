import { fetchGraphQL } from "./api";
import { IAttestations, ISchemas, ITotalAttestations, ITotalSchemas } from "@/common/interfaces/Attestations";

export async function fetchAttestations(params: object) {
    const query = 
        `query Attestations {
            attestations(orderBy: { time: desc}) {
                id
                attester
                recipient
                refUID
                revocable
                revocationTime
                expirationTime
                data,
                isOffchain
                schemaId
                timeCreated
                schema {
                    index
                    schemaNames {
                        name
                    }
                } 
            }
        }`;
    
  const response = await fetchGraphQL<IAttestations>(query, params);
  return response;
}

export async function fetchTotalAttestations(params: object) {
    const query = 
        `query Attestations {
            aggregateAttestation {
                _count {
                    id
                }
            }
        }`;
    
  const response = await fetchGraphQL<ITotalAttestations>(query, params);
  return response;
}

export async function fetchTotalOffchainAttestations() {
    const variables = {
        where: {
            isOffchain: {
                equals: true
            }
        },
    };    
    
    const query = 
        `query Attestations($where: AttestationWhereInput) {
            aggregateAttestation(where: $where) {
                _count {
                    id
                }
            }
        }`;
    
  const response = await fetchGraphQL<ITotalAttestations>(query, variables);
  return response;
}

export async function fetchTotalSchemas() {
    const query = 
        `query AggregateSchema {
            aggregateSchema {
                _count {
                    id
                }
            }
        }`;
    
  const response = await fetchGraphQL<ITotalSchemas>(query);
  return response;
}

export async function fetchSchemas(params: object) {
    const query = 
        `query Schemata {
            schemata {
                id
                index
                schema
                resolver    
                _count {
                    attestations
                }
            }
        }`;
        
    const response = await fetchGraphQL<ISchemas>(query, params);
    return response;
}