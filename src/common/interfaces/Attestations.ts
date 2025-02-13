export interface IAttestations {
  attestations: {
    id: string
    refUID: string    
    attester: string
    recipient: string    
    revocable: boolean
    revocationTime: number
    expirationTime: number
    isOffchain : boolean
    schemaId: string
    timeCreated: number
    schema: {
      index: number,
      schemaNames: {
        name: string
      }[]
    }
  }[]
}

export interface ITotalAttestations {
  aggregateAttestation: {
    _count: {
      id: number 
    }
  }
}

export interface ITotalSchemas {
  aggregateSchema: {
    _count: {
      id: number 
    }
  }
}