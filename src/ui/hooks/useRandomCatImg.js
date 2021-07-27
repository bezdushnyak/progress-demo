import { useDispatch, useSelector } from "react-redux";

import {
    getError,
    getIsLoading,
    getLoadProgress,
    getImg
} from "store/randomCatImage/selectors";
import * as actions from "store/randomCatImage/actions";

export const useRandomCatImg = () => {
    const dispatch = useDispatch();

    const error = useSelector(getError);
    const loading = useSelector(getIsLoading);
    const progress = useSelector(getLoadProgress);
    const img = useSelector(getImg);

    const loadRandomCatImg = () => dispatch(actions.loadRandomCatImage());

    return {
        loadRandomCatImg,
        error,
        loading,
        progress,
        img,
    }
};
