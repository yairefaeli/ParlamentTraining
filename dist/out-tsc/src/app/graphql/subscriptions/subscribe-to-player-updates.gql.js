var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
export var subscribeToPlayerUpdates = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    subscription subscribeToPlayerUpdates($loginToken: String!){\n        playerStatusChanged(currentPlayerToken: $loginToken){\n            name\n            status\n        }\n    }\n"], ["\n    subscription subscribeToPlayerUpdates($loginToken: String!){\n        playerStatusChanged(currentPlayerToken: $loginToken){\n            name\n            status\n        }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=subscribe-to-player-updates.gql.js.map