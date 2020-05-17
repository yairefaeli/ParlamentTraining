var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import gql from 'graphql-tag';
export var login = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    mutation login($playerName: String!) {\n       login(input: {\n           playerName: $playerName\n       }){ \n           token,\n           errors\n         }\n    }\n"], ["\n    mutation login($playerName: String!) {\n       login(input: {\n           playerName: $playerName\n       }){ \n           token,\n           errors\n         }\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=login.gql.js.map