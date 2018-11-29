import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import { assetReducer, AssetState } from "./asset/assetReducer";
import { chainReducer, ChainState } from "./chain/chainReducer";
import { ActionType } from "./global/globalActions";
import { globalReducer, GlobalState } from "./global/globalReducer";
import { walletReducer, WalletState } from "./wallet/walletReducer";

export interface ReducerConfigure {
    globalReducer: GlobalState;
    walletReducer: WalletState;
    assetReducer: AssetState;
    chainReducer: ChainState;
}

const appReducer = combineReducers({
    globalReducer,
    walletReducer,
    assetReducer,
    chainReducer,
    loadingBar: loadingBarReducer
});

const rootReducer = (state: any, action: any) => {
    if (action.type === ActionType.ClearData) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
