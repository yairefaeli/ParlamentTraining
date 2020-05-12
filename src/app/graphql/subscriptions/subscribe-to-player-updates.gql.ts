import gql from "graphql-tag";

export const subscribeToPlayerUpdates = gql`
    subscription subscribeToPlayerUpdates($loginToken: String!){
        playerStatusChanged(currentPlayerToken: $loginToken){
            name
            status
        }
    }
`;