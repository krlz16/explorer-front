import { fetchGraphQL } from "./api";
import { IAttestations, ITotalAttestations, ITotalSchemas } from "@/common/interfaces/Attestations";

export async function fetchAttestations(params: object) {
    const query = 
        `query Attestations {
            attestations(take: 25, orderBy: { time: desc}) {
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