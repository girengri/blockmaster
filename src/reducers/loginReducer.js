import { typesSesion } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case typesSesion.login:
            return {
                id: action.payload.id,
                name: action.payload.displayname,
            };

        case typesSesion.logout:
            return {};

        default:
            return state;
    }
};
