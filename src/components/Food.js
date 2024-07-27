import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { ProductService } from '../service/ProductService';

const Tailwind = {
    dataview: {
        content: {
            className: classNames(
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            )
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
    dataviewlayoutoptions: {
        listbutton: ({ props }) => ({
            className: classNames(
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
                props.layout === 'list' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'
            )
        }),
        gridbutton: ({ props }) => ({
            className: classNames(
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
                props.layout === 'grid' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'
            )
        })
    }
};

const DataViewLayoutOptionsCustom = ({ layout, onChange }) => {
    return (
        <div className="flex">
            <div {...Tailwind.dataviewlayoutoptions.listbutton({ props: { layout } })} onClick={() => onChange({ value: 'list' })}>
                <i className="pi pi-bars"></i>
            </div>
            <div {...Tailwind.dataviewlayoutoptions.gridbutton({ props: { layout } })} onClick={() => onChange({ value: 'grid' })}>
                <i className="pi pi-th-large"></i>
            </div>
        </div>
    );
};

export default function BasicDemo() {
    const [products, setProducts] = useState([]);
    const [layout, setLayout] = useState('list');

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 5)));
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    const itemTemplate = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <div className={Tailwind.dataview.header}>
                Products
                <DataViewLayoutOptionsCustom layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
            <DataView
                value={products}
                layout={layout}
                itemTemplate={itemTemplate}
                className={Tailwind.dataview.content.className}
                paginator
                rows={5}
            />
        </div>
    )
}
