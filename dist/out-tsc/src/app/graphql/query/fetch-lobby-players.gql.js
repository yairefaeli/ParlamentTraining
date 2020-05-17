var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
export var fetchLobbyPlayers = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    query getPlayers {\n        getPlayers{\n           name,\n           status,\n           createdAt\n       }\n    }\n"], ["\n    query getPlayers {\n        getPlayers{\n           name,\n           status,\n           createdAt\n       }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=fetch-lobby-players.gql.js.map