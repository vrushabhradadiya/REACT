
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Item_img(props) {
    const [ImgLoading, SetImgLoading] = useState(true);

    return (
        <div className="relative w-full h-[450px] bg-[#E2E2E2] flex items-center justify-center overflow-hidden rounded-2xl">


            <img
                src={props.values}
                onLoad={() => SetImgLoading(false)}
                onError={() => SetImgLoading(false)}
                className="w-full h-full object-contain"
                alt="Product"
            />


            {ImgLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#E2E2E2]">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </Spinner>
                </div>
            )}

        </div>
    );
}
