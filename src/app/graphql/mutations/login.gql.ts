import gql from 'graphql-tag';

export const login = gql`
    mutation login($playerName: String!) {
       login(input: {
           playerName: $playerName
       }){ 
           token,
           errors
         }
    }
`;