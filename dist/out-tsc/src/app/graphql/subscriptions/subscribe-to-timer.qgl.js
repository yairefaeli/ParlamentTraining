var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from "graphql-tag";
export var subscribeToTimer = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    subscription subscribeToTimer($playerToken: String!){\n        subscribeToTimer(playerToken: $playerToken)\n    }\n"], ["\n    subscription subscribeToTimer($playerToken: String!){\n        subscribeToTimer(playerToken: $playerToken)\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=subscribe-to-timer.qgl.js.map