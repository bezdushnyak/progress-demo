import Button from "./button";
import { useRandomCatImg } from "ui/hooks/useRandomCatImg";

const ImgLoader = () => {
    const {
        error,
        loading,
        progress,
        img,
        loadRandomCatImg
    } = useRandomCatImg();

    const onBtnClick = () => {
        loadRandomCatImg();
    }

    return (
       <div>
           <div>Total: {progress?.total}</div>
           <div>Loaded: {progress?.loaded}</div>

           {error && <div>Error occurs while loading</div>}

           <Button onClick={onBtnClick}>Load huge image</Button>

           {loading && <div>loading...</div>}
           {img && <img src={img} alt="random cat"/>}
       </div>
    )
}

export default ImgLoader;
