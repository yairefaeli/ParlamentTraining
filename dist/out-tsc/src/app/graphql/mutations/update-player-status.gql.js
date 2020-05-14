var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
export var updatePlayerStatus = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation updatePlayerStatus($token: String!, $status: PlayerStatus!) {\n        updatePlayerStatus(input: {\n           token: $token,\n           status: $status\n       }){ \n            player{\n                name,\n                status,\n                key,\n                createdAt\n            }\n         }\n    }\n"], ["\n    mutation updatePlayerStatus($token: String!, $status: PlayerStatus!) {\n        updatePlayerStatus(input: {\n           token: $token,\n           status: $status\n       }){ \n            player{\n                name,\n                status,\n                key,\n                createdAt\n            }\n         }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=update-player-status.gql.js.map