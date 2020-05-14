import gql from "graphql-tag";

export const subscribeToTimer = gql`
    subscription subscribeToTimer($playerToken: String!){
        subscribeToTimer(playerToken: $playerToken)
    }
`;