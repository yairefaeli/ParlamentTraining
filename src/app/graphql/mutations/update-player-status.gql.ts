import gql from 'graphql-tag';

export const updatePlayerStatus = gql`
    mutation updatePlayerStatus($token: String!, $status: PlayerStatus!) {
        updatePlayerStatus(input: {
           token: $token,
           status: $status
       }){ 
            player{
                name,
                status,
                key,
                createdAt
            }
         }
    }
`;