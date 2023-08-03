import React from "react";
import ProductCard from "./ProductCard";

export default function TabsContent() {
    return (
        <div className="mb-6">
            <div
                className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-home01"
                role="tabpanel"
                aria-labelledby="tabs-home-tab01"
                data-te-tab-active
            >
                <div className="w-full grid grid-cols-3 gap-5">
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                </div>
            </div>
            <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-profile01"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab01"
            >
                <div className="w-full grid grid-cols-3 gap-5">
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                </div>
            </div>
            <div
                className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id="tabs-messages01"
                role="tabpanel"
                aria-labelledby="tabs-profile-tab01"
            >
                <div className="w-full grid grid-cols-3 gap-5">
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                    <ProductCard
                        title={"test we"}
                        description={"weee desc"}
                        imgUrl={
                            "https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                        }
                    ></ProductCard>
                </div>
            </div>
        </div>
    );
}
